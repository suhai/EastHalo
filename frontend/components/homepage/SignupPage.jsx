import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  demoLogin(e) {
    e.preventDefault();
    let user = {
      username: 'johnTheAdmin',
      password: 'password'
    };
    this.props.login(user);
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
				<li><button onClick={this.demoLogin}>Demo login</button></li>
        <ul>
          <div></div>
          <p></p>
          <div></div>
        </ul>
        <li>
          <h1>Sign up Below</h1>
        </li>
        <li>
          {errors}
          <input onKeyPress={this.handleKey} onChange={this.update('username')} placeholder='Username'></input>
        </li>
        <li>
          <input onKeyPress={this.handleKey} onChange={this.update('password')} type='password' placeholder='Password'></input>
        </li>
        <li>
          <button onClick={this.handleSubmit}>Register</button>
        </li>
      </ul>
    );
  }
}

export default Signup;
