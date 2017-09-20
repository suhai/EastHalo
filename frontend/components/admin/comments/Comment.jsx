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
		
	};


  render() {
		const { 
			user_id, 
			post_id, 
			body
		} = this.props.Comment;

    return (
			<tr onClick={this.showComment}>
				<td>{user_id}</td>
				<td>{post_id}</td>
				<td>{body.slice(0,100)}</td>
			</tr>
    );
  }
}

export default Comment;