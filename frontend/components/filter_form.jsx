import React from 'react';

export default class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { min_seating: 1, max_seating: 10 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.currentTarget.name]: parseInt(e.currentTarget.value, 10) },
    () => {
      if (this.state.min_seating <= this.state.max_seating) {
        this.props.updateSeating(this.state);
      }
    });    
  }

  render() {
    return(
      <form>
        <label htmlFor="minSeating">Min. Seats</label>
        <input 
          type="number"
          id="minSeating"
          name="min_seating"
          min="1"
          max="100"
          value={this.state.min_seating}
          onChange={this.handleChange} />

        <label htmlFor="maxSeating">Max. Seats</label>
        <input 
          type="number"
          id="maxSeating"
          name="max_seating"
          min="1"
          max="100"
          value={this.state.max_seating}
          onChange={this.handleChange} />
      </form>
    )
  }
};
