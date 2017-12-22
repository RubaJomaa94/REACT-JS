import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

// import css files
import 'react-datepicker/dist/react-datepicker.css';
import '../css/DateComponentStyling.css';

class DatePickerComponent extends React.Component {
  constructor (props) {
    super(props);

    this.childStartDate = moment();
    this.childEndDate = moment();
    this.changeStartDateFromChild = this.changeStartDateFromChild.bind(this);
    this.changeEndDateFromChild = this.changeEndDateFromChild.bind(this);
  }

  changeStartDateFromChild = (startDate) =>
  {
    this.childStartDate = startDate;
    this.props.fromDateToggle(this.childStartDate);
  }

  changeEndDateFromChild = (endDate) =>
  {
    this.childEndDate = endDate;
    this.props.toDateToggle(this.childEndDate);
  }

  render() {
    return(
      <div className="DatePickerDiv">
        <div className="FromDate">
          <p>
            <DatePicker
              selected={this.childStartDate}
              onChange={this.changeStartDateFromChild}
            />
          </p>
        </div>

        <div className="ToDate">
          <p>
            <DatePicker
              selected={this.childEndDate}
              onChange={this.changeEndDateFromChild}
            />
          </p>
        </div>
      </div>
    );
  }
}

export default DatePickerComponent;
