import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import Post from './Post';

class Posts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
		this.renderForm = this.renderForm.bind(this);
	};

	renderForm() {
		window.location.hash = `/admin/${this.props.currentUser.username}/posts/postform`;
	};

	componentDidMount() {
		this.props.fetchPosts();
	};

	render() {
		let postList = values(this.props.posts);
		let posts = postList.map((post, idx) => (
			<Post key={idx} post={post} currentUser={this.props.currentUser}/>
		));

		return (
			<div className=''>
				<div><button className='btn create align-left' onClick={this.renderForm}>Create Post</button></div>

				<table id="gradient-style" className="full-width">
					<thead>
						<tr>
							{/* <th scope="col">Post ID</th> */}
							<th scope="col">User</th>
							<th scope="col">Title</th>
							<th scope="col">Excerpt</th>
						</tr>
					</thead>

					<tbody>
						{posts}
					</tbody>

				</table>
				<p className='pull-left'>
					Table Footer or Description Will Go Here
				</p>
			</div>
		);
	}
}

export default Posts;
