import React, { Component } from 'react';
import {ABI} from './ABI';
import './App.css';
import Web3 from "web3";

const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
web3.eth.defaultAccount = web3.eth.accounts[0];

const RemixContract = new web3.eth.Contract(
  ABI,
  "0x593621a8e0eF9f4E5cC6A15cC5DfDc20f474d710"
);


class App extends Component {

  state = {
    name: '',
    roll_number: null,
    show_voters_list:false
  }

  handleChange = (evt) => {
    this.setState({
    [evt.target.name]: evt.target.value
    })
  }

  getCandidates = (evt) =>{

  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Welcome to Election Portal. Enter the details below</h1>
        <input name="roll_number" type="number" placeholder="Enter your Roll Number" onChange={this.handleChange}/>
        <input name="name" type="text" placeholder="Enter your name" onChange={this.handleChange}/>
        <button style={style} onClick={this.getCandidates}>Submit</button>
      </div>
    );
  }
}

export default App;
