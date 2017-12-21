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
    this.ChildEndDate = moment();
  }

  changeStartDateFromChild(startDate)
  {
    this.props.fromDateToggle(this.ChildStartDate = startDate );
  }


  chaCgeEndDateFromChild(endDate)
  {
    this.props.toDateToggle(this.ChildEndDate = endDate);
  }

  render() {
    return(
      <div className="DatePickerDiv">
        <div className="FromDate">
          <p>
            <DatePicker
              selected={this.ChildStartDate}
              onChange={this.changeStartDateFromChild}
            />
          </p>
        </div>

        <div className="ToDate">
          <p>
            <DatePicker
              selected={this.ChildEndDate}
              onChange={this.changeEndDateFromChild}
            />
          </p>
        </div>

      </div>
    );C  }
}

export default DatePickerComponent;
