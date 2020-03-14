const MAX_NEIGHBOURHOOD_OFFERS = 3;

const CITIES = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

const DEFAULT_SORT_TYPE = `popular`;

const sortTypeMap = {
  "popular": `Popular`,
  "to-high": `Price: low to high`,
  "to-low": `Price: high to low`,
  "top-rated": `Top rated first`
};

const sortType = {
  popular: `popular`,
  toHigh: `to-high`,
  toLow: `to-low`,
  topRated: `top-rated`
};

const monthMap = {
  "0": `January`,
  "1": `February`,
  "2": `March`,
  "3": `April`,
  "4": `May`,
  "5": `June`,
  "6": `July`,
  "7": `August`,
  "8": `September`,
  "9": `October`,
  "10": `November`,
  "11": `December`,
};

const OfferPrefix = {
  CITIES_PLACE_CARD: `cities__place-card`,
  NEAR_PLACES_CARD: `near-places__card`,
};

export {MAX_NEIGHBOURHOOD_OFFERS, DEFAULT_SORT_TYPE, sortTypeMap, sortType, CITIES, OfferPrefix, monthMap};
