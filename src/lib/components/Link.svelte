<script lang="ts">
	export let _class: string | undefined = undefined;
	export let _href: string | undefined = undefined;
	export let _target: string | undefined = undefined;
</script>

<a
	href={_href}
	target={_target}
	class="underline hover:text-primary-800
    {_class} "><slot /></a
>
