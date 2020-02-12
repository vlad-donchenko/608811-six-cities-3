import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {getRandomInteger} from "./utils/utils";
import {generatePlaceCards} from "./mock/place-card";

const offerCount = getRandomInteger(0, 500);
const placeCards = generatePlaceCards();

const titleClickHandler = () => {};

const root = document.querySelector(`#root`);
ReactDOM.render(<App offerCount={offerCount} placeCards={placeCards} onTitleClick={titleClickHandler}/>, root);
