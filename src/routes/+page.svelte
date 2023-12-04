<script>
    import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
    export let data;

    let rows = [];

    let org = '';

    onMount(() => {
        org = window.location.origin;
        rows = data.rows || [];
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
    <input name='name' value='Name'>
    <textarea name='save'>Code</textarea>
    <input type='submit'>
</form>

<div class='rows'>
    {#each rows as row}
        <div class='item'>
            {#if isJsonString(row.data)}
                <iframe width='240' height='135' src='https://altboxels.qazox.dev?only=true&embed={org}/embed/{row.title}'></iframe>
            {/if}
            <span><a href='https://altboxels.qazox.dev?embed={org}/embed/{row.title}'>{row.title}</a></span>
            <span>Published on {(new Date(row.date)+'').split('GMT')[0]}</span>
        </div>
    {/each}
</div>

<style>
    iframe {
        border: none;
    }
    .item {
        display: flex;
        flex-direction: column;
        width: 240px;
        margin: 20px;
    }
    .rows {
        display: flex;
    }
</style>