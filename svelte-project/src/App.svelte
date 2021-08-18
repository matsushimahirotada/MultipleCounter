<script>
    import Counter from './Counter.svelte';
	import Box from './Box.svelte';
	$:CounterArray = [{id:0}];

	function addCounter(){
		CounterArray[CounterArray.length] = {id:CounterArray.length}
	}

	function deleteCounter(event){
		const id = event.detail.order
		tempArray = CounterArray.filter((CounterArray)=>{
			return (CounterArray.id != id);
		});
		
		for(let i = id;i<tempArray;i++){
			tempArray[i] = {id:i} 
		}
		CounterArray = tempArray
		console.log(tempArray)
		console.log(id)
	}

</script>

<!-- svelte-ignore non-top-level-reactive-declaration -->

<button on:click={addCounter}>
	new counter
</button>

{#each CounterArray as counter(counter.id)}
	<Box>
		<Counter on:deleteorder={deleteCounter}
		id={counter.id}/>
	</Box>
{/each}

<style>
</style>