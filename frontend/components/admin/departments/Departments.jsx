import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';

class Departments extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
 
    return (
      <main className='user-page'>
        <h3>THIS IS THE ADMIN DEPARTMENTS PAGE</h3>
      </main>
    );
  }
}

export default Departments;