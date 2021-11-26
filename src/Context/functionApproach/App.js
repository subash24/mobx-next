import { Observer } from 'mobx-react';
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
                    <div className='container'>
                        <div className='app'>
                        <button className='btn' onClick={()=>counterStore.decrement()}> - </button>
                        <span className='txt'>{counterStore.count}</span>
                        <button className='btn' onClick={()=>counterStore.increment()}> + </button>
                        </div>
                    </div>
            )
           }}
       </Observer>
    )
}

export default App
