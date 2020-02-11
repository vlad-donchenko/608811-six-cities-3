import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

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

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      offerCount={10}
      placeCards={placeCards}
      onTitleClick={() => {
      }}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
