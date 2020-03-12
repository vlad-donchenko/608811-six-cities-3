import {reducer, ActionType} from "./reducer";
import {CITIES} from "./const";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    activeCity: CITIES[3],
    currentOfferId: -1
  });
});

it(`Reducer should change city`, () => {
  expect(reducer({
    activeCity: `Paris`,
    currentOfferId: -1
  }, {
    type: ActionType.CHANGE_ACTIVE_CITY,
    payload: `Amsterdam`,
  })).toEqual({
    activeCity: `Amsterdam`,
    currentOfferId: -1
  });
});

it(`Reducer should change currentOfferId`, () => {
  expect(reducer({
    activeCity: `Paris`,
    currentOfferId: -1
  }, {
    type: ActionType.CHANGE_OFFER_ID,
    payload: 5,
  })).toEqual({
    activeCity: `Paris`,
    currentOfferId: 5
  });
});
