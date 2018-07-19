import  React, { Component } from 'react';
import './App.css';
import Clock from './Clock'
import { Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'July 17, 2018',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }

  render() {
    // console.log(this.state.deadline);
    return (
      <div className='App'>
        <div className='App-title'>
          Countdown to {this.state.deadline}
        </div>
        <Clock
          deadline={this.state.deadline}
        />
        <Form inline>
          <FormControl
            className='deadline-input'
            placeholder='Enter new date'
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <Button bsStyle="primary" bsSize="" onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
      </div>
      )
  }
}

export default App;
/*
//notes:

1- here we are using a ES6 anonymous function in the <button> tag
2- using just this.changeDeadline will cause loops within the app
3- we use 'event.target.value' to have access just to what the user types within the input field
4- <Form inline> //is the same as iline={true}
5- constructor(props) { //adding 'state' to this component. 'props' refers to inherited data from a parent
6-  deadline={this.state.deadline} pass current application deadline to the clock component

*/
