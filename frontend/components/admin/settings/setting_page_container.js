import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Setting from './Setting';

const mapStateToProps = (state, ownProps) => ({
	// Dummy placeholder for now
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Setting));