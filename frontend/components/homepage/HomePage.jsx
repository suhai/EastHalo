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
            <h1 className="">EastHalo University</h1>
            <div className='placeholder-text'>
              <h3>MIXING COLORS</h3>
							<div className='home-page-para'>
								<p>As Summer Fades into Fall, Biology Professor Sam Porter Takes His Class Through The Inner Workings of Chlorophyll. Previous Studies Had Shown That very little Could Be Deduced By This Very Importmant Pigment In Plants.
								</p>
							</div>
            </div> 
          </div>
        </main>
        
        <section className="homepage-bottom">
					<div>
						<div className="jumbotron">
							<div className="container">
								<h1>INTELLECTUAL IMMERSION</h1>
							</div>
						</div>
						<div className="supporting">
							<div className="container">
								<div className="row">
									<div className="col-md-4">
										<img className="read" src={apple} height={128} width={128} />
										<h2>Communicate</h2>
										<p>Explore your passions and dive deep within your community to now others.</p>
									</div>
									<div className="col-md-4">
										<img className="read" src={books} height={128} width={128} />
										<h2>Learn</h2>
										<p>Learn from others and let your creativity drive you and the world around you.</p>
									</div>
									<div className="col-md-4">
										<img className="read" src={bell} height={128} width={128} />
										<h2>Share</h2>
										<p>Pass on your knowledge to the world and make a positve change</p>
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
							<h3>Where Are The Makers of Civilization?</h3>
							<a className="btn btn-lg btn-default" href="#">Learn More Here</a>
						</div>
					</div>
					<div className="section">
						<div className="container">
							<div className="row">
								<div className="col-md-4">
									<h4>Art</h4>
									<ul>
										<li>Ancient Chest Unearthed in Spain</li>
										<li>Photographer Andrew Gallup's Discovery</li>
									</ul>
								</div>
								<div className="col-md-4">
									<h4>Science</h4>
									<ul>
										<li>The Sun and The Moon Are Actually Twins</li>
										<li>Tomatoes From Professor Kanter's Garden</li>
									</ul>
								</div>
								<div className="col-md-4">
									<h4>Politics</h4>
									<ul>
										<li>Senator Mooose on Rampage Again</li>
										<li>What Do Parliamentarians in Avalonia Do?</li>
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