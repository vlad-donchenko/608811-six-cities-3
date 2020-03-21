import React from "react";
import {shallow} from "enzyme";
import {SortingOptions} from "./sorting-options";
import {DEFAULT_SORT_TYPE} from "../../const";

it(`Should be pressed on toggle button`, () => {
  let isOpen = false;
  const onToggleClick = () => {
    isOpen = !isOpen;
  };

  const main = shallow(<SortingOptions onToggleClick={onToggleClick} activeSort={DEFAULT_SORT_TYPE} onSortTypeClick={() => {
  }} isOpen={isOpen}/>);
  const toggleButton = main.find(`#places-sorting-toggle`);
  toggleButton.simulate(`click`);

  expect(isOpen).toBe(true);
});

it(`Should be pressed on sort item`, () => {
  let activeSort = `to-high`;
  const onSortTypeClick = jest.fn();

  const tree = shallow(<SortingOptions onToggleClick={() => {
  }} activeSort={activeSort} onSortTypeClick={onSortTypeClick} isOpen={true}/>);

  tree.find(`.places__option`).first().simulate(`click`);
  expect(onSortTypeClick).toHaveBeenCalledWith(`popular`);
});
