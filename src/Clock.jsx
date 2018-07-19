import React, {Component} from 'react';
import './App.css';

class Clock extends Component{
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
    console.log('this.props.deadline:', this.props.deadline);
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval( () => this.getTimeUntil(this.props.deadline), 1000)
  }

  leading0(num) {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));

    this.setState({days, hours, minutes, seconds});
    console.log(Date.parse(this.props.deadline));
  }

  render() {
    return (
      <div>
        <div className='Clock-days'>{this.leading0(this.state.days)} Days </div>
        <div className='Clock-hours'>{this.leading0(this.state.hours)} Hours </div>
        <div className='Clock-minutes'>{this.leading0(this.state.minutes)} Minutes</div>
        <div className='Clock-seconds'>{this.leading0(this.state.seconds)} Seconds </div>
      </div>
    )
  }
}

export default Clock;

/*
NOTES:

1- componentWillMount() { // this is called a 'live cicle hook' before the compotent render
2- return num < 10 ? '0' + num : num; // if the # is less than 10 return "'0' + num" if not return "num"
3- this.props.deadline refers to the 'deadline' of the parent component 'App.jsx' in this case
4- setInterval( () => this.getTimeUntil(this.props.deadline), 1000) // render app every 1 second
5- componentDidMount() {  // this is called a 'live cicle hook' after the compotent render

*/
