import React, { Component } from 'react';

import Card from '../components/Card';
import Welcome from '../components/Welcome';

class Excercises extends Component {
  render() {
    return (
      <div>
        <Welcome name='Carlos' />
        <Card
          bgRight='#A74CF2'
          bgLeft='#617BFB'
          title='Technique Guides'
          description='Learn amazing street workout and calisthenics'
        />
      </div>)
  }
}

export default Excercises;
