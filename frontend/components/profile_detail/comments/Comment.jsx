import React from 'react';
import ReactDOM from 'react-dom';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.showComment = this.showComment.bind(this);
  }


  showComment() {
		// go to this comment on its parent post page
	};


  render() {
		const { 
			id, 
			post_id, 
			body
		} = this.props.comment;

    return (
			<tr onClick={this.showComment}>
				<td>{user_id}</td>
				<td>{post_id}</td>
				<td>{body.slice(0,100)}</td>
				<td onClick={this.showComment}>Show More</td>
			</tr>
    );
  }
}

export default Comment;