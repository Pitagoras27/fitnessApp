import React from 'react';
import ReactDOM from 'react-dom';

import Card from './components/Card';
import Welcome from './components/Welcome';
import 'bootstrap/dist/css/bootstrap.css';

const listCards = (
  <div>
    <Welcome name='Carlos' />
    <Card
      bgRight='#A74CF2'
      bgLeft='#617BFB'
      title='Technique Guides'
      description='Learn amazing street workout and calisthenics'
    />
  </div>
);
ReactDOM.render(listCards, document.getElementById('app'));
