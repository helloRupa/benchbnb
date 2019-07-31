import React from 'react';
import { Link } from 'react-router-dom';
import DisplayErrors from './display_errors';

class BenchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      lat: this.props.lat,
      lng: this.props.lng,
      seating: '',
      photo: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];

    if (file.type.startsWith('image')) {
      this.setState({ photo: file });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append('bench[description]', this.state.description);
    formData.append('bench[lat]', this.state.lat);
    formData.append('bench[lng]', this.state.lng);
    formData.append('bench[seating]', this.state.seating);

    if (this.state.photo) {
      formData.append('bench[photo]', this.state.photo);
    }

    this.props.createBench(formData)
      .then((bench) => this.props.history.push(`/benches/${bench.id}`));
  }

  render() {
    return (
      <form className="new-bench">
        <Link to="/">{"<<"} Back to benches</Link>
        <DisplayErrors errors={this.props.errors} />
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

        <label htmlFor="file">Upload Image</label>
        <input type="file" id="file" accept=".jpg,.png,.gif,.jpeg" onChange={this.handleFile} />

        <input type="submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default BenchForm;
