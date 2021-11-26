import React,{createContext,useContext} from 'react'
import { createCounterStore } from './store'
import {useLocalObservable} from 'mobx-react'

//Creating a context with null value
const CounterContext = createContext(null);

//Creating a provider (The provider passes down the data to all children components)
export const CounterProvider = ({children})=>{

//useLocalObservable() is used to create a new observable object and keeps it for entire lifecycle of the component
//A store is created using CreateCounterStore
const counterStore = useLocalObservable(createCounterStore);

return (
    <CounterContext.Provider value={counterStore}>
        {children}
    </CounterContext.Provider>
)
}

//useCounterStore is used to return the current value of the context 

export const useCounterStore = ()=> useContext(CounterContext);

