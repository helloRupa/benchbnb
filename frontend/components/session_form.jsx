import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.displayErrors = this.displayErrors.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  displayErrors() {
    return <div className="errors">{this.props.errors.join(', ')}</div>;
  }

  render() {
    const formTypeText = (this.props.formType === 'signup') ? 'Sign Up' : 'Log In';
    const link = (this.props.formType === 'signup') ? (
      <div>
        Already have an account? <Link to='/login'>Log In!</Link>
      </div>
    ) : (
      <div>
        Need an account? <Link to='/signup'>Sign Up!</Link>
      </div>
    );

    return (
      <form>
        <h1>{formTypeText}</h1>
        {link}
        {this.displayErrors()}

        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          onChange={this.handleChange} 
          value={this.state.username} 
          name="username"
          id="username"
          placeholder="Username" />

        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          onChange={this.handleChange} 
          value={this.state.password} 
          name="password"
          id="password"
          placeholder="Password" />

        <input type="submit" onClick={this.handleSubmit} value={formTypeText} />
      </form>
    );
  }
}