<button on:click={toggle} class="md:hidden border-2 border-zinc-100 p-1 rounded-lg" >
    {#if menu == String}
    <svg class="w-7 h-6 stroke-[1.5px] stroke-black fill-none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>   
    {:else}
    <svg class="w-7 h-6 stroke-[1.5px] stroke-black fill-none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>  
    {/if}
</button>
<button on:click={toggle} class="md:hidden border-2 border-zinc-100 p-1 rounded-lg" >
    {#if menu == String}
    <svg class="w-7 h-6 stroke-[1.5px] stroke-black fill-none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>   
    {:else}
    <svg class="w-7 h-6 stroke-[1.5px] stroke-black fill-none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>  
    {/if}
</button>
<div bind:this={menu}  class="hidden md:hidden w-32 h-32 absolute border border-black top-14" >

    <nav>
        <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
        </ul>
    </nav>

</div>


<script lang='ts' >

    let menu:any;

    function toggle(){
        
    }

</script>


<!-- "M6 18 18 6M6 6l12 12" -->
<!-- M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5 -->