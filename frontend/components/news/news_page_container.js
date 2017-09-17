import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { createSingleNews, fetchAllNews, deleteSingleNews, editSingleNews } from '../../actions/news_actions';
import AllNews from './AllNews';

const mapStateToProps = (state, ownProps) => ({
	// news: state.news,
});

const mapDispatchToProps = dispatch => ({
	// createSingleNews: data => dispatch(createSingleNews(data)),
	// fetchAllNews: () => dispatch(fetchAllNews()),
	// editSingleNews: id => dispatch(editSingleNews(id)),
  // deleteSingleNews: id => dispatch(deleteSingleNews(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(AllNews));