// Programmed by Blaise Saunders
// s3561722 - s3561722@student.rmit.edu.au
// Last updated 09/09/2018


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
		this.loginFailed = this.loginFailed.bind(this);
    this.state = {
      name: '',
			loggedIn: false,
			havePic: false,
			picUrl: true,
    };
	}



	responseFacebook(response) {
		sessionStorage.setItem("loginData", response);
		this.setState({
			name: response.name,
			loggedIn: true,
			havePic: true,
			picUrl: response.picture.data.url,
		});
		this.props.nameHandler(this.state.name);
		}

	responseGoogle(googleUser) {
		if (!googleUser.isSignedIn())
			return;

		var googleName = googleUser.getBasicProfile().getName();
		var picUrl = googleUser.getBasicProfile().getImageUrl();


		console.log({ googleName });
		this.setState({
			name: googleName,
			loggedIn: true,
			havePic: true,
			picUrl: picUrl,
		});

		this.props.nameHandler(this.state.name);
  }

	loginFailed()
	{
		console.log("Login override");
		this.setState({
			name: "TESTUSER",
			loggedIn: true,
			havePic: true,
			picUrl: "https://google.com",
		});
		this.props.nameHandler("nemmjeff");
		return
	}

	render(props)
	{

		let printName = this.props.name;

		var FontAwesome = require('react-fontawesome');

		if (this.state.loggedIn)
		{
			if (this.state.havePic)
			{
				return (
					<div class='picBox'>
						<img src={ this.state.picUrl } alt="User Profile" class='profilePic' height='60px' />
						<span>  Now logged in as { printName } </span>
					</div>
				)
			}
			else {
				return (
					<div>
						<h3> Now logged in as { printName } </h3>

						<div>
						<h3 class='recommended'> For you  { printName } </h3>
						</div>

					</div>
				)
			}
		}
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
