<script>
	let name = "new"; 
	export let count = 0;
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
<div>
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
</div>

<style>
</style>