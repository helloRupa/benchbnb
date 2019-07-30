import React from 'react';
import SingleBenchMap from './single_bench_map';
import { Link } from 'react-router-dom';
import ReviewFormContainer from './review_form_container';
import Reviews from './reviews';

export default class BenchShow extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { rating: this.props.bench.rating }
  // }

  componentDidMount() {
    this.props.showBench(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.showBench(this.props.match.params.id);
    }
  }

  render() {
    const bench = this.props.bench;

    return (
      <section className="bench-details">
        <Link to="/">{"<<"} Back to benches</Link>
        <SingleBenchMap lat={bench.lat} lng={bench.lng} />

        <ul>
          <li>{bench.description}</li>
          <li>Score: {bench.rating} (Based on {bench.num_reviews} reviews)</li>
          <li>{bench.seating} seats</li>
          <li>Latitude: {bench.lat}</li>
          <li>Longitude: {bench.lng}</li>
        </ul>

        <ReviewFormContainer benchId={bench.id} />

        <Reviews reviews={this.props.reviews} />
      </section>
    )
  }
};
