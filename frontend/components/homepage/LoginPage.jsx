import React from 'react';

class LoginPage extends React.Component {
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
				<p className='demo-username'>Pick a demo username below to login:</p>
				<p>username 'student' to login as a Student</p>
				<p>username 'professor' to login as a Professor</p>
				<p>username 'admin' to login as an Admin</p>
				<p>username 'alex' to login as none of the above</p>
				<p className='demo-username'>Use 'password' as the password</p>
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

export default LoginPage;