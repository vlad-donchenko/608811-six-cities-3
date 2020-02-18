import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {generateOffers} from "./mocks/offers.js";

const offers = generateOffers();

const root = document.querySelector(`#root`);
ReactDOM.render(<App offers={offers}/>, root);
