<script lang="ts">

export let _class:string | undefined  = undefined;
export let _type:"button" | "submit" | "reset" | null | undefined;
export let _formaction:string | undefined = undefined;

</script>

<button type="{_type}" 
formaction="{_formaction}"
class="px-2 py-1 capitalize rounded-lg bg-primary-500 hover:bg-primary-800 hover:text-white 
{_class} "><slot></slot></button>