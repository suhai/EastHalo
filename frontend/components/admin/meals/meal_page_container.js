import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Meals from './Meals';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Meals));