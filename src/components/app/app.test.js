import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import {offers} from "../../mocks/test-offer";
import {CITIES} from "../../const";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      offers={offers}
      activeCity={CITIES[0]}
      onCityClick={() => {}}
      onTitleClick={() => {}}
      currentOfferId={1}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
