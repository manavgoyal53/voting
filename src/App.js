import React, { Component } from 'react';
import {ABI} from './ABI';
import logo from './logo.svg';
import './App.css';
import Web3 from "web3";

const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
web3.eth.defaultAccount = web3.eth.accounts[0];

const RemixContract = new web3.eth.Contract(
  ABI,
  "0x593621a8e0eF9f4E5cC6A15cC5DfDc20f474d710"
);


console.log(RemixContract);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
