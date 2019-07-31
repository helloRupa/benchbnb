import React from 'react';
import BenchIndexItem from './bench_index_item';

export default class BenchIndex extends React.Component {
  componentDidMount() {
    if (Object.keys(this.props.filters.bounds).length > 0) {
      this.props.fetchBenches(this.props.filters);
    }
  }

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
