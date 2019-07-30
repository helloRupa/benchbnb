import React from 'react';
import SingleBenchMap from './single_bench_map';
import { Link } from 'react-router-dom';

export default class BenchShow extends React.Component {

  componentDidMount() {
    this.props.showBench(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.showBench(this.props.match.params.id);
    }
  }

  render() {
    return (
      <section className="bench-details">
        <Link to="/">{"<<"} Back to benches</Link>
        <SingleBenchMap lat={this.props.bench.lat} lng={this.props.bench.lng} />
        <ul>
          <li>{this.props.bench.description}</li>
          <li>{this.props.bench.seating} seats</li>
          <li>Latitude: {this.props.bench.lat}</li>
          <li>Longitude: {this.props.bench.lng}</li>
        </ul>
      </section>
    )
  }
};
