import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideBar from './sidebar';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  users: state.users,
});

export default withRouter(
  connect(
    mapStateToProps
)(SideBar));