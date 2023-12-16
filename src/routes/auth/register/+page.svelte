<script>
	import Button from "$lib/components/Button.svelte";
	import Link from "$lib/components/Link.svelte";
	import LinkButton from "$lib/components/LinkButton.svelte";

</script>
<main class="flex flex-col gap-5 items-center w-full">
	<div class="w-full h-10">
		<div class="flex gap-2 p-2 ml-auto w-fit">
			<LinkButton _href="/">back</LinkButton>
		</div>
	</div>
	<div class="flex flex-col gap-5 p-5 rounded-xl bg-primary-300">
		<hgroup>
			<h2 class="text-2xl font-semibold">Register</h2>
			<h3>To vote, you'll need an account.</h3>
		</hgroup>

		<form method="POST" class="flex flex-col gap-2">
			<label for="mail">Email</label>
			<input type="mail" id="mail" name="mail" required />

			<label for="contry_code">Contry Code</label>
			<input type="text" id="contry_code" name="contry_code" />

			<label for="username">Username</label>
			<input type="text" id="username" name="username" required />

			<label for="password">Password</label>
			<input type="password" id="password" name="password" required />
			
			<Button _type="submit">Register</Button>
		</form>

		<p>
			Already have an account? <Link _href="/auth/login">Login</Link>
		</p>
	</div>
</main>
