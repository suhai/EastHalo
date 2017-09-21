import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Modal from 'react-modal';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import { values } from 'lodash';
import PublicNavigation from '../PublicNavigation';

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
							<button onClick={this.openSignUp} className='signup'>Create Account</button>
						</li> 
						<li>
							<button onClick={this.openSignIn} className='login'>Demo LogIn</button>
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

					<div>
						<button onClick={this.swy_info} className='submit'>Some Info</button>
						<button onClick={this.renderMessageForm} className='edit'>Contact Us</button>
					</div>
        </main>
        
        <section className="homepage-bottom">
          <div>
					<h3>I AM YET TO DECIDE WHAT TO PUT IN THIS AREA.</h3>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;