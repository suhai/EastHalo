import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchNews, fetchAllNews} from '../../actions/news_actions';
import NewsShow from './NewsShow';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	all_news: state.news,
});

const mapDispatchToProps = dispatch => ({
	fetchNews: id => dispatch(fetchNews(id)),
	fetchAllNews: () => dispatch(fetchAllNews()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsShow));