import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProfileDetail from './ProfileDetail';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileDetail));