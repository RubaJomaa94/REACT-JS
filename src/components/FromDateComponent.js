import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

// import css files
import 'react-datepicker/dist/react-datepicker.css';
import '../CSS/FromDateStyling.css';

class DatePickerComponent extends React.Component {
  constructor (props) {
    super(props);
    this.ChildStartDate = moment();
    this.childEndDate = moment();
  }

  changeStartDateFromChild(startDate)
  {
    this.props.fromDateToggle(this.ChildStartDate = startDate );
  }


  changeEndDateFromChild(endDate)
  {
    this.props.toDateToggle(this.childEndDate = endDate);
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
