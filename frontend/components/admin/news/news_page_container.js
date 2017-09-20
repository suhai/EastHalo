import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createNews, fetchAllNews, deleteNews, editNews } from '../../../actions/news_actions';
import AllNews from './AllNews';

const mapStateToProps = (state, ownProps) => ({
	news: state.news,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	createNews: data => dispatch(createNews(data)),
	fetchAllNews: () => dispatch(fetchAllNews()),
	editNews: id => dispatch(editNews(id)),
  deleteNews: id => dispatch(deleteNews(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(AllNews));