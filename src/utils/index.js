import {monthMap, SortType} from "../const";

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
    return b.price - a.price;
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
    case SortType.POPULAR :
      sortedOffers = offers;
      break;
    case SortType.TO_HIGH :
      sortedOffers = getLowToHighPriceOffers(offers);
      break;
    case SortType.TO_LOW :
      sortedOffers = getHighToLowPriceOffers(offers);
      break;
    case SortType.TOP_RATED :
      sortedOffers = getTopRatedOffers(offers);
  }

  return sortedOffers;
};

const getCurrentOffer = (offers, id) => {
  return offers.find((offer) => {
    return offer.id === id;
  });
};

export {formatDate, formatDateTime, extend, getOfferList, sortingOffers, getCurrentOffer};
