<script>
<<<<<<< HEAD
	import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    const dispatch2 = createEventDispatcher();

    export let id;
	$:count=0;

	function ClickInc(){
=======
	
    import { createEventDispatcher} from 'svelte';
    export let id;
    let name = 'new'; 
	let count = 0;

    const dispatch = createEventDispatcher();


	function CounterInc(){
>>>>>>> development
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

    }

    function deleteCounter(){
        dispatch('deleteorder',{order:id});
    }

</script>

<<<<<<< HEAD
<!-- svelte-ignore non-top-level-reactive-declaration -->
	

    
	
    <button on:click={ClickInc}>
        +
    </button>
	
    <button on:click={ClickDec}>
        -
    </button>
	
    <button on:click={Clickreset}>
=======
    <input bind:value={name}>

    {count}
	
    <button on:click={CounterInc}>
        +
    </button>
	
    <button on:click={CounterDec}>
        -
    </button>
	
    <button on:click={Counterreset}>
>>>>>>> development
        0
    </button>

    <button on:click={deleteCounter}>
        X
    </button>

<style>
</style>