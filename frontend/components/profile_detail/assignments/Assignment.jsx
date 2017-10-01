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
				<div className='assignment-page'>
					<h5>YOU HAVE TO BE ENROLED IN A COURSE IN ORDER TO HAVE ASSIGNEMNTS.</h5>
					<div className=''>
					
					</div>
				</div>
      </main>
    );
  }
}

export default Assignment;