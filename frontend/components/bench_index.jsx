import React from 'react';
import BenchIndexItem from './bench_index_item';

// const defaultFilter = {
//   bounds: {
//     "northEast": {"lat": "37.80971", "lng": "-122.39208"}, 
//     "southWest": {"lat": "37.74187", "lng": "-122.47791"},
//   }
// };

export default class BenchIndex extends React.Component {
  // componentDidMount() {
    // this.props.fetchBenches(defaultFilter);
  // }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.filters) !== JSON.stringify(this.props.filters)) {
      this.props.fetchBenches(this.props.filters);
    }
  }

  render() {
    return (
      <section className="benches">
        { this.props.benches.map((bench) => <BenchIndexItem key={bench.id} bench={bench} />) }
      </section>
    );
  }
}
