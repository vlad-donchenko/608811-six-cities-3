import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import ReviewsItem from "../reviews-item/reviews-item.jsx";

class ReviewsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const reviews = this._filterByDate();
    const reviewsCount = reviews.length;

    return (
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviewsCount}</span></h2>
        <ul className="reviews__list">
          {reviews.map((review) => {
            return (
              <ReviewsItem key={review.index} review={review}/>
            );
          })}
        </ul>
      </section>
    );
  }

  _filterByDate() {
    const {reviews} = this.props;

    return reviews.sort((a, b) => {
      return Number(b.date) - Number(a.date);
    });
  }
}

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
