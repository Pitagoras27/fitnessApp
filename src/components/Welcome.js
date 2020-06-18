import React from 'react';

import './styles/Welcome.css';
const Welcome = ({ name }) => (
  <div className="container">
    <div className='Fitness-User-Info'>
      <h1>Hello {name}</h1>
      <p>Let´s workout to get someone gains!</p>
    </div>
  </div>
);

export default Welcome;
