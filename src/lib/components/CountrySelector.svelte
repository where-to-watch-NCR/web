<script lang="ts">
	import { onMount } from 'svelte';

	export let value: string | undefined = undefined;

    export let _id: string | undefined = undefined;
    export let _name: string | undefined = undefined;
    export let _required: boolean | undefined = undefined;

	type countryDTO = { name: { common: string }; cca2: string };

	const apiEndpoint = 'https://restcountries.com/v3.1/all?fields=name,cca2';

	//https://restcountries.com/v3.1/all?fields=name,flags,cca2

	let countrys: countryDTO[] = [];

	onMount(async () => {
		console.log('contry code value:', value);
		fetch(apiEndpoint)
			.then((value) => {
				if (value.ok) {
					return value.json();
				}
			})
			.then((value: countryDTO[]) => {
				countrys = value;
				console.log(countrys);
				loading = false;
			});
	});

	let loading = true;
</script>

{#if loading}
	<select>
		<option>loading...</option>
	</select>
{:else}
	<select bind:value id={_id} name={_name} required={_required}>
		{#each countrys as { name, cca2 }}
			<option value={cca2}>{name.common}</option>
		{/each}
	</select>
{/if}
