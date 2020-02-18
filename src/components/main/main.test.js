import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const offerCount = 10;

const offers = [
  {
    name: `Place 2`,
    index: 0,
    image: `apartment-02.jpg`,
    price: 400,
    type: `Private room`,
    rating: 4,
    isBookmark: true,
    isPremium: false,
  },
  {
    name: `Place 2`,
    index: 1,
    image: `apartment-02.jpg`,
    price: 200,
    type: `Apartment`,
    rating: 2,
    isBookmark: true,
    isPremium: true,
  },
  {
    name: `Place 2`,
    index: 2,
    image: `apartment-02.jpg`,
    price: 300,
    type: `Apartment`,
    rating: 5,
    isBookmark: false,
    isPremium: false,
  },
  {
    name: `Place 2`,
    index: 3,
    image: `apartment-02.jpg`,
    price: 100,
    type: `Apartment`,
    rating: 0,
    isBookmark: false,
    isPremium: false,
  },
  {
    name: `Place 2`,
    index: 4,
    image: `apartment-02.jpg`,
    price: 100,
    type: `Apartment`,
    rating: 0,
    isBookmark: false,
    isPremium: false,
  }
];

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      offerCount={offerCount}
      offers={offers}
      onTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
