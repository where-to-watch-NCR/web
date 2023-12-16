<script lang="ts">
	export let _class: string | undefined = undefined;
	export let _href: string | undefined = undefined;
</script>

<a
	href={_href}
	class="px-2 py-1 capitalize rounded-lg bg-primary-500 hover:bg-primary-800 hover:text-white
    {_class} "><slot /></a
>
