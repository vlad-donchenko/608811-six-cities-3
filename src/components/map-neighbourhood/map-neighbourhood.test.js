import React from "react";
import renderer from "react-test-renderer";
import MapNeighbourhood from "./map-neighbourhood";
import {offers} from "../../mocks/test-offer";
import {MapPrefix} from "../../const";

it(`should render <MapNeighbourhood/>`, () => {
  const tree = renderer.create(<MapNeighbourhood prefix={MapPrefix.DETAILS_INFO_MAP_PREFIX} offers={offers}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
