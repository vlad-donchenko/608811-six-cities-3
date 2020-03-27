import React from "react";
import renderer from "react-test-renderer";
import CityList from "./city-list";
import {CITIES} from "../../const";

it(`Should render <CityList/>`, () => {
  const tree = renderer.create(<CityList activeCity={CITIES[3]} onResetSort={() => {}} onCityClick={() => {}}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
