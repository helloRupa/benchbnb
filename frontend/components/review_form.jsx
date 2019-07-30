import React from 'react';

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bench_id: this.props.benchId, comment: '', rating: '' };
    this.displayErrors = this.displayErrors.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.props.loggedIn) {
      this.props.createReview(this.state);
      this.setState(this.state = { bench_id: this.props.benchId, comment: '', rating: '' });
    }
  }

  displayErrors() {
    return (
      <div className="errors">
        {this.props.errors.join(', ')}
      </div>
    )
  }

  render() {
    const disabled = this.props.loggedIn ? '' : 'disabled';
    const msg = this.props.loggedIn ? '' : 'Log in to submit a review.';

    return (
      <form>
        <h2>Review Bench</h2>
        {this.displayErrors()}
        {msg}

        <label htmlFor="rating">Rating (1 - 5)</label>
        <input 
          type="number" 
          id="rating" 
          name="rating" 
          min="1" 
          max="5" 
          value={this.state.rating}
          onChange={this.handleChange}
          disabled={disabled} />

        <label htmlFor="comment">Comment</label>
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
