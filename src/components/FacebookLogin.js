import React from 'react';
import { FacebookLogin } from 'react-facebook-login-component';

class Login extends React.Component{

  constructor (props, context) {
    super(props, context);
  }

  responseFacebook (response) {
    console.log(response);
    alert("Welcome "+response.name);
    sessionStorage.setItem("loginData", response);
  }

  render () {
    return (
        <FacebookLogin socialId="553425088411153"
                       language="en_US"
                       scope="public_profile,email"
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       fields="id,email,name"
                       version="v2.5"
                       className="facebook-login"
                       buttonText="Login With Facebook"/>
    );
  }

}

export default Login;
