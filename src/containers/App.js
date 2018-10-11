import React, {Component} from 'react';
import './App.css';

import {Provider} from 'react-redux';


import Shelf from '../components/shelf/Shelf';
import Footer from '../components/Footer';
import LoginScreen from '../components/LoginScreen';
import FloatCart from './../components/floatCart/FloatCart';

import store from '../store';
import Corner from '../components/rmitLogo/Corner';


class App extends Component
{
  constructor()  {
    super();
    this.handleData = this.handleData.bind(this);
    this.state = {
      userName: 'Please login lol'
    };
  }

  handleData(data) {
    this.setState({
      userName: data
    });
  }

    render() {
	return (
	  <Provider store={store}>
		<div className="App" >
  		<Corner/>

      <div>
          <LoginScreen name={this.state.userName} nameHandler={this.handleData}/>
  		    <main>
  			       <Shelf/>
  		    </main>
        </div>
  		  <Footer/>
  		  <FloatCart/>
		  </div>
	    </Provider>
	)
    }
}

export default App;
