import React from "react";
import renderer from "react-test-renderer";
import {SortingOptions} from "./sorting-options.jsx";
import {DEFAULT_SORT_TYPE} from "../../const";

it(`Should render <SortingOptions/>`, () => {
  const tree = renderer.create(<SortingOptions isOpen={false} activeSort={DEFAULT_SORT_TYPE} onToggleClick={() => {
  }} onSortTypeClick={() => {
  }}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
