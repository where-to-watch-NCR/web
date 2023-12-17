<script lang="ts">
	import { addBroadcast } from '$lib/webservice/broadcast.webserivce';
	import BroadcastTypeSelector from './BroadcastTypeSelector.svelte';
	import Button from './Button.svelte';
	import Dialog from './Dialog.svelte';

	let dialog: HTMLDialogElement;

	let selectedRaceId: number;

	let formData = {
		name: '',
		link: '',
		type: 0, // default to Free
		country_code: ''
	};

	export function displayDialog(raceId: number) {
		dialog.showModal();
		selectedRaceId = raceId;
	}

	function handelAddBroadcast() {
		console.log(formData);

		addBroadcast(formData, selectedRaceId).then((response) => {
            console.log(response);
			if (response.ok) {
				dialog.close();
			} else {
				console.error(`Failed to fetch broadcasts for race ${selectedRaceId}:`);
			}
		});
	}
</script>

<Dialog bind:dialog on:close={() => console.log('closed')}>
	<div class="flex flex-col gap-2 p-5 w-[50vw]">
		<h2 class="text-2xl font-semibold">Add a new broadcast link</h2>
		<form on:submit|preventDefault={handelAddBroadcast} class="flex flex-col gap-2">
			<label for="name">Name</label>
			<input type="text" id="name" name="name" required bind:value={formData.name} />

			<label for="link">Link</label>
			<input type="text" id="link" name="link" required bind:value={formData.link} />

			<label for="type">Type</label>
            <BroadcastTypeSelector _id="type" _name="type" _required="{true}" bind:value={formData.type}/>

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
