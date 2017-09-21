import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
		this.showComment = this.showComment.bind(this);
		this.editComment = this.editComment.bind(this);
		this.deleteComment = this.deleteComment.bind(this);
  };

  showComment() {
		// use jQuery to slide body of comment out or in 
	};

	editComment() {
		// this.props.editComment(this.props.comment.id);
	};
		
	deleteComment() {
		// this.props.deleteComment(this.props.comment.id);
	};


  render() {
		const { 
			user_id, 
			post_id, 
			body
		} = this.props.comment;

    return (
			<tr onClick={this.showComment}>
				<td>{user_id}</td>
				<td>{post_id}</td>
				<td>{body.slice(0,100)}</td>
				<td onClick={this.editComment}>Edit</td>
				<td onClick={this.deleteComment}>Delete</td>
			</tr>
    );
  }
}

export default Comment;