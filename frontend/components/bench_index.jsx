import React from 'react';
import BenchIndexItem from './bench_index_item';

export default class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sort: 'none', benches: [...this.props.benches] };
    this.handleChange = this.handleChange.bind(this);
    window.scrollTo(0, 0);
  }

  fetchBenches() {
    this.props.fetchBenches(this.props.filters)
      .then(() => this.setState({ benches: [...this.props.benches] }));
  }

  componentDidMount() {
    if (Object.keys(this.props.filters.bounds).length > 0) {
      this.fetchBenches();
    }
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.filters) !== JSON.stringify(this.props.filters)) {
      this.fetchBenches();
    }
  }

  sortAscending(value) {
    this.setState({ benches: this.state.benches.sort((a, b) => a[value] - b[value]) });
  }

  sortDescending(value) {
    this.setState({ benches: this.state.benches.sort((a, b) => b[value] - a[value]) });
  }

  sortBenches(value) {
    switch(value) {
      case 'rating-asc':
        this.sortAscending('rating');
        break;
      case 'rating-desc':
        this.sortDescending('rating');
        break;
      case 'seating-asc':
        this.sortAscending('seating');
        break;
      case 'seating-desc':
        this.sortDescending('seating');
        break;
      default:
        this.setState({ benches: [...this.props.benches] });
    }
  }

  handleChange(e) {
    const value = e.currentTarget.value;

    this.setState({ sort: value }, () => {
      this.sortBenches(value);
    });
  }

  render() {
    return (
      <section className="benches">
        <div className="sort-menu clear-fix">
          <span className="arrow-down"></span>
        <select value={this.state.sort} onChange={this.handleChange}>
          <option disabled value="none">Sort By:</option>
          <option value="rating-asc">Rating &uarr;</option>
          <option value="rating-desc">Rating &darr;</option>
          <option value="seating-asc">Seating &uarr;</option>
          <option value="seating-desc">Seating &darr;</option>
          <option value="no-order">Default</option>
        </select>
        </div>

        { this.state.benches.map((bench) => <BenchIndexItem key={bench.id} bench={bench} />) }
      </section>
    );
  }
}
