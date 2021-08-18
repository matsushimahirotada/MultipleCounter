<script>
    import Counter from './Counter.svelte';
	let CounterArray = [{id:0}];
	function addCounter(){
		CounterArray[CounterArray.length] = {id:CounterArray.length}
		console.log(CounterArray)
	}

</script>

<!-- svelte-ignore non-top-level-reactive-declaration -->

<button on:click={addCounter}>
	new counter
</button>

{#each CounterArray as counter}
	<Counter id={counter.id}/>
{/each}

<style>
</style>