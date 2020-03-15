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
