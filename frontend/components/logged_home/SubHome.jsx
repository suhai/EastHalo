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
		this.shuffleArray = this.shuffleArray.bind(this);
	};

	componentDidMount() {
		this.props.fetchUsers();
		this.props.fetchPosts();
		this.props.fetchAllNews();
	};

	shuffleArray(arr) {
		return arr.sort(() => (Math.random() - 0.5));
	}

	render() {
		let users = this.shuffleArray(values(this.props.users)).map((user, idx) => (
			<UserSnippet key={idx} user={user} currentUser={this.props.currentUser} />
		));
		let posts = this.shuffleArray(values(this.props.posts)).map((post, idx) => (
			<PostSnippet key={idx} post={post} currentUser={this.props.currentUser} />
		));
		let all_news = this.shuffleArray(values(this.props.news)).map((news, idx) => (
			<NewsSnippet key={idx} news={news} currentUser={this.props.currentUser} />
		));

		return (
			<div className='subhome-main'>
				<h4 className='subhome-header'>BROWSE THROUGH POSTS, NEWS, AND USERS</h4>
				<hr/>
					<h4>Avaliable News Links</h4>
					<div className='community-page'>
						{all_news}
					</div>
					<hr/>
					<h4>Sample Posts From Users</h4>
					<div className='community-page'>
						{posts}
					</div>
					<hr/>

					<h4>Sample Users</h4>
					<div className='community-page'>
						{users}
					</div>
			</div>
		);
	}
}

export default SubHome;
