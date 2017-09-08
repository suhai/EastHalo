import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cafetaria from './Cafetaria';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Cafetaria));