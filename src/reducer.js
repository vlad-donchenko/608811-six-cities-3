import {CITIES, DEFAULT_SORT_TYPE} from "./const";
import {extend} from "./utils";

const initialState = {
  activeCity: CITIES[0],
  currentOfferId: -1,
  activeSort: DEFAULT_SORT_TYPE,
};

const ActionType = {
  CHANGE_ACTIVE_CITY: `CHANGE_ACTIVE_CITY`,
  CHANGE_OFFER_ID: `CHANGE_OFFER_ID`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_ACTIVE_CITY,
    payload: city
  }),
  changeOfferId: (currentOfferId) => ({
    type: ActionType.CHANGE_OFFER_ID,
    payload: currentOfferId
  }),
  changeSortType: (activeSort) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: activeSort
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_CITY:
      return extend(state, {
        activeCity: action.payload
      });

    case ActionType.CHANGE_OFFER_ID:
      return extend(state, {
        currentOfferId: action.payload
      });

    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {
        activeSort: action.payload
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType};
