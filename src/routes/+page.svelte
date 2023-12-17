<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import DaysUntil from '$lib/components/DaysUntil.svelte';
	import Dialog from '$lib/components/Dialog.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import type { Race, Broadcast } from '@prisma/client';
	import Link from '$lib/components/Link.svelte';

	export let data: PageData;

	let dialog: HTMLDialogElement;

	let selectedRaceId: number;
	let formData = {
		name: '',
		link: '',
		type: 0, // default to Free
		country_code: ''
	};

	const races: Race[] = data.props.races;

	const raceBroadcasts: Record<number, Broadcast[]> = {};

	async function fetchRaceBroadcasts(raceId: number) {
		try {
			const response = await fetch(`/api/broadcast/${raceId}`);
			if (response.ok) {
				const broadcasts = await response.json();
				raceBroadcasts[raceId] = broadcasts.body;
				console.log(`Broadcasts for race ${raceId}:`, broadcasts);
			} else {
				console.error(
					`Failed to fetch broadcasts for race ${raceId}:`,
					response.status,
					response.statusText
				);
			}
		} catch (error) {
			console.error(`Error fetching broadcasts for race ${raceId}:`, error);
		}
	}

	function displayDialog(raceId: number) {
		dialog.showModal();
		selectedRaceId = raceId;
	}

	async function addBroadcast() {
		try {
			const response = await fetch('/api/broadcast', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					...formData,
					raceId: selectedRaceId
				})
			});

			if (response.ok) {
				const result = await response.json();
				console.log('Broadcast added successfully:', result);
				// Handle success, e.g., close the dialog or update UI
				dialog.close();
			} else {
				console.error('Failed to add broadcast:', response.status, response.statusText);
				// Handle error, e.g., show an error message
			}
		} catch (error) {
			console.error('Error adding broadcast:', error);
			// Handle unexpected error
		}
	}
	// Fetch broadcasts for each race
	async function loadRaceBroadcasts() {
		for (const race of races) {
			await fetchRaceBroadcasts(race.id);
		}
	}

	onMount(() => {
		void loadRaceBroadcasts();
	});
</script>

<main class="flex flex-col gap-5 items-center">
	<div class="flex items-center w-full h-12 bg-primary-900">
		<a class="px-2 ml-auto" href="/me">
			<img class="w-auto h-8" src="/profile.svg" alt="profile" />
		</a>
	</div>
	<div class="flex flex-col p-5 w-3/4 h-fit">
		{#if races}
			<ul>
				{#each races as race (race.id)}
					<article class="flex flex-col gap-2 p-5 rounded-xl bg-primary-300">
						<div class="flex items-center">
							<h3 class="text-2xl font-semibold capitalize">{race.name}</h3>
							<div class="flex gap-2 p-2 mb-auto ml-auto h-fit w-fit">
								<p>In <DaysUntil date={new Date(race.date)} /> days</p>
							</div>
						</div>
						<div class="flex gap-2">
							<button class="underline" on:click={() => displayDialog(race.id)}>+ add link</button>
						</div>

						{#if raceBroadcasts[race.id]}
							<ul>
								{#each raceBroadcasts[race.id] as broadcast (broadcast.id)}
									<li><Link _target="_blank" _href={broadcast.link}>{broadcast.name}</Link></li>
								{/each}
							</ul>
						{/if}
					</article>
				{/each}
			</ul>
		{/if}
	</div>
	<Dialog bind:dialog on:close={() => console.log('closed')}>
		<div class="flex flex-col gap-2 p-5 w-[50vw]">
			<h2 class="text-2xl font-semibold">Add a new broadcast link</h2>
			<form on:submit|preventDefault={addBroadcast} class="flex flex-col gap-2">
				<label for="name">Name</label>
				<input type="text" id="name" name="name" required bind:value={formData.name} />

				<label for="link">Link</label>
				<input type="text" id="link" name="link" required bind:value={formData.link} />

				<label for="type">Type</label>
				<select id="type" name="type" required bind:value={formData.type}>
					<option value="0">Free</option>
					<option value="1">Premium</option>
				</select>

				<label for="country">Country</label>
				<input
					type="text"
					id="country"
					name="country_code"
					required
					bind:value={formData.country_code}
				/>

				<input type="hidden" id="race_id" name="raceId" value={selectedRaceId} />

				<Button _type="submit">Add</Button>
			</form>
		</div>
	</Dialog>
</main>
