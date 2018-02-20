import App from "./components/app";
import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import combinedReducers from './reducers/index';
import logger from 'redux-logger';


const middleware = applyMiddleware(logger);

const store = createStore(combinedReducers, {}, middleware);

store.subscribe(() => {
  console.log("store changed",store.getState());
})

ReactDOM.render(<App />, document.getElementById("root"));
