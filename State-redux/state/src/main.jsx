import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
const iniState = {
  amount : 200,
  age : 30
}

const reducer = (state=iniState, action) => {
  switch (action.type){
    case "ADD":
      state = {
        amount:state.amount + action.payload,
        age:state.age + action.payload
      }
      break;
    case "SUB":
      state = {
        amount:state.amount - action.payload,
        age:state.age - action.payload
      }
      break;
    default:
      return state;
  }
  return state;
}
const store = createStore(reducer, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_());

store.subscribe(() => {
  console.log("Current Value :", store.getState());
});

store.dispatch({
  type : "ADD",
  payload : 15
});

store.dispatch({
  type : "SUB",
  payload : 30
});
