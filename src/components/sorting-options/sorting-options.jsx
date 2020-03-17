import React from "react";
import {sortTypeMap, sortType} from "../../const";
import withSortingOptions from "../../hocs/with-sorting-options/with-sorting-options";
import {onSortTypeClickType} from "../../types";

const SortingOptions = ({isOpen, onToggleClick, onToggleKeyPress, onSortTypeClick, activeSort}) => {
  const sortTypeValues = Object.values(sortType);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={onToggleClick} onKeyDown={onToggleKeyPress}>
        {sortTypeMap[activeSort]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? `places__options--opened` : ``}`}>
        {sortTypeValues.map((sortTypeValue, index) => (
          <li key={sortTypeValue} className={`places__option ${activeSort === sortTypeValues[index] ? ` places__option--active` : ``}`} tabIndex="0" onClick={() => {
            onSortTypeClick(sortTypeValues[index]);
          }}>
            {sortTypeMap[sortTypeValue]}
          </li>
        ))}
      </ul>
      <select className="places__sorting-type" value={activeSort} onChange={() => {
      }} id="places-sorting" style={{display: `none`}}>
        {sortTypeValues.map((sortTypeValue, index) => (
          <option key={sortTypeValue} className="places__option" value={sortTypeValues[index]}>{sortTypeMap[sortTypeValue]}</option>
        ))}
      </select>
    </form>
  );
};

SortingOptions.propTypes = {
  onSortTypeClick: onSortTypeClickType
};

export default withSortingOptions(SortingOptions);
