import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/search_actions';
import Search from './search';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: query => dispatch(fetchUsers(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);