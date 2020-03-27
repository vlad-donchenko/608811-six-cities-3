import {reducer, ActionType} from "./reducer";
import {CITIES, SortType} from "./const";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    activeCity: CITIES[0],
    currentOfferId: -1,
    activeSort: SortType.POPULAR,
    hoveredOfferId: null
  });
});

it(`Reducer should change city`, () => {
  expect(reducer({
    activeCity: `Paris`,
    currentOfferId: -1,
    activeSort: SortType.POPULAR,
    hoveredOfferId: null
  }, {
    type: ActionType.CHANGE_ACTIVE_CITY,
    payload: `Amsterdam`,
  })).toEqual({
    activeCity: `Amsterdam`,
    currentOfferId: -1,
    activeSort: SortType.POPULAR,
    hoveredOfferId: null
  });
});

it(`Reducer should change currentOfferId`, () => {
  expect(reducer({
    activeCity: `Paris`,
    currentOfferId: -1,
    activeSort: SortType.POPULAR,
    hoveredOfferId: null
  }, {
    type: ActionType.CHANGE_OFFER_ID,
    payload: 5,
  })).toEqual({
    activeCity: `Paris`,
    currentOfferId: 5,
    activeSort: SortType.POPULAR,
    hoveredOfferId: null
  });
});

it(`Reducer should change activeSort`, () => {
  expect(reducer({
    activeCity: `Paris`,
    currentOfferId: -1,
    activeSort: SortType.POPULAR,
    hoveredOfferId: null
  }, {
    type: ActionType.CHANGE_SORT_TYPE,
    payload: SortType.TOP_RATED
  })).toEqual({
    activeCity: `Paris`,
    currentOfferId: -1,
    activeSort: SortType.TOP_RATED,
    hoveredOfferId: null
  });
});

it(`Reducer should change hovered offer`, () => {
  expect(reducer({
    activeCity: `Paris`,
    currentOfferId: -1,
    activeSort: SortType.POPULAR,
    hoveredOfferId: null
  }, {
    type: ActionType.CHANGE_HOVERED_OFFER,
    payload: 5
  })).toEqual({
    activeCity: `Paris`,
    currentOfferId: -1,
    activeSort: SortType.POPULAR,
    hoveredOfferId: 5
  });
});


