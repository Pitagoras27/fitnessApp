import React, { Component } from 'react';

import ExerciseForm from '../components/ExerciseForm';
import Card from '../components/Card';
import '../components/styles/ExerciseNew.css';

class ExcerciseNew extends Component {
  state = {
    form: {
      title: '',
      description: '',
      image: '',
      rightColor: '',
      leftColor: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
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
