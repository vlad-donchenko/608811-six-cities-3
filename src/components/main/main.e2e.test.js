import React from "react";
import {shallow} from "enzyme";
import Main from "./main";

const placeCards = [
  {
    name: `Place 1`,
    index: 0,
  },
  {
    name: `Place 2`,
    index: 1,
  },
  {
    name: `Place 2`,
    index: 2,
  },
  {
    name: `Place 2`,
    index: 3,
  },
  {
    name: `Place 2`,
    index: 4,
  }
];

it(`Should title be pressed`, () => {
  const titleClickHandler = jest.fn();

  const main = shallow(<Main offerCount={10} placeCards={placeCards} onTitleClick={titleClickHandler}/>);
  const titles = main.find(`.place-card__name a`);

  titles.forEach((title) => {
    title.simulate(`click`);
  });

  expect(titleClickHandler.mock.calls.length).toBe(5);
});
