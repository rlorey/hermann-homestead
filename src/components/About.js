import React, { Component } from 'react';
import Card from './Card';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="header-text">Hermann Homestead</div>
        <Card
          image="cabin.jpg"
          heading="Cabins"
          text=""
          href="cabins"
        />
        <Card
          image="yoga.jpg"
          heading="Yoga"
          text=""
          href="yoga"
        />
        <Card
          image="lumber.jpg"
          heading="Lumber"
          text=""
          href="lumber"
        />
        <Card
          image="hit-the-town.jpg"
          heading="Learn The History"
          text=""
          href="learn-the-history"
        />
        <Card
          image="hit-the-town.jpg"
          heading="Hit The Town"
          text=""
          href="hit-the-town"
        />
        <Card
          image="becky-and-jim.jpg"
          heading="Meet the Family"
          text=""
          href="meet-the-family"
        />
        <Card
          image="gallery.jpg"
          heading="Gallery"
          text=""
          href="gallery"
        />
      </div>
    );
  }
}

export default About;
