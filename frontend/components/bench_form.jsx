import React from 'react';

class BenchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      lat: this.props.lat,
      lng: this.props.lng,
      seating: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayErrors = this.displayErrors.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createBench(this.state)
      .then(() => this.props.history.push('/'));
  }

  displayErrors() {
    return (
      <div className="errors">
        {this.props.errors.join(', ')}
      </div>
    )
  }

  render() {
    return (
    <form>
      {this.displayErrors()}
      <label htmlFor="lat">Latitude:</label>
      <input type="text" name="lat" id="lat" value={this.state.lat} disabled />

      <label htmlFor="lng">Longitude:</label>
      <input type="text" name="lng" id="lng" value={this.state.lng} disabled />

      <label htmlFor="description">Description</label>
      <input 
        type="text" 
        name="description" 
        id="description" 
        value={this.state.description}
        onChange={this.handleChange} />

      <label htmlFor="seating">Number of Seats</label>
      <input 
        type="number"
        name="seating"
        id="seating"
        min="1"
        max="1000"
        value={this.state.seating}
        onChange={this.handleChange} />

        <input type="submit" onClick={this.handleSubmit} />
    </form>
    );
  }
}

export default BenchForm;