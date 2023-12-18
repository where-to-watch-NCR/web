<script lang="ts">
	import { onMount } from "svelte";


export let country_code: string | undefined = undefined;

let flagPaht:string | undefined = undefined;


function getFlagApiUrl(country_code:string):string{
        return `https://restcountries.com/v3.1/alpha?codes=${country_code}&fields=flags`
    }



onMount(async ()=>{
    if (!country_code){
        return
    }
    fetch(getFlagApiUrl(country_code))
    .then((value)=>{
        if(value.ok){
            return value.json()
        }
    })
    .then((value)=>{
        flagPaht = value[0]?.flags?.svg
    });

} )

</script>

{#if flagPaht}
<img class="w-6 h-4" src={flagPaht} alt="flag" />
{/if}
