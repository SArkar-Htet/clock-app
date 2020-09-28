import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

const date = new Date().toLocaleTimeString();
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Clock date={date}/>
      </div>
    )
  }
}
