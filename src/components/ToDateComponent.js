//import js files
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Subtract from './SubtractionComponent';

//import css files
import 'react-datepicker/dist/react-datepicker.css';
import './CSS/ToDateStyling.css';



class ToDate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return(
      <div className="ToDate">
        <p>
           <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
           />
        </p>
        <p>
          <Subtract />
        </p>
      </div>
          );
  }
}

export default ToDate;
