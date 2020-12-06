import React, { Component } from 'react';
import {ABI} from './ABI';
import './App.css';
import Web3 from "web3";
import Voter from './Voter/Voter';

const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
// web3.eth.defaultAccount = web3.eth.getAccounts();

const RemixContract = new web3.eth.Contract(ABI,"0xcFDF423f7F7FdF97801E29A3eBd5f3B353A63d93");



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
          {result.map((candidate, index) => {
            return <Voter
              click={() => this.voteForCandidate(candidate[0])}
              roll={candidate[0]}
              name={candidate[2]}
              key={candidate[0]} 
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
        <select onChange={this.handleChange} placeholder="Select your branch" name="branch">
          <option>Choose your option</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="ME">ME</option>
        </select>
        <button style={style} onClick={this.getCandidates}>Submit</button>
        {this.state.votersList}
      </div>
    );
  }
}

export default App;
