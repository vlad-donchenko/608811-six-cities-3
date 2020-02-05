import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {getRandomInteger} from "./utils/utils";

const offerCount = getRandomInteger(0, 500);

const root = document.querySelector(`#root`);
ReactDOM.render(<App offerCount={offerCount}/>, root);
