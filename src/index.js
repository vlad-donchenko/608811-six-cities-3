import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {getRandomInteger} from "./utils/utils";
import {generateOffers} from "./mocks/offers.js";

const offerCount = getRandomInteger(0, 500);
const offers = generateOffers();

const root = document.querySelector(`#root`);
ReactDOM.render(<App offerCount={offerCount} offers={offers}/>, root);
