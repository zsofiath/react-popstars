import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import Routes from "./routes";
import reducers from './store/reducers';
import './style.css';

const createStoreWithMiddleWare = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
