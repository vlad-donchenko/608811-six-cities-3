import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {offers} from "../../mocks/test-offer";
import {CITIES} from "../../const";
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const mockStore = configureStore([]);

it(`Should render <Main/>`, () => {
  const store = mockStore({
    activeSort: `popular`
  });

  const tree = renderer
    .create(<Provider store={store}>
      <Main
        offers={offers}
        onTitleClick={() => {
        }}
        onCityClick={() => {
        }}
        activeCity={CITIES[0]}
      /></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
