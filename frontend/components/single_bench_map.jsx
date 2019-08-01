import React from 'react';

class SingleBenchMap extends React.Component {
  constructor(props) {
    super(props);
    this.mapOptions = {};
  }

  setMapOptions() {
    this.mapOptions = {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 13,
      draggable: false,
    };
  }

  makeMap() {
    this.map = new google.maps.Map(this.mapNode, this.mapOptions);   
    const pos = new google.maps.LatLng(this.props.lat, this.props.lng);
    new google.maps.Marker({ position: pos, map: this.map });
  }

  componentDidMount() {
    if (this.props.lat != undefined) {
      this.setMapOptions();
      this.makeMap();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.lat != undefined && prevProps.lat !== this.props.lat) {
      this.setMapOptions();
      this.makeMap();
    }
  }

  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map } />
    );
  }
}

export default SingleBenchMap;
