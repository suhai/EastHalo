import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Assignment from './Assignment';

const mapStateToProps = (state, ownProps) => ({
	// pull pull in assignemnts from store
});

const mapDispatchToProps = dispatch => ({
	// pull in dispatch actions for assignment
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Assignment));