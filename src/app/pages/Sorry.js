import React, { Component } from 'react';
import '../App.css';
import Header from '../partials/Header';

class Sorry extends Component {
  render() {
    return (
      <div className="App">
      
        <Header/>
        <p className="App-intro">
          Sorry we need your location to show flights :(
        </p>
        
      </div>
    );
  }
}

export default Sorry;