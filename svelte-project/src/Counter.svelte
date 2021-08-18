<script>
	
    import { createEventDispatcher} from 'svelte';
    export let id;
    let name = 'new'; 
	let count = 0;

    const dispatch = createEventDispatcher();


	function CounterInc(){
		count +=1
	}

	function CounterDec(){
		if (count>0){
			count -=1
		}
	}

	function Counterreset(){
		count=0
	}
    
    function deleteCounter(){

    }

</script>

    <input bind:value={name}>

    {count}
	
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