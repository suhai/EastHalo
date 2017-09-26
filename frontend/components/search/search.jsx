import React from 'react';
import { values } from 'lodash';
import UserSearchResult from '../users/UserSearchResult';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    let query = this.props.location.search.slice(3);
		this.props.fetchUsers({ search: query });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      let query = nextProps.location.search.slice(3);
			this.props.fetchUsers({ search: query });
    }
  }

  render() {
    let users = values(this.props.search.users).map( user => (
      <UserSearchResult user={user} key={user.id} currentUser={this.props.currentUser}/>
		));

    let results = <p className='nothing'>Sorry, No Matches Were Found.</p>;
    if (users.length !== 0) {
      results = (
        <ul className='search-results'>
          {users}
        </ul>
      );
    }
    return (
      <div className='community-page'>
        <h3>Search results for {`"${this.props.location.search.slice(3)}"`} are: </h3>
        {results}
      </div>
    );
  }
}

export default Search;