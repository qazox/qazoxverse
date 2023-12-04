<script>

    import Header from "../lib/Header.svelte";

</script>
<Header />

<div class='main'>
<slot />
</div>

<style>
    .main {
        padding: 10px;
    }

    :global(:root) {
        font-family: 'Noto Sans', sans-serif;
        
        --gray-1: rgb(30, 39, 49);
        --gray-2: rgb(38, 49, 85);
        --gray-3: rgb(48, 59, 158);
        --gray-4: rgb(106, 56, 223);
        --gray-5: rgb(184, 129, 235);
        --gray-6: rgb(243, 208, 247);
        --gray-7: rgb(245, 240, 255);
    }

    :global(body) {
        padding: 0;
        margin: 0;

        background: var(--gray-2);
        color: var(--gray-7);
    }

    :global(form) {
        display: flex;
        flex-direction: column;
        width: 500px;
    }

    :global(textarea, button, input) {
        padding: 5px;
        border: none;
        margin: 6px 3px 0px 3px;
        background: var(--gray-7);
        box-shadow: var(--gray-7) 0px 0px 20px -2px;
        color: var(--gray-1);
        font-family: monospace;
    }

</style>