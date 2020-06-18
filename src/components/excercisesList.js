import React from 'react';

import Card from '../components/Card';

const ExcerciseList = ({ data }) => (
  data.map(item => (
    <div key={item.id}>
      <Card
        bgRight={item.rightColor}
        bgLeft={item.leftColor}
        bgImage={item.img}
        title={item.title}
        description={item.description}
      />
    </div>
  ))
);

export default ExcerciseList;
