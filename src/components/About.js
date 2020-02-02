import React, { Component } from 'react';
import Card from './Card';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="header-text">Hermann Homestead</div>
        <Card
          image="becky-and-jim.png"
          heading="Meet the Family"
          text=""
        />
        <Card
          image="yoga.png"
          heading="Yoga"
          text=""
        />
        <Card
          image="cabin.png"
          heading="Cabins"
          text=""
        />
        <Card
          image="lumber.png"
          heading="Lumber"
          text=""
        />
        <Card
          image="gallery.png"
          heading="Gallery"
          text=""
        />
      </div>
    );
  }
}

export default About;
