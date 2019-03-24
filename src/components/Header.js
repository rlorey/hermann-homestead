import React, { Component } from 'react';
import './Header.css';

const buzzwords = ['peace', 'goat yoga', 'getaway', 'scenic view', 'b&b'];

function SeeMoreArrow() {
  if (window.innerWidth > 700)
    return (
      <img className="SeeMoreArrow" src={require('../assets/down-arrow.png')} />
    );

  return null;
}

class Header extends Component {
  state = {
    buzzwordIndex: 0,
  };

  componentDidMount() {
    // Cycle through buzzwords
    setInterval(() => {
      this.setState({
        buzzwordIndex: (this.state.buzzwordIndex + 1) % buzzwords.length,
      });
    }, 3.5 * 1000);
  }

  render() {
    return (
      <div className="Header">
        <div className="hero">
          <div className="hero-text">
            {' '}
            Find <br /> your{' '}
          </div>
          <div className="buzzword">{buzzwords[this.state.buzzwordIndex]}</div>

          {/* <SeeMoreArrow /> */}
        </div>
      </div>
    );
  }
}

export default Header;
