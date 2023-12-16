<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="flex flex-col gap-5 items-center w-full">
	<div class="w-full h-10">
		<div class="flex gap-2 p-2 ml-auto w-fit">
			<form method="POST">
                <Button _formaction="/auth/logout" _type="submit">Logout</Button>
			</form>
            <LinkButton _href="/">home</LinkButton>
		</div>
	</div>
	<div class="flex flex-col gap-5 p-5 rounded-xl bg-primary-300">
		<p class="text-2xl">Hello 👋 <span class="font-semibold">{data?.user?.username}</span></p>

		<form method="POST">
			<h3>You default contry is:</h3>
			<label for="contry_code">contry</label>
			<input
				type="contry_code"
				id="contry_code"
				name="contry_code"
				required
				value={data?.user?.contry_code}
			/>
            <Button _type="submit">Update</Button>
		</form>
	</div>
</main>
