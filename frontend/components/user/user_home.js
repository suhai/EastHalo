import React from 'react';
import { values, merge } from 'lodash';

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      input: '' 
    }
    this.dipslayUsers = this.displayUsers.bind(this);
  }

  displayUsers() {
    // console.log('Displaying Users');
  }

  componentDidMount() {
    // this.props.fetchUsers() 
  }

  render() {
    let users = values(this.props.users).map( (user, idx) => (
      <li className='user-page-options list'>
        <a>{user.username}</a>
        <aside>
          <button className='user-page-edit'>Edit</button>
          <button className='user-page-delete'>Delete</button>
        </aside>
      </li>
    ));
    return (
      <main className='loggedhome-body'>
        <div className='main-index'>
          <nav className='content-nav'>
            <ul>
              <div className='upload-buttons'>
                <h2>User Zone <button onClick={this.displayUsers} className='addnew'>Display Users</button></h2>  
              </div>
            </ul>
          </nav>
          <div className='nav-border' />
          <p>Sorry, you are not authorized to access the content of this page.</p>
          <p>Please explore other areas.</p>

          {users}
        </div>
      </main>
    );
  }
}

export default UserHome;