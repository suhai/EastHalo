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
			<div className='pages'>
				<div><button className='btn create align-left' onClick={this.renderForm}>Create Post</button></div>

				<h1 className='table-h1'>Posts Table</h1>
        <div className="tbl-header">
          <table cellPadding={0} cellSpacing={0}>
						<thead>
						<tr>
							<th scope="col">User</th>
							<th scope="col">Title</th>
							<th scope="col">Excerpt</th>
						</tr>
						</thead>
					</table>
				</div>

				<div className="tbl-content">
					<table cellPadding={0} cellSpacing={0}>
						<tbody>
						{posts}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Posts;