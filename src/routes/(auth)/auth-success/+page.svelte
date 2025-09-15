<script lang="ts">
	import { page } from '$app/state';
	import { Loader } from '@lucide/svelte';
	import { onMount } from 'svelte';

	const { data } = $props();

	const auth = $derived(data.supabase.auth);

	onMount(async () => {
		const code = page.url.searchParams.get('code');
		if (code === null) {
			alert('Bad Request. Auth code is not found');
			window.location.replace('/');
			return;
		}
		try {
			await auth.exchangeCodeForSession(code);
		} catch (error) {
			console.error(error);
			alert('Something went wrong when logging you in');
		} finally {
			window.location.replace('/');
		}
	});
</script>

<main class="flex h-screen flex-col items-center justify-center gap-4">
	<div class="flex items-center gap-2">
		<Loader class="animate-spin text-primary" />
		<h2>Logging you in.</h2>
	</div>
</main>
