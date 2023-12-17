<script lang="ts">
	import type { BroadcastType } from '@prisma/client';

	export let broadcastType: BroadcastType | undefined = undefined;

    export let _class: string | undefined = undefined;

	const iconMap: Record<string, string> = {
		FREE: '/broadcastType/FREE.svg',
		FREGEO: '/broadcastType/FREGEO.svg',
		FREMI: '/broadcastType/FREMI.svg',
		PAY: '/broadcastType/PAY.svg',
	};
</script>

{#if broadcastType && broadcastType.code in iconMap}
	<img class="w-auto h-5 {_class}" src={iconMap[broadcastType.code]} alt="broadcast of type {broadcastType.label}" />
{/if}
