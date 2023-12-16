<script lang="ts">
	export let _class: string | undefined = undefined;
	export let _href: string | undefined = undefined;
</script>

<a
	href={_href}
	class="underline hover:text-primary-800
    {_class} "><slot /></a
>
