import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
      </div>
    );
  }
}

export default Home;
