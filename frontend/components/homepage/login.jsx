import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  update(prop) {
    return e => this.setState({ [prop]: e.target.value });
  }

  handleKey(e) {
    if (e.key === 'Enter') {
      this.props.login(this.state);
    }
  }

  render() {
    let errors = this.props.errors.join('');
    return (
      <ul className='homepage-auth'>
        <li><h3>Welcome</h3></li>
				<p>username To Login as : </p>
				<p>a Professor = adam </p>
				<p>a Student = anna</p>
				<p>an admin = bella</p>
				<p>a normal user = brad</p> 
				<hr className='my-hr' />
        <li>
          <p className='auth-errors'>{errors}</p>
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

export default Login;