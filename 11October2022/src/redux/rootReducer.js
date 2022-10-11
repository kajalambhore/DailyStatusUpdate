import {combineReducers} from 'redux'
import { operationsReducer } from './todoapp/reducers/operations'
export const rootreducer=combineReducers({
  operationsReducer,
 
})

//Rootreducer file is the file to combine all reducers in case if we have multiple reducers and then root reducer is then provided to store.js
