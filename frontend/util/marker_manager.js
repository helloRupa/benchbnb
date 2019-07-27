export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  clearMarkers(benchesObj) {
    for (const i in this.markers) {
      if (benchesObj[i] == undefined) {
        this.markers[i].setMap(null);
        this.markers[i] = null;
      }
    }

    this.markers = {};
  }

  updateMarkers(benches, benchesObj) {
    this.clearMarkers(benchesObj);

    benches.forEach((bench) => {
      if (!this.markers.hasOwnProperty(bench.id)) {
        this.createMarkerFromBench(bench);
      }
    });
  }

  createMarkerFromBench(bench) {
    const pos = new google.maps.LatLng(bench.lat, bench.lng);
	  const marker = new google.maps.Marker({ position: pos, map: this.map });
    
    this.markers[bench.id] = marker;
  }
};
