import React from "react";
import PropTypes from "prop-types";
import ReviewsItem from "../reviews-item/reviews-item.jsx";

const ReviewsList = (props) => {
  const {reviews} = props;
  const reviewsCount = reviews.length;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviewsCount}</span></h2>
      <ul className="reviews__list">
        {reviews.sort((a, b) => {
          return Number(b.date) - Number(a.date);
        }).map((review) => {
          return (
            <ReviewsItem key={review.index} review={review}/>
          );
        })}
      </ul>
    </section>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
