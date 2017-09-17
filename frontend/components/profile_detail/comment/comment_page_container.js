import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Comment from './Comment';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Comment));