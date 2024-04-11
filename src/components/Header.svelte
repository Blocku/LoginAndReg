<header class="h-auto w-full max-w-7xl mx-auto p-3 flex justify-between " >
    <a class="h-auto flex items-center gap-1 text-lg font-bold " href="/">
        <svg class="w-10 h-10 stroke-black " fill="none" viewBox="0 0 24 24" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
        School
    </a>

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
            <ul class="flex flex-col p-1 space-y-1 absolute right-0 -top-0.5 h-auto w-40 rounded-lg bg-white shadow-lg border-2 border-zinc-200" >
                <!-- <a href="/"><li class="p-1 px-3 hover:bg-zinc-100 w-full h-auto font-medium text-base rounded-md" >Home</li></a> -->
                <a href="/"><li class="p-1 px-3 hover:bg-zinc-100 w-full h-auto font-medium text-base rounded-md" >Profile</li></a>
                <a href="/"><li class="p-1 px-3 hover:bg-zinc-100 w-full h-auto font-medium text-base rounded-md" >Settings</li></a>
                <li class="border border-zinc-200 w-full rounded-full " ></li>
                <!-- <a href="/"><li class="p-1 px-3 hover:bg-zinc-100 w-full h-auto font-medium text-base rounded-md" >Log out</li></a>-->
                <a href="/form/"><li class="p-1 px-3 hover:bg-zinc-100 w-full h-auto font-medium text-base rounded-md" >Sign in</li></a>
            </ul>
        </nav>
    
    </div>

    <div class="hidden h-auto w-auto md:flex gap-7" >
        <button class="font-medium text-zinc-500 hover:text-black transition-all" >Sign up</button>
        <button class="font-medium text-white bg-black  py-1 px-7 rounded-xl  duration-200 hover:bg-zinc-700 transition-all" >Sign in</button>
    </div>

</header>


<script lang='ts' >

    let menu = false;

</script>