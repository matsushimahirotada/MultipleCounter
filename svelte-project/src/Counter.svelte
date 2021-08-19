<script>

	import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    const dispatch2 = createEventDispatcher();

    export let id;
	$:count=0;

	function CounterInc(){
		count +=1
        dispatch2('updatecountorder',{Id:id,Count:count});
	}

	function CounterDec(){
		if (count>0){
			count -=1
            dispatch2('updatecountorder',{Id:id,Count:count});
		}
	}

	function Counterreset(){
		count=0
        dispatch2('updatecountorder',{Id:id,Count:count});
	}
    

    function deleteCounter(){
        dispatch('deleteorder',{order:id});
    }

</script>

<!-- svelte-ignore non-top-level-reactive-declaration -->
	

    
	
    <button on:click={CounterInc}>
        +
    </button>
	
    <button on:click={CounterDec}>
        -
    </button>
	
    <button on:click={Counterreset}>
        0
    </button>

    <button on:click={deleteCounter}>
        X
    </button>

<style>
</style>