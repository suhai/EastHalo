import React from 'react';
import ReactDOM from 'react-dom';

class Friendship extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
		};
		this.deleteFriendship = this.deleteFriendship.bind(this);
	};

	deleteFriendship() {
		this.props.deleteFriendship(this.props.friendship.id)
	};


  render() {
		const { 
			id, 
			friender,
			friended
		} = this.props.friendship;

    return (
			<tr>
				<td>{id}</td>
				<td>{friender}</td>
				<td>{friended}</td>
				<td onClick={this.deleteFriendship}>Delete</td>
			</tr>
    );
  }
}

export default Friendship;