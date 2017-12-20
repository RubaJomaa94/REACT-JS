import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FromDate from './components/FromDateComponent';

//import images here
import logo from './logo.svg';

//import css files here
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p>
        Start date: <FromDate />
        </p>
      </div>
    );
  }
}

export default App;
