import React, { Component } from 'react';
import Result from './ResultComponent';
import moment from 'moment';

//import css files here
import '../CSS/SubButtonStyling.css';

class Subtract extends Component
{
  constructor(props)
  {
    super(props);
    this.result = null;
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick()
  {
    if(this.props.fromDate == null || this.props.endDate == null )
    {
      alert("please select Both Dates");
    }
    else if (this.props.fromDate == this.props.endDate)
    {
      alert("You Entered The Same Dates, Please Select Different Dates");
    }
    else
    {
      var startDate = moment(this.props.fromDate);
      var endDate = moment(this.props.endDate);

      var numberOfDays = startDate.diff(endDate, 'days');

      alert("the result is " + numberOfDays);
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
