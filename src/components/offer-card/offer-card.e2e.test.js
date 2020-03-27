import React from "react";
import {mount} from "enzyme";
import OfferCard from "./offer-card.jsx";
import {offers} from "../../mocks/test-offer";
import {OfferPrefix} from "../../const";
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const mockStore = configureStore([]);

it(`Should title be pressed`, () => {
  const store = mockStore({
    hoveredOfferId: null
  });
  const onTitleClick = jest.fn();
  const tree = mount(<Provider store={store}><OfferCard additionalClass={OfferPrefix.CITIES_PLACE_CARD} offer={offers[0]} onOfferHover={() => {}} isNearby={true} onTitleClick={onTitleClick}/></Provider>);
  tree.find(`.place-card__name a`).first().simulate(`click`);

  expect(onTitleClick.mock.calls.length).toBe(1);
});

