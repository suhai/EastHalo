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

				<div className='profile-page-detail'>
					<h4>YOU HAVE TO BE ENROLED IN A COURSE IN ORDER TO HAVE ASSIGNEMNTS.</h4>
					<div className='profile-detail-table'>
					
					</div>
				</div>
      </main>
    );
  }
}

export default Assignment;