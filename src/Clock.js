import React, { Component } from 'react';
import './Clock.css';

export default class Clock extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      date : this.props.date,
    }
  }

  componentDidMount(){
    this.time = setInterval(this.tick, 1000);
  }
  
  componentWillUnmount(){
    clearInterval(this.time);
  }

  tick = () => {
    this.setState((state) => ({
      date : new Date().toLocaleTimeString(),
    }));
  }

  render() {
    return (
      <div className="clock">
        <h2 className="clock__header">{this.state.date}</h2>
      </div>
    )
  }
}
