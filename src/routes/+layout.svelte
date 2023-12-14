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

    :global(body) {
        font-family: monospace;
        padding: 10px;
        margin: 0;
        background: rgb(21, 21, 22);
        color: white;
        text-align: center;
        user-select: none;
    }

    :global(button, textarea, input) {
        padding: 5px 10px;
        border: none;
        margin: 6px 3px 0px 3px;

        display: inline-block;

        background: rgb(44, 142, 255);
        color: white;

        font-family: inherit;
        border-radius: 6px;
        font-size: 17px;
        cursor: pointer;
    }


    :global(div#header-title) {
        font-size: 23px;
    }

    :global(#header-links a) {
        margin-top: 0;
        background: none;
    }

    :global(#header) {
        padding: 0 8px;
        margin-bottom: 32px;
        display: flex;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        font-size: 16px;
    }

    :global(.menu, .menu2, .buttons > .selected-group) {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: var(--canvasWidth);
        display: flex;
        justify-content: space-evenly;
    }

    :global(.buttons) {
        background: #7b7b7b;
        border-radius: 0 0 5px 5px;
        overflow-y: auto;
    }
    :global(.buttons > .selected-group) {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        height: 100px;
        padding: 10px;
        overflow-y: auto;
    }

    :global(
        .menu    a,
        .menu2   a
    ) {
        width: 100%;
        text-decoration: none;
    }
    :global(.buttons button) {
        width: calc(25% - 6px);
    }

    :global(.tab-bar > *) {
        background: #616161;
        margin: 0;
        margin-top: 8px;
        border-radius: 10px 10px 0 0;
        padding: 8px 10px;
        width: 100%;
        cursor: pointer;
    }
    :global(.tab-bar > .selected-group) {
        background: #7b7b7b;
    }

    :global(.info) {
        height: 20px;
        display: block;
    }

    :global(a) {
        color: white;
    }

    :global(form) {
        display: flex;
        align-items:  start;
        flex-direction: column;
    }

</style>