import React from "react";
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from "../App";
import { createStore } from 'redux';

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();

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
const store = createStore(reducer, 100);
store.subscribe(() => {
    console.log("Current Value : ", store.getState());
});

store.dispatch({
    type : "ADD",
    payload : 10
});
