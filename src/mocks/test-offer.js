const offers = [
  {
    name: `Place 2`,
    index: 0,
    images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
    price: 400,
    type: `Private room`,
    rating: 4,
    room: 7,
    adults: 10,
    features: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    city: [52.38333, 4.9],
    coordinates: [52.3709553943508, 4.85309666406198],
    reviews: [
      {
        name: `Angelina`,
        index: 0,
        rating: 4,
        avatar: `avatar-max.jpg`,
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
        date: new Date(2019, 10, 15)
      }
    ],
    isBookmark: true,
    isPremium: false,
    host: {
      nameUser: `Sam`,
      avatar: `avatar-max.jpg`,
      description: [
        `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
      ],
    },
    neighbourhoodOffers: [
      {
        name: `Place 2`,
        index: 0,
        images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
        price: 400,
        type: `Private room`,
        rating: 4,
        room: 7,
        adults: 10,
        features: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
        city: [52.38333, 4.9],
        coordinates: [52.3709553943508, 4.85309666406198],
        reviews: [
          {
            name: `Angelina`,
            index: 0,
            rating: 4,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 6, 15)
          }
        ],
        isBookmark: true,
        isPremium: false,
        host: {
          nameUser: `Sam`,
          avatar: `avatar-max.jpg`,
          description: [
            `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
            `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
          ],
        }
      },
      {
        name: `Place 2`,
        index: 1,
        images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
        price: 200,
        type: `Apartment`,
        rating: 2,
        room: 10,
        adults: 20,
        features: [`Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
        city: [52.38333, 4.9],
        coordinates: [52.3309553943508, 4.85309666406198],
        reviews: [
          {
            name: `Angelina`,
            index: 0,
            rating: 4,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 11, 15)
          },
          {
            name: `Jack`,
            index: 1,
            rating: 5,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 4, 15)
          },
          {
            name: `Jane`,
            index: 2,
            rating: 1,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 4, 19)
          }
        ],
        isBookmark: true,
        isPremium: true,
        host: {
          nameUser: `Judy`,
          avatar: `avatar-angelina.jpg.jpg`,
          description: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
          ],
        }
      },
      {
        name: `Place 2`,
        index: 2,
        images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
        price: 300,
        type: `Apartment`,
        rating: 5,
        room: 6,
        adults: 12,
        features: [`Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
        city: [52.38333, 4.9],
        coordinates: [52.3719553943508, 4.85309666406198],
        reviews: [
          {
            name: `Angelina`,
            index: 0,
            rating: 4,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 9, 10)
          },
          {
            name: `Jack`,
            index: 1,
            rating: 5,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 11, 10)
          }
        ],
        isBookmark: false,
        isPremium: false,
        host: {
          nameUser: `Judy`,
          avatar: `avatar-angelina.jpg.jpg`,
          description: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
          ],
        }
      }
    ],
  },
  {
    name: `Place 2`,
    index: 1,
    images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
    price: 200,
    type: `Apartment`,
    rating: 2,
    room: 10,
    adults: 20,
    features: [`Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    city: [52.38333, 4.9],
    coordinates: [52.3309553943508, 4.85309666406198],
    reviews: [
      {
        name: `Angelina`,
        index: 0,
        rating: 4,
        avatar: `avatar-max.jpg`,
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
        date: new Date(2019, 6, 6)
      },
      {
        name: `Jack`,
        index: 1,
        rating: 5,
        avatar: `avatar-max.jpg`,
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
        date: new Date(2019, 6, 29)
      },
      {
        name: `Jane`,
        index: 2,
        rating: 1,
        avatar: `avatar-max.jpg`,
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
        date: new Date(2019, 6, 24)
      }
    ],
    isBookmark: true,
    isPremium: true,
    host: {
      nameUser: `Sam`,
      avatar: `avatar-max.jpg`,
      description: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
      ],
    },
    neighbourhoodOffers: [
      {
        name: `Place 2`,
        index: 0,
        images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
        price: 400,
        type: `Private room`,
        rating: 4,
        room: 7,
        adults: 10,
        features: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
        city: [52.38333, 4.9],
        coordinates: [52.3709553943508, 4.85309666406198],
        reviews: [
          {
            name: `Angelina`,
            index: 0,
            rating: 4,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 8, 20)
          }
        ],
        isBookmark: true,
        isPremium: false,
        host: {
          nameUser: `Sam`,
          avatar: `avatar-max.jpg`,
          description: [
            `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
            `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
          ],
        }
      },
      {
        name: `Place 2`,
        index: 1,
        images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
        price: 200,
        type: `Apartment`,
        rating: 2,
        room: 10,
        adults: 20,
        features: [`Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
        city: [52.38333, 4.9],
        coordinates: [52.3309553943508, 4.85309666406198],
        reviews: [
          {
            name: `Angelina`,
            index: 0,
            rating: 4,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 8, 26)
          },
          {
            name: `Jack`,
            index: 1,
            rating: 5,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 9, 26)
          },
          {
            name: `Jane`,
            index: 2,
            rating: 1,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 8, 16)
          }
        ],
        isBookmark: true,
        isPremium: true,
        host: {
          nameUser: `Judy`,
          avatar: `avatar-angelina.jpg.jpg`,
          description: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
          ],
        }
      },
      {
        name: `Place 2`,
        index: 2,
        images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
        price: 300,
        type: `Apartment`,
        rating: 5,
        room: 6,
        adults: 12,
        features: [`Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
        city: [52.38333, 4.9],
        coordinates: [52.3719553943508, 4.85309666406198],
        reviews: [
          {
            name: `Angelina`,
            index: 0,
            rating: 4,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 6, 26)
          },
          {
            name: `Jack`,
            index: 1,
            rating: 5,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 8, 29)
          }
        ],
        isBookmark: false,
        isPremium: false,
        host: {
          nameUser: `Judy`,
          avatar: `avatar-angelina.jpg.jpg`,
          description: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
          ],
        }
      }
    ],
  },
  {
    name: `Place 2`,
    index: 2,
    images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
    price: 300,
    type: `Apartment`,
    rating: 5,
    room: 6,
    adults: 12,
    features: [`Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    city: [52.38333, 4.9],
    coordinates: [52.3719553943508, 4.85309666406198],
    reviews: [
      {
        name: `Angelina`,
        index: 0,
        rating: 4,
        avatar: `avatar-max.jpg`,
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
        date: new Date(2019, 9, 26)
      },
      {
        name: `Jack`,
        index: 1,
        rating: 5,
        avatar: `avatar-max.jpg`,
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
        date: new Date(2019, 10, 19)
      }
    ],
    isBookmark: false,
    isPremium: false,
    host: {
      nameUser: `Judy`,
      avatar: `avatar-angelina.jpg.jpg`,
      description: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      ],
    },
    neighbourhoodOffers: [
      {
        name: `Place 2`,
        index: 0,
        images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
        price: 400,
        type: `Private room`,
        rating: 4,
        room: 7,
        adults: 10,
        features: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
        city: [52.38333, 4.9],
        coordinates: [52.3709553943508, 4.85309666406198],
        reviews: [
          {
            name: `Angelina`,
            index: 0,
            rating: 4,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 8, 28)
          }
        ],
        isBookmark: true,
        isPremium: false,
        host: {
          nameUser: `Sam`,
          avatar: `avatar-max.jpg`,
          description: [
            `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
            `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
          ],
        }
      },
      {
        name: `Place 2`,
        index: 1,
        images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
        price: 200,
        type: `Apartment`,
        rating: 2,
        room: 10,
        adults: 20,
        features: [`Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
        city: [52.38333, 4.9],
        coordinates: [52.3309553943508, 4.85309666406198],
        reviews: [
          {
            name: `Angelina`,
            index: 0,
            rating: 4,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 3, 26)
          },
          {
            name: `Jack`,
            index: 1,
            rating: 5,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 8, 19)
          },
          {
            name: `Jane`,
            index: 2,
            rating: 1,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 8, 23)
          }
        ],
        isBookmark: true,
        isPremium: true,
        host: {
          nameUser: `Judy`,
          avatar: `avatar-angelina.jpg.jpg`,
          description: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
          ],
        }
      },
      {
        name: `Place 2`,
        index: 2,
        images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
        price: 300,
        type: `Apartment`,
        rating: 5,
        room: 6,
        adults: 12,
        features: [`Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
        city: [52.38333, 4.9],
        coordinates: [52.3719553943508, 4.85309666406198],
        reviews: [
          {
            name: `Angelina`,
            index: 0,
            rating: 4,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 8, 3)
          },
          {
            name: `Jack`,
            index: 1,
            rating: 5,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 3, 9)
          }
        ],
        isBookmark: false,
        isPremium: false,
        host: {
          nameUser: `Judy`,
          avatar: `avatar-angelina.jpg.jpg`,
          description: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
          ],
        }
      }
    ],
  },
  {
    name: `Place 2`,
    index: 3,
    images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
    price: 100,
    type: `Apartment`,
    rating: 0,
    room: 1,
    adults: 2,
    features: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Towels`, `Baby seat`, `Cabel TV`],
    city: [52.38333, 4.9],
    coordinates: [52.3419553943508, 4.85309666406198],
    reviews: [
      {
        name: `Angelina`,
        index: 0,
        rating: 4,
        avatar: `avatar-max.jpg`,
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
        date: new Date(2019, 4, 29)
      },
      {
        name: `Jane`,
        index: 1,
        rating: 1,
        avatar: `avatar-max.jpg`,
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
        date: new Date(2019, 5, 21)
      }
    ],
    isBookmark: false,
    isPremium: false,
    host: {
      nameUser: `Sam`,
      avatar: `avatar-max.jpg`,
      description: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
      ],
    },
    neighbourhoodOffers: [
      {
        name: `Place 2`,
        index: 0,
        images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
        price: 400,
        type: `Private room`,
        rating: 4,
        room: 7,
        adults: 10,
        features: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
        city: [52.38333, 4.9],
        coordinates: [52.3709553943508, 4.85309666406198],
        reviews: [
          {
            name: `Angelina`,
            index: 0,
            rating: 4,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 8, 21)
          }
        ],
        isBookmark: true,
        isPremium: false,
        host: {
          nameUser: `Sam`,
          avatar: `avatar-max.jpg`,
          description: [
            `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
            `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
          ],
        }
      },
      {
        name: `Place 2`,
        index: 1,
        images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
        price: 200,
        type: `Apartment`,
        rating: 2,
        room: 10,
        adults: 20,
        features: [`Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
        city: [52.38333, 4.9],
        coordinates: [52.3309553943508, 4.85309666406198],
        reviews: [
          {
            name: `Angelina`,
            index: 0,
            rating: 4,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 7, 14)
          },
          {
            name: `Jack`,
            index: 1,
            rating: 5,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 9, 14)
          },
          {
            name: `Jane`,
            index: 2,
            rating: 1,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 2, 27)
          }
        ],
        isBookmark: true,
        isPremium: true,
        host: {
          nameUser: `Judy`,
          avatar: `avatar-angelina.jpg.jpg`,
          description: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
          ],
        }
      },
      {
        name: `Place 2`,
        index: 2,
        images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
        price: 300,
        type: `Apartment`,
        rating: 5,
        room: 6,
        adults: 12,
        features: [`Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
        city: [52.38333, 4.9],
        coordinates: [52.3719553943508, 4.85309666406198],
        reviews: [
          {
            name: `Angelina`,
            index: 0,
            rating: 4,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 8, 27)
          },
          {
            name: `Jack`,
            index: 1,
            rating: 5,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 9, 14)
          }
        ],
        isBookmark: false,
        isPremium: false,
        host: {
          nameUser: `Judy`,
          avatar: `avatar-angelina.jpg.jpg`,
          description: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
          ],
        }
      }
    ],
  },
  {
    name: `Place 2`,
    index: 4,
    images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
    price: 100,
    type: `Apartment`,
    rating: 0,
    room: 4,
    adults: 8,
    features: [`Wi-Fi`, `Washing machine`, `Towels`, `Baby seat`, `Cabel TV`],
    city: [52.38333, 4.9],
    coordinates: [52.3999553943508, 4.85309666406198],
    reviews: [
      {
        name: `Angelina`,
        index: 0,
        rating: 4,
        avatar: `avatar-max.jpg`,
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
        date: new Date(2019, 9, 19)
      },
      {
        name: `Jane`,
        index: 1,
        rating: 1,
        avatar: `avatar-max.jpg`,
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
        date: new Date(2019, 9, 4)
      },
      {
        name: `Jim`,
        index: 2,
        rating: 5,
        avatar: `avatar-max.jpg`,
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
        date: new Date(2019, 9, 18)
      },
      {
        name: `Nick`,
        index: 3,
        rating: 5,
        avatar: `avatar-max.jpg`,
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
        date: new Date(2019, 9, 10)
      },
      {
        name: `Sam`,
        index: 4,
        rating: 3,
        avatar: `avatar-max.jpg`,
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
        date: new Date(2019, 9, 14)
      }
    ],
    isBookmark: false,
    isPremium: false,
    host: {
      nameUser: `Sam`,
      avatar: `avatar-max.jpg`,
      description: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      ],
    },
    neighbourhoodOffers: [
      {
        name: `Place 2`,
        index: 0,
        images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
        price: 400,
        type: `Private room`,
        rating: 4,
        room: 7,
        adults: 10,
        features: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
        city: [52.38333, 4.9],
        coordinates: [52.3709553943508, 4.85309666406198],
        reviews: [
          {
            name: `Angelina`,
            index: 0,
            rating: 4,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 10, 14)
          }
        ],
        isBookmark: true,
        isPremium: false,
        host: {
          nameUser: `Sam`,
          avatar: `avatar-max.jpg`,
          description: [
            `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
            `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
          ],
        }
      },
      {
        name: `Place 2`,
        index: 1,
        images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
        price: 200,
        type: `Apartment`,
        rating: 2,
        room: 10,
        adults: 20,
        features: [`Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
        city: [52.38333, 4.9],
        coordinates: [52.3309553943508, 4.85309666406198],
        reviews: [
          {
            name: `Angelina`,
            index: 0,
            rating: 4,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 9, 18)
          },
          {
            name: `Jack`,
            index: 1,
            rating: 5,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 10, 14)
          },
          {
            name: `Jane`,
            index: 2,
            rating: 1,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 5, 14)
          }
        ],
        isBookmark: true,
        isPremium: true,
        host: {
          nameUser: `Judy`,
          avatar: `avatar-angelina.jpg.jpg`,
          description: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
          ],
        }
      },
      {
        name: `Place 2`,
        index: 2,
        images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
        price: 300,
        type: `Apartment`,
        rating: 5,
        room: 6,
        adults: 12,
        features: [`Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
        city: [52.38333, 4.9],
        coordinates: [52.3719553943508, 4.85309666406198],
        reviews: [
          {
            name: `Angelina`,
            index: 0,
            rating: 4,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 9, 23)
          },
          {
            name: `Jack`,
            index: 1,
            rating: 5,
            avatar: `avatar-max.jpg`,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.April 2019`,
            date: new Date(2019, 9, 27)
          }
        ],
        isBookmark: false,
        isPremium: false,
        host: {
          nameUser: `Judy`,
          avatar: `avatar-angelina.jpg.jpg`,
          description: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
          ],
        }
      }
    ],
  }
];

export {offers};
