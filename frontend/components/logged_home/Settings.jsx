import React from 'react';

const SettingsPage = (props) => (
	<div className='attention-page'>
		<h2>ATTENTION PLEASE!</h2>
		<hr/>
		<code>
			You are currently not an Admin.<br/><br/>
			To access Admin privileges,<br/><br/>
			Please set the 'is_admin' field<br/><br/>
			in your Profile (right top corner of this page)
			to 'TRUE'.<br/><br/>
			To checkout what other User type privileges<br/><br/>
			are available, just change your User type<br/><br/>
			in the Settings to either a Student,<br/><br/>
			a Professor, or a DEFAULT User.<br/><br/>
		</code>
	</div>
);

export default SettingsPage;
