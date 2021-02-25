import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      celsius: null,
      fahrenheit: null,
      random: null
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,      
    });
      if (e.target.name === 'celsius'){      
        this.setState({
          fahrenheit:(e.target.value * 9 / 5) + 32   
        });
    }
      if (e.target.name === 'fahrenheit'){        
        this.setState({
          celsius:(e.target.value - 32) * 5 / 9   
        });
    }
  };
  render(){
  return (
    <div className="App">
      <input
      type="number"
      name="celsius"
      placeholder="Enter Degrees in Celsius"
      onChange={this.handleChange}
      value={this.state.celsius} />
      <input
      type="number"
      name="fahrenheit"
      placeholder="Enter Degrees in fahrenheit"
      onChange={this.handleChange}
      value={this.state.fahrenheit} />
    </div>
  );
}
}

export default App;
