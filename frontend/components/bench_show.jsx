import React from 'react';
import SingleBenchMap from './single_bench_map';
import { Link } from 'react-router-dom';
import ReviewFormContainer from './review_form_container';
import Reviews from './reviews';
import StaticStars from './static_stars';
import LoadingContainer from './loading_container';

export default class BenchShow extends React.Component {
  constructor(props) {
    super(props);
    window.scrollTo(0, 0);
  }

  fetchBench() {
    this.props.showBench(this.props.match.params.id)
      .fail((err) => {
        this.props.history.push('/404');
        console.log('Bench does not exist');
    });
  }

  componentDidMount() {
    this.fetchBench();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchBench();
    }
  }

  render() {
    const bench = this.props.bench;
    const review_text = bench.num_reviews === 1 ? 'review' : 'reviews';

    return (
      <section className="bench-details">
        <LoadingContainer />
        <Link to="/" className="back-link">{"<<"} Back to benches</Link>

        <div className="clear-fix">
        <SingleBenchMap lat={bench.lat} lng={bench.lng} />

        <ul className="details">
          <img src={bench.image} />
          <li><h2>{bench.description}</h2></li>
          <li><StaticStars rating={bench.rating} /></li>
          <li>{bench.rating} ({bench.num_reviews} {review_text})</li>
          <li>{bench.seating} seats</li>
          <li>Latitude: {bench.lat}</li>
          <li>Longitude: {bench.lng}</li>
        </ul>
        </div>

        <ReviewFormContainer />

        <Reviews reviews={this.props.reviews} />
      </section>
    )
  }
};
