import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  update(prop) {
    return e => this.setState({ [prop]: e.target.value });
  }

  handleKey(e) {
    if (e.key === 'Enter') {
      this.props.signup(this.state);
    }
  }

  render() {
    let errors = this.props.errors.map( (error, idx) => (
      <p className='auth-errors' key={idx}>{error}</p>
    ));
    return (
      <ul className='homepage-auth'>
        <li>
          <h3>Enter a username and password</h3>
        </li>
        <ul>
          <div></div>
          <p>tM</p>
          <div></div>
        </ul>
        <li>
          {errors}
          <input onKeyPress={this.handleKey} onChange={this.update('username')} placeholder='Username'></input>
        </li>
        <li>
          <input onKeyPress={this.handleKey} onChange={this.update('password')} type='password' placeholder='Password'></input>
        </li>
        <li>
          <button onClick={this.handleSubmit}>Enter</button>
        </li>
      </ul>
    );
  }
}

export default Signup;