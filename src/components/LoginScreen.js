import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin  from 'react-facebook-login';

class LoginScreen extends React.Component
{

	constructor()
	{
		super();
		this.responseFacebook = this.responseFacebook.bind(this);
		this.responseGoogle = this.responseGoogle.bind(this);
    this.state = {
      name: '',
			loggedIn: false,
    };
	}



	responseFacebook(response) {
    console.log(response);
    sessionStorage.setItem("loginData", response);
		this.setState({
			name: response.name,
			loggedIn: true,
		});
		this.props.nameHandler(this.state.name);
  }

	responseGoogle(googleUser) {
		if (!googleUser.isSignedIn())
			return;

		var googleName = googleUser.getBasicProfile().getName();


    console.log({ googleName });
		this.setState({
			name: googleName,
			loggedIn: true,
		});

		this.props.nameHandler(this.state.name);
  }

	loginFailed()
	{
		return
	}

	render(props)
	{

		let printName = this.props.name;

		var FontAwesome = require('react-fontawesome');

		if (this.state.loggedIn)
			return (
				<div>
					<h3> Hello { printName } </h3>
				</div>
			)
		else
			return (
				<div>
				<br/>
					<FacebookLogin
	           appId="553425088411153"
	           fields="name,email,picture"
	           scope="public_profile"
						 icon="fa-facebook"
						 onFailure={this.loginFailed}
	           callback={this.responseFacebook} />
					 <br/>
					 <GoogleLogin clientId="266867071011-484olagiajdkg9k99qt1e431djngp206.apps.googleusercontent.com"
												scope="profile"

												fetchBasicProfile={true}
												onSuccess={this.responseGoogle}>

												<FontAwesome name='google' />
												<span> Login with Google</span>
					</GoogleLogin>
				</div>
			);
	}

}

export default LoginScreen;