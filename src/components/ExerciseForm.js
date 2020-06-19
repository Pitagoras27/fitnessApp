import React from 'react';

const ExerciseForm = ({ 
  title,
  description,
  img,
  leftColor,
  rightColor,
  onChange,
  handleSubmit
}) => (
  <form onSubmit={handleSubmit}>
    <div className='form-group'>
      <input
        type='text'
        className='form-control'
        placeholder='title'
        name='title'
        onChange={onChange}
        value={title}
      />
    </div>
    <div className='form-group'>
      <input
        type='text'
        className='form-control'
        placeholder='description'
        name='description'
        onChange={onChange}
        value={description}
      />
    </div>
    <div className='form-group'>
      <input
        type='text'
        className='form-control'
        placeholder='img'
        name='img'
        onChange={onChange}
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
          onChange={onChange}
          value={leftColor}
        />
      </div>
      <div className='col'>
        <input
          type='text'
          className='form-control'
          placeholder='rightColor'
          name='rightColor'
          onChange={onChange}
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
);

export default ExerciseForm;
