<script>
	import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    const dispatch2 = createEventDispatcher();

    export let id;
	$:count=0;

	function ClickInc(){
		count +=1
        dispatch2('updatecountorder',{Id:id,Count:count});
	}

	function ClickDec(){
		if (count>0){
			count -=1
            dispatch2('updatecountorder',{Id:id,Count:count});
		}
	}

	function Clickreset(){
		count=0
        dispatch2('updatecountorder',{Id:id,Count:count});
	}

    function deleteCounter(){
        dispatch('deleteorder',{order:id});
    }

</script>

<!-- svelte-ignore non-top-level-reactive-declaration -->
	

    
	
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