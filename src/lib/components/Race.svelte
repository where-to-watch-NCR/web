<script lang="ts">
	import { onMount } from 'svelte';
	import DaysUntil from './DaysUntil.svelte';
	import type { Broadcast } from '$lib/dto/broadcast/FullBroadcast.dto';
	import type { Race } from '@prisma/client';
	import AddBroadcastDialog from './AddBroadcastDialog.svelte';
	import BroadcastComponent from '$lib/components/Broadcast.svelte';
	import { getRaceBroadcasts } from '$lib/webservice/broadcast.webserivce';

	let addBroadcastDialog: AddBroadcastDialog;

	let loading = true;

	let raceBroadcasts: Broadcast[] = [];

	async function fetchRaceBroadcasts(raceId: number) {
		getRaceBroadcasts(raceId).then((response) => {
			if (response) {
				raceBroadcasts = response;
			}
			loading = false;
		});
	}

	onMount(() => {
		console.log('on mount', race);
		fetchRaceBroadcasts(race.id);
	});

	export let race: Race;
</script>

<article class="flex flex-col gap-2 p-5 rounded-xl bg-primary-300">
	<div class="flex items-center">
		<h3 class="text-2xl font-semibold capitalize">{race.name}</h3>
		<div class="flex gap-2 p-2 mb-auto ml-auto h-fit w-fit">
			<p>In <DaysUntil date={new Date(race.date)} /> days</p>
		</div>
	</div>

	{#if raceBroadcasts}
		<div class="flex gap-5">
			{#if loading}
				<p>Loading...</p>
			{:else}
				{#each raceBroadcasts as broadcast (broadcast.id)}
					<BroadcastComponent {broadcast} />
				{/each}
			{/if}

			<button class="underline" on:click={() => addBroadcastDialog.displayDialog(race.id)}
				>+ add link</button
			>
		</div>
	{/if}
	<AddBroadcastDialog bind:this={addBroadcastDialog} />
</article>
