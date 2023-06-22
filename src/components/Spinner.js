import React, { Component } from 'react';
import loading1 from './loading1.gif'

const Spinner=()=> {
  
    return (
      <div className='text-center my-5'>
        <img src={loading1} alt="loading1" />
      </div>
    );
  
}
export default Spinner