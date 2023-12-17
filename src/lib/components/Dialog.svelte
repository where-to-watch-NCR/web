<script>
	export let dialog
</script>
<dialog  bind:this={dialog} on:close class="rounded-xl backdrop:backdrop-blur-sm w-fit backdrop:brightness-50 bg-primary-300 h-fit">
	<slot/>
</dialog>
