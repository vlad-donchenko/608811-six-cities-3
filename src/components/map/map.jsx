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
    this._initMap();
  }

  componentWillUnmount() {
    this._map.remove();
  }

  render() {
    return (
      <section className="cities__map map" ref={this.mapRef}></section>
    );
  }

  _initMap() {
    const {offers} = this.props;
    const {city} = offers[0];

    this._map = leaflet.map(`map`, {
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
}

Map.propTypes = {
  offers: PropTypes.array.isRequired
};

export default Map;
