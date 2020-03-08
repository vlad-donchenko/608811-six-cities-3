import React from "react";
import {reviewsType} from "../../types/index";
import ReviewsItem from "../reviews-item/reviews-item.jsx";

const filterByDate = (reviews) => {
  return reviews.sort((a, b) => {
    return Number(new Date(b.date)) - Number(new Date(a.date));
  });
};

const ReviewsList = ({reviews}) => {
  const reviewsSorting = filterByDate(reviews);
  const reviewsCount = reviews.length;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviewsCount}</span></h2>
      <ul className="reviews__list">
        {reviewsSorting.map((review) => {
          return (
            <ReviewsItem key={review.id} review={review}/>
          );
        })}
      </ul>
    </section>
  );
};

ReviewsList.propTypes = {
  reviews: reviewsType
};

export default ReviewsList;
