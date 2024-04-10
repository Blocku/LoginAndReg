<button on:click={() => (menu = !menu)} class="md:hidden border-2 border-zinc-100 p-1 rounded-lg" >
    {#if menu === false}
    <svg class="w-7 h-6 stroke-[1.5px] stroke-black fill-none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
    
    {:else}
    <svg class="w-7 h-6 stroke-[1.5px] stroke-black fill-none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
    {/if}
</button>

<div class:inactive = {menu === false} class:active = {menu === true} >
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

    let menu = false;








</script>


<!-- "M6 18 18 6M6 6l12 12" -->
<!-- M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5 -->
<!-- <button  class="md:hidden border-2 border-zinc-100 p-1 rounded-lg" >

    <svg class="w-7 h-6 stroke-[1.5px] stroke-black fill-none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>   



</button> -->