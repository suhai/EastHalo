import React from 'react';
import { values } from 'lodash';
import User from '../user/User';
import Course from '../course/Course';


class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    let query = this.props.location.search.slice(3);
		this.props.fetchUsers({ search: query });
		this.props.fetchCourses({ search: query });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      let query = nextProps.location.search.slice(3);
			this.props.fetchUsers({ search: query });
			this.props.fetchCourses({ search: query });
    }
  }

  render() {
    let users = values(this.props.search.users).map( user => (
      <User user={user} key={user.id} />
		));
		
		let courses = values(this.props.search.courses).map( course => (
      <Course course={course} key={course.id} />
    ));

    let results = <p className='nothing'>Sorry, No Matches Were Found.</p>;
    if (users.length !== 0 || courses.length !== 0) {
      results = (
        <ul className='search-results'>
          {users}
					{courses}
        </ul>
      );
    }
    return (
      <div className='search-page'>
        <h3>Search results for {`"${this.props.location.search.slice(3)}"`}</h3>
        {results}
      </div>
    );
  }
}

export default Search;