const offers = [
  {
    bedrooms: 5,
    city: {
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century`,
    goods: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Baby seat`],
    host: {
      avatarUrl: `avatar-angelina.jpg`,
      id: 0,
      isPro: true,
      name: `Angelina`
    },
    id: 0,
    images: [`room.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 3,
    previewImage: `apartment-01.jpg`,
    price: 494,
    rating: 5,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Private room`
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century`,
    goods: [`Heating`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      avatarUrl: `avatar-angelina.jpg`,
      id: 1,
      isPro: false,
      name: `Max`
    },
    id: 1,
    images: [`room.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 5,
    previewImage: `apartment-01.jpg`,
    price: 264,
    rating: 1,
    title: `Wood and stone place`,
    type: `Private room`
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century`,
    goods: [`Fridge`, `Dishwasher`, `Towels`],
    host: {
      avatarUrl: `avatar-max.jpg`,
      id: 2,
      isPro: false,
      name: `Sam`
    },
    id: 2,
    images: [`room.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: `apartment-02.jpg`,
    price: 418,
    rating: 5,
    title: `Canal View Prinsengracht`,
    type: `Private room`
  },
  {
    bedrooms: 7,
    city: {
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century`,
    goods: [`Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Dishwasher`, `Baby seat`, `Cabel TV`],
    host: {
      avatarUrl: `avatar-angelina.jpg`,
      id: 3,
      isPro: true,
      name: `Nick`
    },
    id: 3,
    images: [`room.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    maxAdults: 7,
    previewImage: `apartment-03.jpg`,
    price: 358,
    rating: 5,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Private room`
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Wi-Fi`, `Kitchen`, `Coffee machine`, `Towels`, `Baby seat`],
    host: {
      avatarUrl: `avatar-angelina.jpg`,
      id: 4,
      isPro: true,
      name: `Jane`
    },
    id: 4,
    images: [`room.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3709553943508,
      longitude: 4.979309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `apartment-02.jpg`,
    price: 402,
    rating: 5,
    title: `Wood and stone place`,
    type: `Apartment`
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 48.866411,
        longitude: 2.331896,
        zoom: 15
      },
      name: `Paris`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Wi-Fi`, `Kitchen`, `Towels`, `Baby seat`],
    host: {
      avatarUrl: `avatar-angelina.jpg`,
      id: 5,
      isPro: true,
      name: `Jane`
    },
    id: 5,
    images: [`room.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 48.866347,
      longitude: 2.332926,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `apartment-02.jpg`,
    price: 402,
    rating: 5,
    title: `Le Roch Hotel & Spa`,
    type: `Apartment`
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 48.866411,
        longitude: 2.331896,
        zoom: 15
      },
      name: `Paris`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Wi-Fi`, `Kitchen`, `Towels`, `Baby seat`],
    host: {
      avatarUrl: `avatar-max.jpg`,
      id: 6,
      isPro: true,
      name: `Max`
    },
    id: 6,
    images: [`room.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 48.864967,
      longitude: 2.329262,
      zoom: 8
    },
    maxAdults: 10,
    previewImage: `apartment-03.jpg`,
    price: 800,
    rating: 4,
    title: `Hotel Brighton`,
    type: `Apartment`
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 50.946639,
        longitude: 6.961174,
        zoom: 13
      },
      name: `Cologne`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      avatarUrl: `avatar-max.jpg`,
      id: 7,
      isPro: false,
      name: `Sam`
    },
    id: 7,
    images: [`room.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 48.864413,
      longitude: 2.330791,
      zoom: 8
    },
    maxAdults: 8,
    previewImage: `apartment-02.jpg`,
    price: 700,
    rating: 4,
    title: `DJH Youth Hostel Cologne Pathpoint`,
    type: `Apartment`
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 50.946639,
        longitude: 6.961174,
        zoom: 13
      },
      name: `Cologne`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      avatarUrl: `avatar-max.jpg`,
      id: 8,
      isPro: true,
      name: `Sam`
    },
    id: 8,
    images: [`room.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 50.945373,
      longitude: 6.958623,
      zoom: 8
    },
    maxAdults: 8,
    previewImage: `apartment-01.jpg`,
    price: 900,
    rating: 4,
    title: `Hotel Domspitzen`,
    type: `Apartment`
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 50.946639,
        longitude: 6.961174,
        zoom: 13
      },
      name: `Cologne`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      avatarUrl: `avatar-max.jpg`,
      id: 9,
      isPro: false,
      name: `Sam`
    },
    id: 9,
    images: [`room.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 50.945900,
      longitude: 6.957892,
      zoom: 8
    },
    maxAdults: 8,
    previewImage: `apartment-01.jpg`,
    price: 1100,
    rating: 4,
    title: `Hotel Merian`,
    type: `Apartment`
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 50.946639,
        longitude: 6.961174,
        zoom: 13
      },
      name: `Cologne`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      avatarUrl: `avatar-max.jpg`,
      id: 11,
      isPro: true,
      name: `Max`
    },
    id: 11,
    images: [`room.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 50.945450,
      longitude: 6.955685,
      zoom: 8
    },
    maxAdults: 8,
    previewImage: `apartment-01.jpg`,
    price: 100,
    rating: 4,
    title: `a&o Hostel Köln Hauptbahnhof`,
    type: `Apartment`
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 50.848587,
        longitude: 4.342344,
        zoom: 10
      },
      name: `Brussels`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      avatarUrl: `avatar-max.jpg`,
      id: 12,
      isPro: true,
      name: `Max`
    },
    id: 12,
    images: [`room.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 50.833595,
      longitude: 4.354622,
      zoom: 8
    },
    maxAdults: 8,
    previewImage: `apartment-01.jpg`,
    price: 570,
    rating: 4,
    title: `a&o Hostel Köln Hauptbahnhof`,
    type: `Apartment`
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 50.848587,
        longitude: 4.342344,
        zoom: 10
      },
      name: `Brussels`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      avatarUrl: `avatar-max.jpg`,
      id: 13,
      isPro: true,
      name: `Max`
    },
    id: 13,
    images: [`room.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 50.848587,
      longitude: 4.342344,
      zoom: 8
    },
    maxAdults: 8,
    previewImage: `apartment-03.jpg`,
    price: 570,
    rating: 4,
    title: `Citadines Toison d'Or Brussels (Apart Hotel Brussels)`,
    type: `Apartment`
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 50.946639,
        longitude: 6.961174,
        zoom: 10
      },
      name: `Brussels`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      avatarUrl: `avatar-max.jpg`,
      id: 14,
      isPro: false,
      name: `Max`
    },
    id: 14,
    images: [`room.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 50.833025,
      longitude: 4.356767,
      zoom: 8
    },
    maxAdults: 8,
    previewImage: `room.jpg`,
    price: 270,
    rating: 5,
    title: `Hotel NH Brussels Louise`,
    type: `Apartment`
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 53.551059,
        longitude: 9.977448,
        zoom: 13
      },
      name: `Hamburg`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      avatarUrl: `avatar-max.jpg`,
      id: 15,
      isPro: false,
      name: `Max`
    },
    id: 15,
    images: [`room.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 53.549422,
      longitude: 9.967592,
      zoom: 8
    },
    maxAdults: 8,
    previewImage: `room.jpg`,
    price: 3660,
    rating: 5,
    title: `ARCOTEL Onyx Hamburg`,
    type: `Apartment`
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 53.551059,
        longitude: 9.977448,
        zoom: 13
      },
      name: `Hamburg`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      avatarUrl: `avatar-max.jpg`,
      id: 16,
      isPro: false,
      name: `Max`
    },
    id: 16,
    images: [`room.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 53.551360,
      longitude: 9.966766,
      zoom: 8
    },
    maxAdults: 8,
    previewImage: `apartment-02.jpg`,
    price: 1660,
    rating: 5,
    title: `Holiday Inn Express Hamburg-St. Pauli Messe`,
    type: `Apartment`
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 51.227738,
        longitude: 6.793251,
        zoom: 10
      },
      name: `Dusseldorf`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      avatarUrl: `avatar-max.jpg`,
      id: 17,
      isPro: false,
      name: `Max`
    },
    id: 17,
    images: [`room.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 51.220447,
      longitude: 6.789114,
      zoom: 8
    },
    maxAdults: 8,
    previewImage: `apartment-02.jpg`,
    price: 160,
    rating: 4,
    title: `Hotel Düsseldorf City by Tulip Inn`,
    type: `Apartment`
  }
];

export {offers};
