import React from "react";
import renderer from "react-test-renderer";
import OffersNearbyList from "./offers-nearby-list.jsx";
import nearbyOffers from "../../mocks/nearby-offers";
import {getOfferList} from "../../utils";
import {MAX_NEIGHBOURHOOD_OFFERS, CITIES, OfferPrefix} from "../../const";
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const mockStore = configureStore([]);
const offers = getOfferList(nearbyOffers, CITIES[0]);

it(`Should render <OffersNearbyList/>`, () => {
  const store = mockStore({
    hoveredOfferId: null
  });

  const tree = renderer.create(<Provider store={store}><OffersNearbyList additionalClass={OfferPrefix.NEAR_PLACES_CARD} offers={offers.slice(0, MAX_NEIGHBOURHOOD_OFFERS)} onTitleClick={() => {
  }}/></Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
