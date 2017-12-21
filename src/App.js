import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import DatePickerComponent from './components/FromDateComponent';
import Subtract from './components/SubtractionComponent';
import Result from './components/ResultComponent';

//import images here
import logo from './logo.svg';

//import css files here
import './App.css';


class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      startDate: moment(),
      endDate : moment()
    };
    this.myCallBackForStartDate = this.myCallBackForStartDate.bind(this);
    this.myCallBackForStartDate = this.myCallBackForStartDate.bind(this);
  }

  myCallBackForStartDate = (startDateFromDatePicker) => {
    this.setState ({startDate: startDateFromDatePicker});
  }

  myCallBackForEndDate = (endDateFromDatePicker) => {
    this.setState ({endDate: endDateFromDatePicker });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p>
        <DatePickerComponent fromDateToggle= {this.myCallBackForStartDate} toDateToggle= {this.myCallBackForEndDate}/>
        </p>
        <p>
          <Subtract fromDate={this.state.fromDate} endDate={this.state.endDate}/>
        </p>
        <Result />
      </div>
    );
  }
}

export default App;
