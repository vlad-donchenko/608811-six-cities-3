import React from "react";
import PropTypes from "prop-types";
import {formatDate, formatDateTime} from "../../utils";

const ReviewsItem = (props) => {
  const {review} = props;
  const {name, rating, avatar, comment} = review;
  const date = formatDate(review.date);
  const dateTime = formatDateTime(review.date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={`img/${avatar}`} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{name}</span></div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars"><span style={{width: `${rating * 2 * 10}%`}}></span><span
            className="visually-hidden">{rating}</span></div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={dateTime}>{date}</time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
  }).isRequired,
};

export default ReviewsItem;
