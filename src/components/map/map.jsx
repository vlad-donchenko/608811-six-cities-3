import React, {PureComponent} from "react";
import {offersType} from "../../types/index";
import leaflet from 'leaflet';

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

  componentDidUpdate() {
    this._initMap();
  }

  componentWillUnmount() {
    this._map.off();
    this._map.remove();
  }

  render() {
    return (
      <div id="map" className="map__content" ref={this.mapRef}></div>
    );
  }

  _initMap() {
    const {offers} = this.props;
    const {city} = offers[0];
    const zoom = city.location.zoom;
    if (this._map) {
      this._map.remove();
      this.map = null;
    }

    const mapView = [city.location.latitude, city.location.longitude];
    this._map = leaflet.map(`map`, {
      center: mapView,
      zoom,
      zoomControl: false,
      marker: true,
    });

    this._map.setView(mapView, zoom);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(this._map);

    offers.forEach((offer) => {
      const offerCords = [offer.location.latitude, offer.location.longitude];
      leaflet.marker(offerCords, {icon}).addTo(this._map);
    });
  }
}

Map.propTypes = {
  offers: offersType,
};

export default Map;
