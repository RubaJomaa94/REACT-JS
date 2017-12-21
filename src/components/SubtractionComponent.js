import React, { Component } from 'react';
import Result from './ResultComponent';

//import css files here
import '../CSS/SubButtonStyling.css';

class Subtract extends Component
{
  constructor(props)
  {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick()
  {
    if(this.props.startDate == null || this.props.endDate == null)
    {
      alert("please select Two Dates");
    }
    else
    {
      alert("the result is ");
    }
  }
  render()
  {
    return (
      <div className="SubButton">
        <button onClick={this.handleClick} > Subtract </button>
      </div>
    );
  }
}

export default Subtract;
