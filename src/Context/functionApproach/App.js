import { Observer } from 'mobx-react';
import React from 'react'
import { useCounterStore } from './counterContext'

const App = () => {
    //useCounterStore is used to get the current context value and further the accessing is done by that variable
    const counterStore = useCounterStore(); 

    //making The app Reactive(to be able to mutate the store date)

    //<Observer> renders a reactive component that gets re-render whenever needed
    return (
       <Observer>
           {
            //we can have any components inside the <Observer></Observer>
           ()=>{
            return(
                    <div>
                        <button onClick={()=>counterStore.decrement()}> - </button>
                        <span>{counterStore.count}</span>
                        <button onClick={()=>counterStore.increment()}> + </button>
                    </div>
            )
           }}
       </Observer>
    )
}

export default App
