<script>
    import Counter from './Counter.svelte';
	import Box from './Box.svelte';


	$:CounterArray = [{id:0,name:'new',count:0}];
	$:deleteid = []

	function addCounter(){
		CounterArray[CounterArray.length] = deleteid.length ? {id:deleteid.pop(),name:'new',count:0} : {id:CounterArray.length,name:'new',count:0}
		CounterArray.sort(function(a,b){
			if(a.id<b.id) return -1;
			if(a.id<b.id) return 1;
			return 0;
		});

		console.log(CounterArray)
	}


	function deleteCounter(event){
		const id = event.detail.order
		const tempArray = CounterArray.filter((CounterArray)=>{
			return (CounterArray.id != id);
		});
		console.log(id)
		console.log(tempArray)
		deleteid.push(id)
		CounterArray = tempArray
	}

	function updateCount(event){
		const id = event.detail.id
		const count = event.detail.count

		const tempArray = CounterArray.filter((CounterArray)=>{
			return (CounterArray.id != id);
		});
		
		CounterArray = tempArray
		CounterArray[CounterArray.length] = {id:id,name:'new',count:count}

	}

</script>

<!-- svelte-ignore non-top-level-reactive-declaration -->

<button on:click={addCounter}>
	new counter
</button>

{#each CounterArray as counter(counter.id)}
	<Box>
		<input bind:value={counter.name}>
		{counter.count}
		<Counter on:deleteorder={deleteCounter}
		on:updatecountorder={updateCount}
		id = {counter.id}
		/>
	</Box>
{/each}

<Box>
	<div>title list:

		{#each CounterArray as {name}}
			{name},
		{/each}
	</div>
</Box>

<style>
</style>