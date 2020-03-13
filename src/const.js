const MAX_NEIGHBOURHOOD_OFFERS = 3;

const CITIES = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

const SORT_TYPES = [
  `Popular`,
  `Price: low to high`,
  `Price: high to low`,
  `Top rated first`
];

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

export {MAX_NEIGHBOURHOOD_OFFERS, SORT_TYPES, CITIES, OfferPrefix, monthMap};
