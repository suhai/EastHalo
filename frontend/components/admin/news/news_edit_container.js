import { connect } from 'react-redux';
import { fetchNews, fetchAllNews, editNews } from '../../../actions/news_actions';
import NewsEditForm from './NewsEditForm';

const mapStateToProps = (state) => ({
	news: state.news,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	fetchAllNews: () => dispatch(fetchAllNews()),
	fetchNews: (id) => dispatch(fetchNews(id)),
	editNews: (data, id) => dispatch(editNews(data, id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewsEditForm);