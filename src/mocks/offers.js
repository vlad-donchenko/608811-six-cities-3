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
    rating: 4,
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
    rating: 3,
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
    rating: 2,
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
      id: 7,
      isPro: true,
      name: `Max`
    },
    id: 7,
    images: [`room.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 48.867186,
      longitude: 2.329262,
      zoom: 8
    },
    maxAdults: 10,
    previewImage: `apartment-03.jpg`,
    price: 200,
    rating: 2,
    title: `Mandarin Oriental, Paris`,
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
      id: 8,
      isPro: true,
      name: `Max`
    },
    id: 8,
    images: [`room.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 48.869148,
      longitude: 2.323673,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `apartment-02.jpg`,
    price: 1500,
    rating: 1,
    title: `Sofitel Paris Le Faubourg`,
    type: `Apartment`
  }
];

export {offers};
