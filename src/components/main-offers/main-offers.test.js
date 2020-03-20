import React from "react";
import renderer from "react-test-renderer";
import MainOffers from "../main-offers/main-offers.jsx";
import {offers} from "../../mocks/test-offer";
import {CITIES} from "../../const";
import {DEFAULT_SORT_TYPE} from "../../const";
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const mockStore = configureStore([]);

it(`Should render <MainOffers/>`, () => {
  const store = mockStore({
    activeSort: `popular`
  });

  const tree = renderer
    .create(<Provider store={store}><MainOffers onOfferMouseEnter={() => {
    }} onTitleClick={() => {
    }} onOfferMouseLeave={() => {
    }} onSortTypeClick={() => {
    }} hoveredOfferId={1} activeSort={DEFAULT_SORT_TYPE} activeCity={CITIES[0]} offers={offers}/></Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
