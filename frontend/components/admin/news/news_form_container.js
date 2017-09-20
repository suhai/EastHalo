import { connect } from 'react-redux';
import { createNews, fetchAllNews } from '../../../actions/news_actions';
import NewsForm from './NewsForm';

const mapStateToProps = (state) => ({
	news: state.news,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	createNews: (data) => dispatch(createNews(data)),
	fetchAllNews: () => dispatch(fetchAllNews())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewsForm);