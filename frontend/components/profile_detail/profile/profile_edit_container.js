import { connect } from 'react-redux';
import { editUser } from '../../../actions/user_actions';
import ProfileEditForm from './ProfileEditForm';

const mapStateToProps = (state) => ({
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	editUser: (data, id) => dispatch(editUser(data, id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProfileEditForm);