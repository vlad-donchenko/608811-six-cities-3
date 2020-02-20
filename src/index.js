import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {offers} from "./mocks/offers.js";
console.log(offers);
const root = document.querySelector(`#root`);
ReactDOM.render(<App offers={offers}/>, root);
