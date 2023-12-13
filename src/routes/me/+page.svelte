<script lang="ts">
	import type { PageData } from "./$types";


export let data: PageData

</script>
<a href="/">back</a>
<p>me</p>
<p>Hello 👋 {data?.user?.username}</p>
<p>You default contry is {data?.user?.contry_code}</p>

<form method="POST">
    <h3>change default contry</h3>
    <label for="contry_code">contry</label>
	<input type="contry_code" id="contry_code" 
    name="contry_code" required value="{data?.user?.contry_code}" />
    <button  type="submit">Update</button>
</form>


<form method="POST">
    <button formaction="/auth/logout" type="submit">Logout</button>
</form>