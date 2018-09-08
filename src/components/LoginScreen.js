import React from 'react';

class LoginScreen extends React.Component
{

	constructor (props, context) 
	{
		super(props, context);
	}

	render(props) 
	{
		let name = sessionStorage.getItem("loginData");

		if (name == null)
			name.name = "Please login!";

		return (
			<div>
				<h1> Hello { name.name } </h1>
			</div>
		);
	}

}

export default LoginScreen;
