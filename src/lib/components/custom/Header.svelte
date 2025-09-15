<script lang="ts">
	import ModeToggler from './ModeToggler.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { LogOut, Menu, User } from '@lucide/svelte';
	import logo from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';
	import type { Session, SupabaseClient } from '@supabase/supabase-js';
	import { getUserInitals } from '$lib/utils';
	import { toast } from 'svelte-sonner';
	import { goto } from '$app/navigation';

	const links = ['Features', 'Pricing', 'Solution', 'FAQs'];

	interface Props {
		supabase: SupabaseClient;
		session: Session | null;
	}
	const { session, supabase }: Props = $props();

	const user = $derived.by(() => {
		if (session === null) return undefined;
		else return session.user;
	});
</script>

<header
	class="sticky top-0 z-50 flex items-center justify-between gap-4 rounded-lg bg-background/50 p-4 backdrop-blur-3xl"
>
	<a class="text-2xl" href={resolve('/')} aria-label="Home">
		<img src={logo} alt="Skillsy" class="size-8" />
	</a>
	<div class="hidden items-center gap-8 sm:inline-flex">
		{#each links as link (link)}
			<a
				class="block text-muted-foreground duration-150 hover:text-accent-foreground"
				href={`#${link}`}>{link}</a
			>
		{/each}
	</div>
	<DropdownMenu.Root>
		<DropdownMenu.Trigger
			class={buttonVariants({ variant: 'ghost', size: 'icon', class: 'flex sm:hidden' })}
		>
			<Menu />
		</DropdownMenu.Trigger>
		<DropdownMenu.Content class="sm:hidden">
			{#each links as link (link)}
				<DropdownMenu.Item>
					<a href={`#${link}`}>{link}</a>
				</DropdownMenu.Item>
			{/each}
			<ModeToggler />
			{#if user}
				<Button>
					<User />
				</Button>
			{:else}
				<Button href="/login">Login</Button>
			{/if}
		</DropdownMenu.Content>
	</DropdownMenu.Root>
	<div class="hidden gap-2 sm:inline-flex">
		<ModeToggler />
		{#if user}
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class={buttonVariants({ size: 'icon', variant: 'ghost' })}>
					<Avatar.Root>
						<Avatar.Image src={user.user_metadata['avatar_url']} />
						<Avatar.Fallback>{getUserInitals(user.user_metadata['full_name'])}</Avatar.Fallback>
					</Avatar.Root>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Label class="text-sm font-normal text-muted-foreground"
						>{user.email}</DropdownMenu.Label
					>
					<DropdownMenu.Item
						onclick={() =>
							toast.promise(supabase.auth.signOut(), {
								loading: 'Logging You out',
								success: () => {
									goto('/');
									return 'Logged Out Successfully';
								},
								error: (error) => {
									//! TODO: Add a logger here for error monitoring
									console.error(error);
									return 'Something went wrong';
								}
							})}
					>
						<LogOut />
						Log Out
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		{:else}
			<Button href="/login">Login</Button>
		{/if}
	</div>
</header>
