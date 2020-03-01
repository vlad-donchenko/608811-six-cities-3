import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";
import {offers} from "../../mocks/test-offer";
import {MapPrefix} from "../../const";

it(`should render <Map/>`, () => {
  const tree = renderer.create(<Map prefix={MapPrefix.MAIN_PAGE_MAP_PREFIX} offers={offers}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
