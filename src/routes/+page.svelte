<script lang="ts">
    import type { PageData } from './$types'
    import type { Race } from '@prisma/client';

    export let data: PageData

    const races: Race[] = data.props.races;

  </script>

  {#if races}
    <ul>
      {#each races as race (race.id)}
        <li class="mb-2">
          <span class="font-bold">{race.name}</span> - {race.date}
        </li>
      {/each}
    </ul>
  {/if}
  