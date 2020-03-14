import {monthMap, sortType} from "../const";

const formatDate = (date) => {
  const dateFormat = new Date(date);
  const day = dateFormat.getDate();
  const year = dateFormat.getFullYear();
  const month = monthMap[dateFormat.getMonth()];

  return `${month} ${day} ${year}`;
};

const formatDateTime = (date) => {
  const dateFormat = new Date(date);
  const day = dateFormat.getDate() < 10 ? `0${dateFormat.getDate()}` : `${dateFormat.getDate()}`;
  const year = dateFormat.getFullYear();
  const month = dateFormat.getMonth() < 10 ? `0${dateFormat.getMonth()}` : `${dateFormat.getMonth()}`;

  return `${year}-${month}-${day}`;
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getOfferList = (offers, city) => {
  return offers.slice().filter((offer) => {
    return offer.city.name === city;
  });
};

const getLowToHighPriceOffers = (offers) => {
  return offers.slice().sort((a, b) => {
    return a.price - b.price;
  });
};

const getHighToLowPriceOffers = (offers) => {
  return offers.slice().sort((a, b) => {
    return  b.price - a.price;
  });
};

const getTopRatedOffers = (offers) => {
  return offers.slice().sort((a, b) => {
    return b.rating - a.rating;
  });
};

const sortingOffers = (activeSortType, offers) => {
  let sortedOffers = [];

  switch (activeSortType) {
    case sortType.popular :
      sortedOffers = offers;
      break;
    case sortType.toHigh :
      sortedOffers = getLowToHighPriceOffers(offers);
      break;
    case sortType.toLow :
      sortedOffers = getHighToLowPriceOffers(offers);
      break;
    case sortType.topRated :
      sortedOffers = getTopRatedOffers(offers);
  }

  return sortedOffers;
};

export {formatDate, formatDateTime, extend, getOfferList, sortingOffers};
