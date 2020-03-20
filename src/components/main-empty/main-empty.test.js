import React from "react";
import renderer from "react-test-renderer";
import {CITIES} from "../../const";
import MainEmpty from "../main-empty/main-empty";

it(`Should render <MainEmpty/>`, () => {
  const tree = renderer
    .create(<MainEmpty
      activeCity={CITIES[0]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
