<script lang="ts">
	import DaysUntil from '$lib/components/DaysUntil.svelte';
import type { PageData } from './$types';
	import type { Race } from '@prisma/client';

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
			<ul>
				{#each races as race (race.id)}
        <article class="flex flex-col gap-2 p-5 rounded-xl bg-primary-300">
          <div class="flex items-center">
            <h3 class="text-2xl font-semibold capitalize">{race.name}</h3>
            <div class="flex gap-2 p-2 mb-auto ml-auto h-fit w-fit">
              <p>In <DaysUntil date={new Date(race.date)}  /> days</p>
            </div>
          </div>
        </article>
				{/each}
			</ul>
		{/if}

		
	</div>
</main>
