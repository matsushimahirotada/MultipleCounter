<script>
    import Counter from './Counter.svelte';
	import Box from './Box.svelte';
	$:CounterArray = [{id:0,name:'new'}];
	$:deleteid = []

	function addCounter(){
		CounterArray[CounterArray.length] = deleteid.length ? {id:deleteid.pop(),name:'new'} : {id:CounterArray.length,name:'new'}
	}

	function deleteCounter(event){
		const id = event.detail.order
		const tempArray = CounterArray.filter((CounterArray)=>{
			return (CounterArray.id != id);
		});
		
		CounterArray = tempArray
	}

	function updateCountername(event){

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

<Box>
	<p>
		title list:
		{#each  CounterArray as counter(counter.name) }
			
		{/each}
	</p>
</Box>

<style>
</style>