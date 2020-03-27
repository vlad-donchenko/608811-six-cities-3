import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card.jsx";
import {OfferPrefix} from "../../const";
import {offers} from "../../mocks/test-offer";
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const mockStore = configureStore([]);

it(`Should render <OfferCad/>`, () => {
  const store = mockStore({
    hoveredOfferId: null
  });
  const tree = renderer.create(<Provider store={store}><OfferCard additionalClass={OfferPrefix.CITIES_PLACE_CARD} offer={offers[0]} onOfferMouseEnter={() => {}} onOfferMouseLeave={() => {}} onTitleClick={() => {}}/></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
