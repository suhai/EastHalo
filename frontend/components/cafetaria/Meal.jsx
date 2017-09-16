import React from 'react';
import ReactDOM from 'react-dom';

class Meal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.showMeal = this.showMeal.bind(this);
  }


  showMeal() {
		// const id = this.props.meal.id;
		window.location.hash = `cafetaria/${this.props.meal.id}`;
	};


  render() {
		const { 
			name, 
			ingredients, 
			price, 
			image_url, 
		} = this.props.meal;

    return (
			<tr onClick={this.showMeal}>
				<td>{name}</td>
				<td>{price}</td>
				<td>{ingredients}</td>
				<td>{image_url}</td>
			</tr>
    );
  }
}

export default Meal;