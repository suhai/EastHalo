import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchRandomUsers } from '../../actions/user_actions';
import SideBar from './sidebar';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  fetchRandomUsers: (query) => dispatch(fetchRandomUsers(query))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBar));
