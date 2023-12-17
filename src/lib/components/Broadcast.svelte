<script lang="ts">
	import type { Broadcast } from "$lib/dto/broadcast/FullBroadcast.dto";
	import BroadcastIcon from "./BroadcastIcon.svelte";
import Link from "./Link.svelte";




export let broadcast: Broadcast;

</script>

<div class="flex  items-center gap-1">
    <BroadcastIcon broadcastType={broadcast?.broadcastType} />
    <Link _target="_blank" _href={broadcast.link}>{broadcast.name}</Link>

</div>