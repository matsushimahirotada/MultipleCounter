<script>
	
    export let id;
    let name = 'new'; 
	let count = 0;
    import Box from './Box.svelte';
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

</script>

<!-- svelte-ignore non-top-level-reactive-declaration -->
<Box>
	
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
</Box>

<style>
</style>