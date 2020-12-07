import React, { Component } from 'react';
import {ABI} from './ABI';
import './App.css';
import { MDBBtn, MDBInput,MDBRow, MDBCol, MDBContainer,toast,ToastContainer } from "mdbreact";
import Web3 from "web3";
import Voter from './Voter/Voter';

const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
const RemixContract = new web3.eth.Contract(ABI,"0x18eB3232467F0665BBdc5f5F962E005da11270c3");



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

  voteForCandidate = async (roll_number) => {
    let accounts = await web3.eth.getAccounts();
    RemixContract.methods.vote(roll_number,this.state.roll_number)
    .send({from:accounts[5]}).then((receipt)=>{
      return(
      toast.success(`You have successfully voted for ${roll_number}`, {
        closeButton: false
      })
      )
    }).catch((err)=>{
      return(
        toast.error(err, {
          closeButton: false
        })
        )
    })
  }

  getResult = () => {
    RemixContract.methods.winningCandidate(this.state.branch).call().then((result)=>{
      console.log(result);
    }).catch((err)=>{
      console.log(err)
    })
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
    return (
      <div className="App">
        <MDBContainer>
        <br></br>
        <h1>Welcome to Election Portal. Enter the details below</h1>
        <br></br>
        <MDBRow>
          <MDBCol className="mb-5">
                <MDBInput name="roll_number" required value={this.state.roll_number} type="number" label="Enter your Roll Number" onChange={this.handleChange}/>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol className="mb-5">
            <select onChange={this.handleChange} name="branch" required>
              <option>Choose your branch</option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="ME">ME</option>
            </select>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
          <MDBBtn color="primary" onClick={this.getCandidates}>Vote</MDBBtn>
          </MDBCol>
          <MDBCol>
          <MDBBtn color="primary" onClick={this.getResult}>View Result</MDBBtn>
          </MDBCol>
        </MDBRow>
        <ToastContainer hideProgressBar={true} newestOnTop={true} autoClose={5000}/>
        {this.state.votersList}
        </MDBContainer>
      </div>
    );
  }
}

export default App;
