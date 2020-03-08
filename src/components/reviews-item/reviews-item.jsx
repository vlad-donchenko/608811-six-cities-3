import React from "react";
import {reviewType} from "../../types/index";
import {formatDateTime, formatDate} from "../../utils";

const ReviewsItem = (props) => {
  const {review} = props;
  const {comment, date, rating, user} = review;
  const {avatarUrl, name} = user;

  const displayDate = formatDate(date);
  const dateTime = formatDateTime(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={`img/${avatarUrl}`} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{name}</span></div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars"><span style={{width: `${rating * 2 * 10}%`}}></span><span
            className="visually-hidden">{rating}</span></div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={dateTime}>{displayDate}</time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  review: reviewType,
};

export default ReviewsItem;
