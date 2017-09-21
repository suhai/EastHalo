import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import NewsSnippet from '../news/NewsSnippet';
import PostSnippet from '../posts/PostSnippet';
import UserSnippet from '../users/UserSnippet';

class SubHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	};

	componentDidMount() {
		this.props.fetchUsers();
		this.props.fetchPosts();
		this.props.fetchAllNews();
	};

	render() {
		// randomly select some users, posts, and news from all available
		let users = values(this.props.users).map((user, idx) => (
			<UserSnippet key={idx} user={user} currentUser={this.props.currentUser} />
		));
		let posts = values(this.props.posts).map((post, idx) => (
			<PostSnippet key={idx} post={post} currentUser={this.props.currentUser} />
		));
		let all_news = values(this.props.news).map((news, idx) => (
			<NewsSnippet key={idx} news={news} currentUser={this.props.currentUser} />
		));

		return (
			<div className=''>
				<h3>WELCOME TO THE SUB HOME PAGE</h3>
				<h4>RANDOM LIST OF FLOATING POSTS</h4>
				<h4>RANDOM LIST OF FLOATING NEWS</h4>
				<h4>RANDOM LIST OF FLOATING USERS</h4>
				{users}
				{posts}
				{all_news}
			</div>
		);
	}
}

export default SubHome;
