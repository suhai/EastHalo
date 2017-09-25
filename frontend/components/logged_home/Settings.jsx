import React from 'react';

const SettingsPage = (props) => (
	<div className='attention-page'>
		<h2>ATTENTION PLEASE!</h2>
		<hr/>
		<p>You Are Currently Not An Admin</p>
		<p>To Access Admin Privileges</p>
		<p>Please Set The 'is_admin' Field</p> 
		<p>In Your Profile (right top corner of this page)</p>
		<p>To 'TRUE'.</p>
		<p>To Checkout What Other User Type Privileges</p>
		<p>Are Available, Just Change Your User Type</p>
		<p>In The Settings To Either a Student</p>
		<p>A Professor, or a DEFAULT User</p>
	</div>
);

export default SettingsPage;
