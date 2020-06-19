import React from 'react';

import Card from './Card';

const ExcerciseList = ({ data }) => (
  data.map(item => (
    <div key={item.id}>
      <Card
        rightColor={item.rightColor}
        leftColor={item.leftColor}
        image={item.img}
        title={item.title}
        description={item.description}
      />
    </div>
  ))
);

export default ExcerciseList;
