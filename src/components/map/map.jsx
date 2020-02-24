import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from 'leaflet';

const ZOOM = 12;

const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.mapRef = React.createRef();
    this._map = null;
  }

  componentDidMount() {
    const {offers} = this.props;
    const {id} = this.mapRef.current;
    const {city} = offers[0];

    this._map = leaflet.map(id, {
      center: city,
      zoom: ZOOM,
      zoomControl: false,
      marker: true,
    });

    this._map.setView(city, ZOOM);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(this._map);

    offers.forEach((offer) => {
      leaflet.marker(offer.coordinates, {icon}).addTo(this._map);
    });
  }

  componentWillUnmount() {
    this._map.remove();
  }

  render() {
    return (
      <section className="cities__map map" id="map" ref={this.mapRef}></section>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    room: PropTypes.number.isRequired,
    adults: PropTypes.number.isRequired,
    features: PropTypes.array.isRequired,
    city: PropTypes.array.isRequired,
    coordinates: PropTypes.array.isRequired,
    isBookmark: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    host: PropTypes.shape({
      nameUser: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      description: PropTypes.array.isRequired,
    }).isRequired,
  })).isRequired,
};

export default Map;
