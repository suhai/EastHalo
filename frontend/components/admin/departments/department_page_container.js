import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Departments from './Departments';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Departments));