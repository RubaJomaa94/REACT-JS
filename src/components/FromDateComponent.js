import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import ToDate from './ToDateComponent';

// import css files
import 'react-datepicker/dist/react-datepicker.css';
import './CSS/FromDateStyling.css';

class FromDate extends React.Component {
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
      <div className="FromDate">
        <p>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
        </p>
        <p>
          End date: <ToDate />
        </p>
      </div>
    );
  }
}

export default FromDate;
