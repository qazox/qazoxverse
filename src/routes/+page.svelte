<script>
    import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
    export let data;

    let rows = [];

    let org = '';

    let pages = 0;

    onMount(() => {
        org = window.location.origin;
        rows = data.rows || [];
        pages = data.pages || 0;
    })

    function isJsonString(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

</script>

<form method='POST'>
    <p>Type a save code from <a href='https://altboxels.qazox.dev/'>Altboxels</a> to upload it to the public.</p>
    <input name='name' value='Name'><br/>
    <textarea name='save'>Code</textarea><br/>
    <input type='submit'><br/>
</form>

<div class='rows'>
    {#each rows as row}
        <div class='item'>
            <span><a href='https://altboxels.qazox.dev?embed={org}/embed/{row.title}'>{row.title}</a></span>
            <span>Published on {(new Date(row.date)+'').split('GMT')[0]}</span>
        </div>
    {/each}
</div>

<a href='?page={Math.max(pages*1-1,1)}' data-sveltekit-reload><button>Previous Page</button></a>
<a href='?page={pages*1+1}' data-sveltekit-reload><button>Next Page</button></a>

<style>
    .item {
        display: flex;
        flex-direction: column;
        width: 240px;
        margin: 20px;
    }
    .rows {
        display: flex;
        flex-wrap: wrap;
    }
</style>