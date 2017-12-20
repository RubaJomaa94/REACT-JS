import React, { Component } from 'react';
import Result from './ResultComponent';

//import css files here
import './CSS/SubButtonStyling.css';

class Subtract extends Component
{
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return (
      <div className="SubButton">
        <button> Subtract </button>
        <Result />
      </div>
    );
  }
}

export default Subtract;
