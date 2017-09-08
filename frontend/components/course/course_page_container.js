import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Course from './Course';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Course));