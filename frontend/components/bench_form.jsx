import React from 'react';

class BenchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      lat: '',
      lng: '',
      seating: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  render() {
    <form>
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
  }
}

export default BenchForm;