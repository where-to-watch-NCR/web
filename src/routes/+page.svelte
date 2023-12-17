<script lang="ts">
	import type { PageData } from './$types';
	import type { Race } from '@prisma/client';
	import RaceComponent from '$lib/components/Race.svelte';

	export let data: PageData;

	const races: Race[] = data.props.races;


	
</script>

<main class="flex flex-col gap-5 items-center">
	<div class="flex items-center w-full h-12 bg-primary-900">
		<a class="px-2 ml-auto" href="/me">
			<img class="w-auto h-8" src="/profile.svg" alt="profile" />
		</a>
	</div>
	<div class="flex flex-col p-5 w-3/4 h-fit">
		{#if races}
			<ul class="flex flex-col gap-5">
				{#each races as race (race.id)}
				<RaceComponent {race} />
				{/each}
			</ul>
		{/if}
	</div>
</main>
