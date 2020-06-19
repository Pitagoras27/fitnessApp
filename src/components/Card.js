import React from 'react';

import bgCicle from '../images/circles.png';
import emptyImg from '../images/empty.png'
import './styles/Card.css';

const Card = ({ rightColor, leftColor, image, title, description }) => {
  return(
    <div className='card mx-auto Fitness-Card'
      style={{
        backgroundImage: `url(${bgCicle}),
        linear-gradient(to right,
        ${rightColor || ' #A74CF2'}, ${leftColor || '#617BFB' })`
      }}>
      <div className='card-body'>
        <div className='row center'>
          <div className='col-6'>
            <img src={image || emptyImg} alt='fit' />
          </div>
          <div className='col-6 Fitness-Card-Info'>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
