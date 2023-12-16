<script lang="ts">
  import { onMount } from 'svelte';

  export let date: Date;

  let delta: number;
  let deltaInDays: number;
  const currentDate: Date = new Date();

  onMount(() => {
    // Calculate delta and deltaInDays when the component is mounted
    delta = date.getTime() - currentDate.getTime();
    deltaInDays = Math.ceil(delta / (1000 * 60 * 60 * 24));
  });
</script>

{#if date}
    {deltaInDays} 
{/if}
