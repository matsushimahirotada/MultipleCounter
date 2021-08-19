<script>
	import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let id;
	export let count=0;

	function ClickInc(){
		count +=1
        dispatch('updatecountorder',{order:id,count:this.count})
	}

	function ClickDec(){
		if (count>0){
			count -=1
            dispatch('updatecountorder',{order:id,count:this.count})
		}
	}

	function Clickreset(){
		count=0
        dispatch('updatecountorder',{order:id,count:this.count})
	}

    function deleteCounter(){
        console.log(id)
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