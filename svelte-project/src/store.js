<<<<<<< HEAD
import { writable } from 'svelte/store';

export const writableArray = writable([]);
=======
import { writable} from "svelte/store";



export const CounterArray = writable([]);

export const newCounter = (Counter) => {
    $CounterArray = [...$CounterArray,{Counter}]
}

export const UpdateCounter = (Counter) => {
    
}
>>>>>>> development
