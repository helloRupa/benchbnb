import React from 'react';

class SingleBenchMap extends React.Component {
  componentDidUpdate() {
    const mapOptions = {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 13,
      draggable: false,
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);   
    const pos = new google.maps.LatLng(this.props.lat, this.props.lng);
    new google.maps.Marker({ position: pos, map: this.map });
  }

  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map } />
    );
  }
}

export default SingleBenchMap;
