import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import Header from '../partials/Header';

class Home extends Component {
  render() {
    return (
      <div className="App">
      
        <Header/>
        <p className="App-intro">
          AirApp uses browser navigation to pinpoint your location
        </p>
        
        <Link className="understand-button" to='/flights'>I understand and accept</Link>
        
        <Link className="understand-button" to='/sorry'>I understand and decline</Link>
        
        
      </div>
    );
  }
}

export default Home;
