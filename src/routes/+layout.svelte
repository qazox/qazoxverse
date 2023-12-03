<slot />

<style>
    :global(:root) {
        font-family: 'Noto Sans', sans-serif;
        
        --gray-1: rgb(36, 43, 51);
        --gray-2: rgb(38, 49, 85);
        --gray-3: rgb(48, 59, 158);
        --gray-4: rgb(106, 56, 223);
        --gray-5: rgb(184, 129, 235);
        --gray-6: rgb(243, 208, 247);
    }

    :global(body) {
        padding: 0;
        margin: 0;

        background: var(--gray-1);
        color: var(--gray-6);
    }

</style>