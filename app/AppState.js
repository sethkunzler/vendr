import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []
  
  /**@type {import('./models/Example.js').Example[]} */
  snacks = [
    new Snack({name:'Sample', price: 3.50, imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=3160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
  
  ]

  money = 0 
}

export const AppState = createObservableProxy(new ObservableAppState())