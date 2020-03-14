import {CITIES, DEFAULT_SORT_TYPE} from "./const";
import {extend} from "./utils";

const initialState = {
  activeCity: CITIES[3],
  currentOfferId: -1,
  activeSortType: DEFAULT_SORT_TYPE,
};

const ActionType = {
  CHANGE_ACTIVE_CITY: `CHANGE_ACTIVE_CITY`,
  CHANGE_OFFER_ID: `CHANGE_OFFER_ID`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_HOVER_OFFER: `CHANGE_HOVER_OFFER`
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
  changeSortType: (activeSortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: activeSortType
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
        activeSortType: action.payload
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType};
