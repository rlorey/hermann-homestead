import React, { Component } from 'react';
import './Header.css';

const buzzwords = ["peace", "goat yoga", "getaway", "scenic view", "b&b"]; 

class Header extends Component {
  state = {
    buzzwordIndex: 0,
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ buzzwordIndex: (this.state.buzzwordIndex + 1) % buzzwords.length });
    }, 3.5 * 1000);
  } 

  render() {
    return (
      <div className="Header">
        <div className="hero">
          <div className="hero-text"> Find <br/> your </div>
          <div className="buzzword">{ buzzwords[this.state.buzzwordIndex] }</div>
        </div>
      </div>
    )
  };
}

export default Header;
