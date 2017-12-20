import React, { Component } from 'react';

//import css files here
import './CSS/ResultStyling.css';


class Result extends Component
{
  constructor(props)
  {
    super(props);
  }
  render() {
    return (
      <div className="resultDiv">
        <p>
          <label className="result"> Result is  </label>
        </p>
      </div>
    );
  }
}

export default Result;
