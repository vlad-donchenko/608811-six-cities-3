import React, {PureComponent} from "react";
import {hoveredOfferIdType, offersType} from "../../types/index";
import leaflet from 'leaflet';

const icon = leaflet.icon({
  iconSize: [30, 30],
  iconUrl: `/img/pin.svg`
});

const activeIcon = leaflet.icon({
  iconSize: [30, 30],
  iconUrl: `/img/pin-active.svg`
});

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._pinGroupe = null;
    this.mapRef = React.createRef();
    this._map = null;
  }

  componentDidUpdate() {
    const {offers, hoveredOfferId} = this.props;
    const {city} = offers[0];
    const zoom = city.location.zoom;
    const mapView = [city.location.latitude, city.location.longitude];
    this._map.setView(mapView, zoom);
    this._pinGroupe.clearLayers();

    offers.forEach((offer) => {
      const offerCords = [offer.location.latitude, offer.location.longitude];
      leaflet.marker(offerCords, {icon: hoveredOfferId === offer.id ? activeIcon : icon}).addTo(this._pinGroupe);
    });

  }

  componentWillUnmount() {
    this._map.remove();
    this._map = null;
  }

  componentDidMount() {
    this._initMap();
  }

  _initMap() {
    const {offers, hoveredOfferId} = this.props;
    const {city} = offers[0];
    const zoom = city.location.zoom;

    const mapView = [city.location.latitude, city.location.longitude];

    this._map = leaflet.map(`map`, {
      center: mapView,
      zoom,
      zoomControl: false,
      marker: true,
    });

    this._pinGroupe = leaflet.layerGroup().addTo(this._map);

    this._map.setView(mapView, zoom);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(this._map);

    offers.forEach((offer) => {
      const offerCords = [offer.location.latitude, offer.location.longitude];
      leaflet.marker(offerCords, {icon: hoveredOfferId === offer.id ? activeIcon : icon}).addTo(this._pinGroupe);
    });
  }

  render() {
    return (
      <div id="map" className="map__content" ref={this.mapRef}></div>
    );
  }
}

Map.defaultProps = {
  hoveredOfferId: -1
};

Map.propTypes = {
  offers: offersType,
  hoveredOfferId: hoveredOfferIdType
};

export default Map;
