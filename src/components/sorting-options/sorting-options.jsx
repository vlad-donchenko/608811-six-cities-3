import React from "react";
import {sortTypeMap, SortType} from "../../const";
import withSortingOptions from "../../hocs/with-sorting-options/with-sorting-options";
import {onSortTypeClickType, isOpenType, onToggleClickType, activeSortType} from "../../types";

const SortingOptions = ({isOpen, onToggleClick, onSortTypeClick, activeSort}) => {
  const sortTypeValues = Object.values(SortType);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" id="places-sorting-toggle" tabIndex="0" onClick={onToggleClick}>
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
  isOpen: isOpenType,
  onSortTypeClick: onSortTypeClickType,
  onToggleClick: onToggleClickType,
  activeSort: activeSortType
};
export {SortingOptions};
export default withSortingOptions(SortingOptions);
