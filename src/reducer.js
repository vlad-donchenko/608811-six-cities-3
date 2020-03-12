import {CITIES} from "./const";
import {extend} from "./utils";

const initialState = {
  activeCity: CITIES[3],
  currentOfferId: -1
};

const ActionType = {
  CHANGE_ACTIVE_CITY: `CHANGE_ACTIVE_CITY`,
  CHANGE_OFFER_ID: `CHANGE_OFFER_ID`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_ACTIVE_CITY,
    payload: city
  }),
  changeOfferId: (currentOfferId) => ({
    type: ActionType.CHANGE_OFFER_ID,
    payload: currentOfferId
  })
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
  }

  return state;
};

export {reducer, ActionCreator, ActionType};
