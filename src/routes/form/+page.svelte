
{#if sign === false }
    <div class="w-full h-full p-3 space-y-20 " >
        <div class="flex items-center gap-5">
            <a href="/">
                <button class="w-[2.4rem] h-[2.4rem] border-2 border-zinc-300 p-1 rounded-lg" >
                    <svg class="w-6 h-5 stroke-2 stroke-zinc-600 " fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>                  
                </button>
            </a>
            <h1 class="font-medium text-[1.65rem] text-zinc-800" >Sign in</h1>
        </div>
        <div class=" space-y-14 " >
            <div class="flex flex-wrap gap-x-3 gap-y-2">
                <div class="w-full text-sm text-zinc-700" > Sign in with one of the following options.</div>
                <button class="flex-grow flex justify-center items-center border-2 border-zinc-200 py-3 rounded-xl hover:bg-zinc-50" >
                    <img class="h-10 w-10" src={search} alt="google">
                </button>
                <button class="flex-grow flex justify-center items-center border-2 border-zinc-200 py-3 rounded-xl hover:bg-zinc-50" >
                    <img class="h-10 w-10" src={apple} alt="">
                </button>
            </div>
            <div class="space-y-5">

                <label class="flex flex-col gap-y-2" for="">
                    <span class="w-full text-sm text-zinc-700" >Email / Login</span>
                    <input placeholder="Enter your email or login" class="block w-full rounded-md outline-0 py-2.5 px-4 text-zinc-900 ring-1 ring-gray-300 focus:ring-2 focus:ring-zinc-400" type="text">
                </label>

                <label class="flex flex-col gap-y-2" for="">
                    <span class="w-full text-sm text-zinc-700" >Password</span>
                    <input placeholder="Enter your password" class="block w-full rounded-md outline-0 py-2.5 px-4 text-zinc-900 ring-1 ring-gray-300 focus:ring-2 focus:ring-zinc-400" type="password">
                </label>

               <button class="w-full bg-blue-500 text-white text-lg font-medium border border-zinc-200 p-3 rounded-xl hover:bg-blue-700" >Sign in</button>

               <div class="flex justify-center gap-x-3 text-sm text-zinc-700" >Already have an account? <button class="text-blue-500 font-medium" on:click={() => (sign=true)} >Sign up</button></div>            </div>
        </div>
        
    </div>
{:else}
<div class="w-full h-full p-3 space-y-20 max-w-7xl md:h-auto " >
    <div class="flex items-center gap-5">
        <a href="/">
            <button class="w-[2.4rem] h-[2.4rem] border-2 border-zinc-300 p-1 rounded-lg" >
                <svg class="w-6 h-5 stroke-2 stroke-zinc-600 " fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>                  
            </button>
        </a>
        <h1 class="font-medium text-[1.65rem] text-zinc-800" >Sign up</h1>
    </div>
    <div class=" space-y-14 " >
        <div class="flex flex-wrap gap-x-3 gap-y-2">
            <div class="w-full text-sm text-zinc-700" > Sign up with one of the following options.</div>
            <button class="flex-grow flex justify-center items-center border-2 border-zinc-200 py-3 rounded-xl hover:bg-zinc-50" >
                <img class="h-10 w-10" src={search} alt="google">
            </button>
            <button class="flex-grow flex justify-center items-center border-2 border-zinc-200 py-3 rounded-xl hover:bg-zinc-50" >
                <img class="h-10 w-10" src={apple} alt="">
            </button>
        </div>
        <div class="space-y-5">
            <label class="flex flex-col gap-y-2" for="">
                <span class="w-full text-sm text-zinc-700" >Login</span>
                <input placeholder="Enter your login" class="block w-full rounded-md outline-0 py-2.5 px-4 text-zinc-900 ring-1 ring-gray-300 focus:ring-2 focus:ring-zinc-400" type="text">
            </label>

            <label class="flex flex-col gap-y-2" for="">
                <span class="w-full text-sm text-zinc-700" >Email</span>
                <input placeholder="Enter your email" class="block w-full rounded-md outline-0 py-2.5 px-4 text-zinc-900 ring-1 ring-gray-300 focus:ring-2 focus:ring-zinc-400" type="text">
            </label>

            <label class="flex flex-col gap-y-2" for="">
                <span class="w-full text-sm text-zinc-700" >Password</span>
                <input placeholder="Enter your password" class="block w-full rounded-md outline-0 py-2.5 px-4 text-zinc-900 ring-1 ring-gray-300 focus:ring-2 focus:ring-zinc-400" type="password">
            </label>

           <button class="w-full bg-blue-500 text-white text-lg font-medium border border-zinc-200 p-3 rounded-xl hover:bg-blue-700" >Sign up</button>

           <div class="flex justify-center gap-x-3 text-sm text-zinc-700" >Already have an account? <button class="text-blue-500 font-medium" on:click={() => (sign=false)} >Sign in</button></div>
        </div>
    </div>
    
</div>
{/if}

<script lang='ts' >

    let sign = false;
    import search from '/src/routes/img/search.png';
    import apple from '/src/routes/img/apple-logo.png';

    // import Header from "../../components/Header.svelte"

</script>