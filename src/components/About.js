import React, { Component } from 'react';
import Card from './Card';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="header-text">Hermann Homestead</div>
        <Card
          image="goats.jpg"
          heading="Something about goats"
          text="Pet our goats. Let them crawl on you. Heck, crawl on them too. Yoga!"
        />
        <Card
          image="cabin.jpg"
          heading="Cabins"
          text="Reserve your very own rustic cabin for a romantic weekend. Or if you just 
          want to sh*t in the woods."
        />
        <Card
          image="wurst.jpg"
          heading="Hit the town"
          text="Explore our town - scenic Hermann, MO. Sample the local cuisine, spend an evening at
          one of the area's wineries, or even meet the Wurstmeister, Hermann's premier sausage-based
          celebrity."
        />
      </div>
    );
  }
}

export default About;
