import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <div
          className="image"
          style={{ backgroundImage: 'url(' + require('../assets/' + this.props.image) + ')' }}
        />
        <div className="heading">{this.props.heading}</div>
        <div className="text">{this.props.text}</div>
      </div>
    );
  }
}

export default Card;
