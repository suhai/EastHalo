import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchAllNews } from '../../actions/news_actions';
import SubHome from './SubHome';

const mapStateToProps = (state) => ({
	currentUser: state.session.currentUser,
	posts: state.posts,
	users: state.users,
	news: state.news
});

const mapDispatchToProps = dispatch => ({
	fetchAllNews: () => dispatch(fetchAllNews()),
	fetchUsers: () => dispatch(fetchUsers()),
	fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubHome);