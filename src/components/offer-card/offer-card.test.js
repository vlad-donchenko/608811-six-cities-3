import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card.jsx";

const offer = {
  name: `Place 2`,
  index: 0,
  image: `apartment-02.jpg`,
  price: 400,
  type: `Private room`,
  rating: 4,
  isBookmark: true,
  isPremium: false,
};

it(`Render OfferCad`, () => {
  const tree = renderer.create(<OfferCard offer={offer} onOfferHover={() => {}} onTitleClick={() => {}}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
