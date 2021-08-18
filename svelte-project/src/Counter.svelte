<script>
	import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let id;
    let name = 'new'; 
	let count = 0;
	function ClickInc(){
		count +=1
	}

	function ClickDec(){
		if (count>0){
			count -=1
		}
	}

	function Clickreset(){
		count=0
	}

    function deleteCounter(){
        dispatch('deleteorder',{order:id});
    }

</script>

<!-- svelte-ignore non-top-level-reactive-declaration -->
	
    <input bind:value={name}>

    {count}
	
    <button on:click={ClickInc}>
        +
    </button>
	
    <button on:click={ClickDec}>
        -
    </button>
	
    <button on:click={Clickreset}>
        0
    </button>

    <button on:click={deleteCounter}>
        X
    </button>

<style>
</style>