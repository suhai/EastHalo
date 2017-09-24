import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Modal from 'react-modal';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import { values } from 'lodash';
import Footer from '../footer/Footer';
import PublicNavigation from '../PublicNavigation';
let apple = 'https://res.cloudinary.com/swy/image/upload/v1506277383/junctionimg4_cvh23a.svg';
let bell = 'https://res.cloudinary.com/swy/image/upload/v1506277383/junctionimg3_p364nk.svg';
let books = 'https://res.cloudinary.com/swy/image/upload/v1506277383/junctionimg2_on7siw.svg';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, authRoute: '' };
    this.openSignUp = this.openSignUp.bind(this);
    this.openSignIn = this.openSignIn.bind(this);
    this.closeModal = this.closeModal.bind(this);
		this.swy_info = this.swy_info.bind(this);
		this.renderMessageForm = this.renderMessageForm.bind(this);
  };

  componentWillMount() {
    Modal.setAppElement('body');
  };

  openSignIn(e) {
    e.preventDefault();
    this.setState({ isOpen: true, authRoute: 'signin' });
  };

  openSignUp(e) {
    e.preventDefault();
    this.setState({ isOpen: true, authRoute: 'signup' });
  };

  swy_info(e) {
    e.preventDefault();
    window.location.hash = '/swy_info'
	};
	
	renderMessageForm(e) {
    e.preventDefault();
    window.location.hash = '/enquiries/messageform'
  };

  closeModal(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.setState({ isOpen: false, authRoute: '' });
  }


  render() {
    let authRoute;
    if (this.state.authRoute === 'signin') {
      authRoute = <LoginPage errors={this.props.errors} login={this.props.login}/>;
    } else {
      authRoute = <SignupPage errors={this.props.errors}
        signup={this.props.signup}
        login = {this.props.login}/>;
    }

    return (
      <div className='homepage'>
        <PublicNavigation />
        <Modal overlayClassName="homepage-modal-overlay"
          className='homepage-modal'
          onRequestClose={this.closeModal}
          isOpen={this.state.isOpen}
          contentLabel="Modal">
          {authRoute}
        </Modal>

				<div className='home-page-button'>
					<ul>
						<li>
							<button onClick={this.openSignUp} className='signup'>New User</button>
						</li> 
						<li>
							<button onClick={this.openSignIn} className='login'>User LogIn</button>
						</li> 
					</ul>
				</div>

        <main className='homepage-info'>	
          <div className='homepage-description'>
            <h2 className="">EastHalo University</h2>
            <div className='placeholder-text'>
              <h3>SITE UNDER CONSTRUCTION</h3>
              <p>Welcome to the University of EastHalo</p>
            </div> 
          </div>
        </main>
        
        <section className="homepage-bottom">
					<div>
						<div className="jumbotron">
							<div className="container">
								<h1>Meet Junction</h1>
							</div>
						</div>
						<div className="supporting">
							<div className="container">
								<div className="row">
									<div className="col-md-4">
										<img className="read" src={apple} height={128} width={128} />
										<h2>Read</h2>
										<p>Discover new stories and follow your favorite writers.</p>
									</div>
									<div className="col-md-4">
										<img className="read" src={books} height={128} width={128} />
										<h2>Write</h2>
										<p>Create stories about our world, or entirely new worlds.</p>
									</div>
									<div className="col-md-4">
										<img className="read" src={bell} height={128} width={128} />
										<h2>Talk</h2>
										<p>Join the conversation by talking with your favorite readers and your fans.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="download">
							<div className="container">
								<button onClick={this.renderMessageForm} className="btn btn-default">
									<span>Send Enquiries Here</span>
								</button>
							</div>
						</div>
					</div>
        </section>

				<div>
					<div className="section banner">
						<div className="container">
							<h3>Always have the answer to "What's for dinner?"</h3>
							<a className="btn btn-lg btn-default" href="#">Learn More</a>
						</div>
					</div>
					<div className="section">
						<div className="container">
							<div className="page-header">
								<h3>Newest Contributions</h3>
							</div>
							<div className="row">
								<div className="col-md-4">
									<h4>Breakfast</h4>
									<ul>
										<li>Maple French Toast</li>
										<li>Rolled Oats with Berries</li>
									</ul>
								</div>
								<div className="col-md-4">
									<h4>Dinner</h4>
									<ul>
										<li>Black Bean Stuffed Peppers</li>
										<li>Pesto Pasta with Spinach</li>
									</ul>
								</div>
								<div className="col-md-4">
									<h4>Dessert</h4>
									<ul>
										<li>German Chocolate Cake</li>
										<li>Hazelnut Tiramisu</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
      </div>
    );
  }
}

export default HomePage;