import React from 'react';

import Card from './Card';

const ExcerciseList = ({ data }) => (
  data.map(item => (
    <div key={item.id}>
      <Card {...item}/>
    </div>
  ))
);

export default ExcerciseList;
