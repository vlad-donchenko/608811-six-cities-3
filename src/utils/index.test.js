import {formatDate, getOfferList, extend, formatDateTime} from "./index";
import {offers} from "../mocks/test-offer";
import {CITIES} from "../const";

it(`formatDate should get formatted date`, () => {
  expect(formatDate(`2019-10-08T14:13:56.569Z`)).toEqual(`October 8 2019`);
});

it(`formatDateTime should get formatted date`, () => {
  expect(formatDateTime(`2019-10-08T14:13:56.569Z`)).toEqual(`2019-09-08`);
});

it(`formatDateTime should get new object`, () => {
  expect(extend({activeCity: CITIES[3], currentOfferId: -1}, {activeCity: CITIES[0], currentOfferId: 1})).toEqual({
    activeCity: `Paris`,
    currentOfferId: 1
  });
});

it(`getOfferList should get array`, () => {
  expect(getOfferList(offers, CITIES[4])).toEqual([]);
});
