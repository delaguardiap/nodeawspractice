import App from "./components/app";
import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import combinedReducers from './reducers/index';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import actions from './actions/index';

const middleware = applyMiddleware(logger, thunk);

const store = createStore(combinedReducers, {}, middleware);

ReactDOM.render(<App />, document.getElementById("root"));
