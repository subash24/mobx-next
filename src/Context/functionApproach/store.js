//Creating a global data store

export const createCounterStore = ()=>{
    return {
        count : 0,
        increment(){
            this.count++;
        },
        decrement(){
            this.count--;
        }
    }
}

