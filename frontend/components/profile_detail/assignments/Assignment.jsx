import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';

class Assignment extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
 
    return (
      <main className='user-page'>
        <h3>YOU HAVE NO ASSIGNMENTS YET. SIGN UP FOR A CLASS FIRST</h3>
      </main>
    );
  }
}

export default Assignment;