import React from 'react';
import DisplayErrors from './display_errors';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bench_id: this.props.match.params.id, comment: '', rating: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.setState({ bench_id: this.props.match.params.id });
    }
  }

  handleChange(e) {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.props.loggedIn) {
      this.props.createReview(this.state);
      this.setState(this.state = { comment: '', rating: '' });
    }
  }

  handleStarClick(val) {
    this.setState({ rating: val });
  }

  starClass(val) {
    return (this.state.rating >= val) ? 'selected-star' : '';
  }

  makeStars() {
    return (
      <div className="stars" ref={ stars => this.stars = stars }>
        { [1, 2, 3, 4, 5].map((val) => (
        <span 
          key={val} 
          onClick={() => this.handleStarClick(val)} 
          className={this.starClass(val)}>
          &#9733; 
        </span>)) }
      </div>
    );
  }

  render() {
    const disabled = this.props.loggedIn ? '' : 'disabled';
    const msg = this.props.loggedIn ? '' : 'Please log in to submit a review.';

    return (
      <form className="review clear-fix">
        <h3>Review Bench</h3>
        <DisplayErrors errors={this.props.errors} />
        { msg }       

        <label htmlFor="rating">Rating<span className="required">*</span></label>
        {this.makeStars()}

        <label htmlFor="comment">Comment<span className="required">*</span></label>
        <textarea 
          id="comment"
          name="comment"
          value={this.state.comment}
          onChange={this.handleChange}
          disabled={disabled} />

        <input type="submit" onClick={this.handleSubmit} value="Submit Review" disabled={disabled} />
      </form>
    );
  }
}

export default withRouter(ReviewForm);
