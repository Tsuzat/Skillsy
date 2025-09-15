<script lang="ts">
	import ModeToggler from './ModeToggler.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { Menu } from '@lucide/svelte';
	import logo from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';

	const links = ['Features', 'Pricing', 'Solution', 'FAQs'];
</script>

<header
	class="sticky top-0 z-50 flex items-center justify-between gap-4 rounded-lg bg-background/50 p-4 backdrop-blur-3xl"
>
	<a class="text-2xl" href={resolve('/')} aria-label="Home">
		<img src={logo} alt="Skillsy" class="size-8" />
	</a>
	<div class="hidden items-center gap-8 font-semibold sm:inline-flex">
		{#each links as link (link)}
			<a href={`#${link}`}>{link}</a>
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
			<Button href="#Join">Join Wishlist</Button>
			<ModeToggler />
		</DropdownMenu.Content>
	</DropdownMenu.Root>
	<div class="hidden gap-2 sm:inline-flex">
		<Button href="#Join" class="rounded-full">Join Wishlist</Button>
		<ModeToggler />
	</div>
</header>
