import React, { Component } from 'react';
import './index.css'

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      minutes: 0,
      hours: 0,
      seconds: 0,
      time_up: ""
    }
    this.x = null;
    this.deadline = null;
  }

  count = () => {
    let now = new Date().getTime();
    let t = this.deadline - now;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    this.setState({ days, hours, minutes, seconds });
    if(t < 0) {
      clearInterval(this.x);
      this.setState({
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        time_up: "TIME IS UP"   
      })
    }
  }

  componentDidMount() {
    this.deadline = new Date("jan 1, 2020 00:00:01").getTime();
    this.x = setInterval(this.count, 1000);
  }
  
  
  render() {
    const { days, hours, minutes, seconds, time_up } = this.state;
    return (
      <div className="countdown">
        <h1 className="countdown__title">Countdown Clock</h1>
        <div id="clockdiv" className='countdown__timers'>
          <div className="countdown__timers__ele">
            <span className="days countdown__timers__ele--times" id="day">{days}</span>
            <div className="smalltext">Days</div>
          </div>
          <div className="countdown__timers__ele">
            <span className="days countdown__timers__ele--times" id="day">{hours}</span>
            <div className="smalltext">Hours</div>
          </div>
          <div className="countdown__timers__ele">
            <span className="days countdown__timers__ele--times" id="day">{minutes}</span>
            <div className="smalltext">Minutes</div>
          </div>
          <div className="countdown__timers__ele">
            <span className="days countdown__timers__ele--times" id="day">{seconds}</span>
            <div className="smalltext">Seconds</div>
          </div>
        </div>
        <p id="demo">{time_up}</p>
      </div>
    )
  }
}

export default Countdown;