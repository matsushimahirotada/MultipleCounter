<script>
import Counter from './Counter.svelte';
import Box from './Box.svelte';

	const CounterArray = [
        {id:0,component:Counter}
    ];
	
    function addCounter(){
        const counter = Counter
		CounterArray[CounterArray.length]={id:CounterArray.length,component:Counter}
    }


</script>


<button on:click={addCounter}>
	new counter
</button>

{#each CounterArray as counter}
	<Box>
		<svelte:component this={counter.component}/>
	</Box>
{/each}

