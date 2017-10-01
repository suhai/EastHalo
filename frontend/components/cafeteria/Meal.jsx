import React from 'react';
import ReactDOM from 'react-dom';

class Meal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.showMeal = this.showMeal.bind(this);
  };


  showMeal() {
		window.location.hash = `cafeteria/meals/${this.props.meal.id}`;
	};


  render() {
		const { 
			name, 
			ingredients, 
			price, 
			image_url, 
		} = this.props.meal;

    return (
			<div className="img-gallery" onClick={this.showMeal}>
				<div className="gallery">
					<img src={image_url} alt={name} />
					<div className="desc">
						<div>
							<p>{name}: ${price}</p>
						</div>
					</div>
				</div>
				<hr/>
			</div>
    );
  }
}

export default Meal;
