import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../util/marker_manager';

class BenchMap extends React.Component {
  componentDidMount() {
    // set map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches, this.props.benchesObj);

    google.maps.event.addListener(this.map, 'idle', () => {
      const bounds = this.map.getBounds();
      const formattedBounds = {
        'northEast': { 'lat': bounds.getNorthEast().lat(), 'lng': bounds.getNorthEast().lng() },
        'southWest': { 'lat': bounds.getSouthWest().lat(), 'lng': bounds.getSouthWest().lng() },
      };

      this.props.updateBounds(formattedBounds);
    });

    google.maps.event.addListener(this.map, 'click', (e) => {
      const latitude = e.latLng.lat();
      const longitude = e.latLng.lng();

      this.props.history.push({
        pathname: "benches/new",
        search: `lat=${latitude}&lng=${longitude}`,
      });
    });
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches, this.props.benchesObj);
  }

  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map } />
    );
  }
}

export default withRouter(BenchMap);
