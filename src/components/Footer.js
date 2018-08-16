import React from 'react';
import ReactDOM from 'react-dom';
//import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const Footer = () => (
    <footer>
	<div id='demo' />
	<p>
        Created by <a href="https://www.rmit.edu.au/" rel="noopener noreferrer" target="_blank" title="Linkedin Profile">Richard
        Stallman's School of Dance</a> |  <a href='https://www.rmit.edu.au/utilities/connect-with-us'> Connect With Us </a></p><br />
	<p>Copyright © 2018 RMIT University</p>
    </footer>
);

const responseGoogle = (response) => {
  console.log(response);
}
 
ReactDOM.render(
  <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />,
  document.getElementById('googleButton')
);


/*ReactDOM.render(
  <FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />,
  document.getElementById('demo')
);*/


export default Footer;
