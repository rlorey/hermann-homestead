import React, { Component } from 'react';
import Page from './Page';

class HitTheTown extends Component {
  render() {
    return (
      <Page title='Hit The Town'>
        <div id="HitTheTown">
          <img src={require('../assets/hit-the-town.jpg')}/>
          What to do?
          <ul>
            <li>Restaurants</li>
<li>El Ranchito Mexican Restaurant - https://www.facebook.com/Elranchitohermann701/?rf=111601885543467 This is one of our favorites.  We usually go at least once a week.  We love their salsa!  All the food comes highly recommended.  Jim’s favorite is the burrito grande and mine is more complicated.  I eat gluten free and plant based and I am pretty high maintenance when we go out to eat in terms of the modifications that I ask for with my meal.  The servers and cooks at El Ranchito are absolutely wonderful about making any changes that you want.  My favorite is the Veggie #2 with lettuce, no cheese sauce, and corn tortillas instead of flour.  Then I put a whole dish of salsa on top.  Yum!  Their margaritas are fantastic and the servers are incredibly friendly and accomodating! </li>

            <li>Antiquing and Shopping in Hermann</li>
            <li>Wineries</li>
            <li>Distilleries</li>
            <li>Riding on the Katy Trail</li>
            <li>Deutscheim Museum</li>
            <li>Hermann Farm</li>
            <li>Hermann Fitness Center</li>
            <li>Antiquing in Rosebud</li>
          </ul>
        </div>
        </Page>
    );
  }
}

export default HitTheTown;
