<button on:click={() => (menu = !menu)} class:btnWhite={menu===false} class:btnBlack={menu===true}>
    {#if menu === false}
    <svg class="w-6 h-5 stroke-2 stroke-zinc-700 fill-none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
    
    {:else}
    <svg class="w-6 h-5 stroke-2 stroke-zinc-200 fill-none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
    {/if}
</button>

<div class:menuInactive = {menu === false} class:menuActive = {menu === true} >
    <nav>
        <ul class="flex flex-col p-1 space-y-1 absolute right-0 h-auto w-40 rounded-lg bg-white shadow-lg border-2 border-zinc-200" >
            <a href="/"><li class="p-1 px-3 hover:bg-zinc-100 w-full h-auto font-medium text-base rounded-md" >Home</li></a>
            <a href="/"><li class="p-1 px-3 hover:bg-zinc-100 w-full h-auto font-medium text-base rounded-md" >Profile</li></a>
            <a href="/"><li class="p-1 px-3 hover:bg-zinc-100 w-full h-auto font-medium text-base rounded-md" >Settings</li></a>
            <li class="border border-zinc-200 w-full rounded-full " ></li>
            <a href="/"><li class="p-1 px-3 hover:bg-zinc-100 w-full h-auto font-medium text-base rounded-md" >Log out</li></a>
        </ul>
    </nav>

</div>


<script lang='ts' >

    let menu = false;

</script>
