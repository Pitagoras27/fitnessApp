import React, { Component } from 'react';

import ExerciseForm from '../components/ExerciseForm';
import Card from '../components/Card';
import '../components/styles/ExerciseNew.css';
import Loading from '../components/Loading';
import ErrorServer from './500';

class ExcerciseNew extends Component {
  state = {
    form: {
      title: '',
      description: '',
      img: '',
      rightColor: '',
      leftColor: ''
    },
    loading: false,
    error: '',
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({loading: true });

    try {
      const bodyPost = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.form),
      };
  
      const fetchData = await fetch('http://localhost:8000/api/exercises', bodyPost);
      const responsePost = await fetchData.json();

      this.setState({
        form: responsePost,
        loading: false,
        error: '',
      });

    } catch (error) {
      this.setState({
        loading: false,
        error: 'No se pudo cargar la información, favor de intentar más tarde'
      });
    }
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
    const { form, loading, error } = this.state;
    console.log(loading, '<<<--')
    if(loading) return <Loading />
    if(error) {
      return <ErrorServer />
    } else {
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
      );
    }
  };
}

export default ExcerciseNew;
