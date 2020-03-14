import PropTypes from "prop-types";

const onTitleClickType = PropTypes.func.isRequired;
const onOfferHoverType = PropTypes.func.isRequired;
const onCityClickType = PropTypes.func.isRequired;
const renderOfferType = PropTypes.func.isRequired;
const onSortTypeClickType = PropTypes.func.isRequired;

const additionalClassType = PropTypes.string.isRequired;
const currentOfferIdType = PropTypes.number.isRequired;
const activeCityType = PropTypes.string.isRequired;

const hostType = PropTypes.shape({
  avatarUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isPro: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
}).isRequired;

const locationType = PropTypes.shape({
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
}).isRequired;

const cityType = PropTypes.shape({
  location: locationType,
  name: PropTypes.string.isRequired
}).isRequired;

const offerType = PropTypes.shape({
  bedrooms: PropTypes.number.isRequired,
  city: cityType,
  description: PropTypes.string.isRequired,
  goods: PropTypes.array.isRequired,
  host: hostType,
  id: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  location: locationType,
  maxAdults: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
});

const reviewType = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: hostType
}).isRequired;

const offersType = PropTypes.arrayOf(offerType).isRequired;
const reviewsType = PropTypes.arrayOf(reviewType).isRequired;

export {
  offersType,
  offerType,
  reviewType,
  reviewsType,
  onTitleClickType,
  onOfferHoverType,
  additionalClassType,
  renderOfferType,
  onCityClickType,
  currentOfferIdType,
  activeCityType,
  onSortTypeClickType,
};
