import React from "react";
import renderer from "react-test-renderer";
import OfferMainList from "./offers-main-list.jsx";
import {offers} from "../../mocks/test-offer";
import {OfferPrefix} from "../../const";
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const mockStore = configureStore([]);

it(`Should render <OfferMainList/>`, () => {
  const store = mockStore({
    hoveredOfferId: null
  });

  const tree = renderer.create(<Provider store={store}><OfferMainList additionalClass={OfferPrefix.CITIES_PLACE_CARD} offers={offers} onTitleClick={() => {
  }}/></Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
