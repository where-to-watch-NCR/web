<script lang="ts">
	import { getBroadCastType } from '$lib/webservice/broadcastType.webserivce';
	import type { BroadcastType } from '@prisma/client';
	import { onMount } from 'svelte';

	export let value: number;

	export let _id: string | undefined = undefined;
	export let _name: string | undefined = undefined;
	export let _required: boolean | undefined = undefined;


	let loading = true;
	let error = false;

	let broadcastType: BroadcastType[] = [];

	onMount(async () => {
		getBroadCastType().then((response) => {
			if (response) {
				broadcastType = response;
				loading = false;
			} else {
				error = true;
			}
		});
	});
</script>

<select id="{_id}" name="{_name}"  required={_required}  bind:value>
	{#if error}
		<option>Error</option>
	{:else if !loading}
		{#each broadcastType as type}
			<option value={type.id}>{type.label}</option>
		{/each}
	{:else}
		<option value="0">Loading...</option>
	{/if}
</select>
