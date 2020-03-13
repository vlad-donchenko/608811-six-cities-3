import React from "react";
import {SORT_TYPES} from "../../const";

const SortingOptions = () => {
  const sortTypes = SORT_TYPES;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {sortTypes.map((sortType) => (
          <li key={sortType} className="places__option places__option--active" tabIndex="0">{sortType}</li>
        ))}
      </ul>
      <select className="places__sorting-type" id="places-sorting" style={{display: `none`}}>
        <option className="places__option" defaultValue="popular">Popular</option>
        <option className="places__option" defaultValue="to-high">Price: low to high</option>
        <option className="places__option" defaultValue="to-low">Price: high to low</option>
        <option className="places__option" defaultValue="top-rated">Top rated first</option>
      </select>
    </form>
  );
};

export default SortingOptions;
