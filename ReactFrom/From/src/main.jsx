import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import { createStore } from 'redux';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            state = state + action.payload;
            break;
        case "SUB":
            state = state - action.payload;
            break;
        default:
            return state;
    }
    return state;
}
const store = createStore(reducer, 100, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_());
store.subscribe(() => {
    console.log("Current Value : ", store.getState());
});

store.dispatch({
    type : "ADD",
    payload : 10
});
store.dispatch({
  type : "ADD",
  payload : 100
});
store.dispatch({
  type : "SUB",
  payload :80
});
store.dispatch({
  type : "ADD",
  payload : 5
})
