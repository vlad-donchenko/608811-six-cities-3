import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const offerCount = 10;

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

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      offerCount={offerCount} placeCards={placeCards}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
