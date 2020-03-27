import React from "react";
import {shallow} from "enzyme";
import {CITIES} from "../../const";
import CityList from "./city-list";

it(`Should links be pressed`, () => {
  const onCityClick = jest.fn();
  const main = shallow(<CityList activeCity={CITIES[3]} onResetSort={() => {}} onCityClick={onCityClick}/>);
  const link = main.find(`.locations__item-link`);

  link.forEach((node) => {
    node.simulate(`click`);
  });

  expect(onCityClick.mock.calls.length).toBe(6);
});
