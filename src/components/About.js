import React, { Component } from 'react';
import Card from './Card';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="header-text">Hermann Homestead</div>
        <Card
          image="becky-and-jim.jpg"
          heading="Meet the Family"
          text=""
        />
        <Card
          image="yoga.jpg"
          heading="Yoga"
          text=""
        />
        <Card
          image="cabin.jpg"
          heading="Cabins"
          text=""
        />
        <Card
          image="lumber.jpg"
          heading="Lumber"
          text=""
        />
        <Card
          image="gallery.jpg"
          heading="Gallery"
          text=""
        />
      </div>
    );
  }
}

export default About;
