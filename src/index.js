import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {offers} from "./mocks/offers.js";
import {reducer} from "./reducer";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

const root = document.querySelector(`#root`);
ReactDOM.render(<Provider store={store}><App offers={offers}/></Provider>, root);
