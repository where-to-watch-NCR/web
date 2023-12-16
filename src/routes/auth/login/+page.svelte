<script>
	import Button from '$lib/components/Button.svelte';
	import Link from '$lib/components/Link.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
</script>

<main class="flex flex-col gap-5 items-center w-full">
	<div class="w-full h-10">
		<div class="flex gap-2 p-2 ml-auto w-fit">
			<LinkButton _href="/">back</LinkButton>
		</div>
	</div>
	<div class="flex flex-col gap-5 p-5 rounded-xl bg-primary-300">
		<hgroup>
			<h2 class="text-2xl font-semibold">Login</h2>
			<h3>Welcome back!</h3>
		</hgroup>

		<form method="POST" class="flex flex-col gap-2">
			<label for="mail">Mail</label>
			<input type="text" id="mail" name="mail" required />

			<label for="password">Password</label>
			<input type="password" id="password" name="password" required />

			<Button _type="submit">Login</Button>
		</form>

		<p>Don't have an account? <Link _href="/auth/register">Register</Link></p>
	</div>
</main>
