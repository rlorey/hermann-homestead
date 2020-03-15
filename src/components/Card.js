import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <a id="card-link" href={this.props.href}>
        <div className="Card">
          <div
            className="image"
            style={{ backgroundImage: 'url(' + require('../assets/' + this.props.image) + ')' }}
          />
          <div className="heading">{this.props.heading}</div>
          <div className="text">{this.props.text}</div>
        </div>
      </a>
    );
  }
}

export default Card;
