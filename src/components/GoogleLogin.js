import React from 'react';
import { GoogleLogin } from 'react-google-login-component';

class Login extends React.Component{

  constructor (props, context) {
    super(props, context);
  }

  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var googleId = googleUser.getId();

    console.log({ googleId });
    console.log({accessToken: id_token});
    console.log("LOGGED IN FAMALAM, WE'RE IN!!!");
  }

  render () {
    return (
        <GoogleLogin socialId="266867071011-484olagiajdkg9k99qt1e431djngp206.apps.googleusercontent.com"
                     className="google-login"
                     scope="profile"
                     fetchBasicProfile={false}
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"/>
    );
  }

}

export default Login;
