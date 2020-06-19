import React, { Component } from 'react';

import ExerciseForm from '../components/ExerciseForm';
import Card from '../components/Card';
import '../components/styles/ExerciseNew.css';

class ExcerciseNew extends Component {
  state = {
    form: {
      title: '',
      description: '',
      img: '',
      rightColor: '',
      leftColor: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    const bodyPost = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.form),
    };

    const fetchData = await fetch('http://localhost:8000/api/exercises', bodyPost);
    const responsePost = await fetchData.json();

    console.log(responsePost);
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  render() {
    const { form } = this.state;
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm align-card-form'>
            <Card {...form} />
          </div>
          <div className='col-sm'>
            <ExerciseForm
              { ...form }
              onChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    )
  }
};

export default ExcerciseNew;
