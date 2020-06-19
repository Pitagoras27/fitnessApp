import React, { Component } from 'react';

class ExcerciseNew extends Component {
  state = {}

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    const { title, description, rightColor, img, leftColor } = this.state;
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='title'
              name='title'
              onChange={(e) => this.handleChange(e)}
              value={title}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='description'
              name='description'
              onChange={(e) => this.handleChange(e)}
              value={description}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='img'
              name='img'
              onChange={(e) => this.handleChange(e)}
              value={img}
            />
          </div>
          <div className='form-row'>
            <div className='col'>
              <input
                type='text'
                className='form-control'
                placeholder='leftColor'
                name='leftColor'
                onChange={(e) => this.handleChange(e)}
                value={leftColor}
              />
            </div>
            <div className='col'>
              <input
                type='text'
                className='form-control'
                placeholder='rightColor'
                name='rightColor'
                onChange={(e) => this.handleChange(e)}
                value={rightColor}
              />
            </div>
          </div>

          <button
            type='submit'
            className='btn btn-primary'
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
};

export default ExcerciseNew;
