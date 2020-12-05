import React, { Component } from 'react';
import {ABI} from './ABI';
import './App.css';
import Web3 from "web3";
import Voter from './Voter/Voter';

const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
web3.eth.defaultAccount = web3.eth.accounts[0];

const RemixContract = new web3.eth.Contract(
  ABI,
  "0xFF8D32b20DB18113c882bCda85b44faF8B6d57ED"
);



class App extends Component {

  state = {
    branch: '',
    roll_number: 0,
    votersList:null
  }

  handleChange = (evt) => {
    this.setState({
    [evt.target.name]: evt.target.value
    })
  }

  voteForCandidate = (evt) =>{

  }

  getCandidates = async (evt) =>{
    // const accounts = await web3.eth.getAccounts();
    RemixContract.methods.getCandidates(this.state.branch).call().then((result)=>{
      console.log(result);
      var voters = (
        <div>
          {result.map((roll, index) => {
            return <Voter
              click={() => this.voteForCandidate(roll)}
              roll={roll}
              key={roll} 
              />
          })}
        </div>
      );
      this.setState({
        votersList:voters
      })
    })
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
        <input name="roll_number" value={this.state.roll_number} type="number" placeholder="Enter your Roll Number" onChange={this.handleChange}/>
        <input name="branch" value={this.state.name} type="text" placeholder="Enter your branch" onChange={this.handleChange}/>
        <button style={style} onClick={this.getCandidates}>Submit</button>
      </div>
    );
  }
}

export default App;
