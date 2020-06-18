import React, { Component } from 'react';

import fittnesImage from '../images/exercise.png';
import bgCicle from '../images/circles.png';
import './styles/Card.css';

class Card extends Component {
  render () {
    const { bgRight, bgLeft, title, description } = this.props;
    return(
      <div className='card mx-auto Fitness-Card'
        style={{ background: `url(${bgCicle}) linear-gradient(to right, ${bgRight} ${bgLeft})` }}>
        <div className='card-body'>
          <div className='row center'>
            <div className='col-6'>
              <img src={fittnesImage} alt='fit' />
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
}

export default Card;
