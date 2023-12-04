<script>
	/** @type {import('./$types').PageData} */
    export let data;
</script>

<form method='POST'>
    <p>Type a save code to upload it to the public.</p>
    <textarea name='save'>
        
    </textarea>
    <input type='submit'>
</form>

{data?.pageVisits}