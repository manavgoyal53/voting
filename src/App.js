import React, { Component } from 'react';
import { ABI } from './ABI';
import './App.css';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { FormHelperText } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import makeFunctional from './UseStyles.js';
import VoterList from './VoterList';

import Web3 from "web3";
import Voter from './Voter/Voter';

const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
const RemixContract = new web3.eth.Contract(ABI, "0xbb43742982Aa95404907E9485f609555e793AcDF");

class App extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    branch: '',
    roll_number: -1,
    validated: false,
    errorMsgBr: '',
    errorMsgRn: '',
    votersList: null,
    setOpen: false,
    open: false,
  }

  // handleChange = (evt) => {
  //   this.setState({
  //     [evt.target.name]: evt.target.value
  //   })
  // }

  // voteForCandidate = async (roll_number) => {
  //   let accounts = await web3.eth.getAccounts();
  //   RemixContract.methods.vote(roll_number, this.state.roll_number)
  //     .send({ from: accounts[3] }).then((receipt) => {
  //       this.setState({
  //         branch: '',
  //         roll_number: 0,
  //         votersList: null
  //       })
  //       return (
  //         toast.success(`You have successfully voted for ${roll_number}`, {
  //           closeButton: false
  //         })
  //       )
  //     }).catch((err) => {
  //       return (
  //         toast.error(err, {
  //           closeButton: false
  //         })
  //       )
  //     })
  // }

  getResult = () => {
    RemixContract.methods.winningCandidate(this.state.branch).call({ from: "0xe4f69f58539f3e6E6f6E5e24f811087d0045Ca21" }).then((result) => {
      console.log(result);
      var segment = (
        <div>
          <p>{result[0]}</p>
          <p>{result[2]}</p>
        </div>
      );
      this.setState({
        votersList: segment
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  getCandidates = async (evt) => {
    // this.setState({ validated: true });
    // if (this.state.roll_number < 0) {
    //   this.setState({ errorMsgRn: "Invalid Roll No.", validated: false });
    // }
    // if (this.state.branch == '') {
    //   this.setState({ errorMsgBr: "Please select a Branch", validated: false });
    // }
    RemixContract.methods.getCandidates(this.state.branch).call().then((result) => {
      console.log(result);
      var voters = (
        <Container className={this.props.classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {result.map((candidate, index) => {
              return <Voter
                click={() => this.voteForCandidate(candidate[0])}
                roll={candidate[0]}
                name={candidate[2]}
                key={candidate[0]}
              />
            })}
          </Grid>
        </Container>
      );
      this.setState({
        votersList: voters
      })
    })
  }

  // function for adding a voter through admin
  add_voter = () => {

  }

  handleClickOpen = () => {
    this.setState({ setOpen: true });
  };

  handleClose = () => {
    this.setState({ setOpen: false });
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={this.props.classes.title}>
              Voting App
            </Typography>
            <div className={this.props.classes.grow} />
            <div className={this.props.classes.formControl}>
              <Button variant="outlined" onClick={this.getResult} color="inherit">View Result</Button>
            </div>
            <div className={this.props.classes.formControl}>
              <Button variant="outlined" onClick={this.handleClickOpen} color="inherit">Show Admin</Button>
              <Dialog open={this.state.setOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Admin Panel</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Enter details of the voter below to authorize:
                  </DialogContentText>
                  <TextField
                    autoFocus
                    required
                    className={this.props.classes.formControl}
                    margin="dense"
                    id="roll"
                    label="Roll Number"
                    type={"number"}
                  />
                  <TextField
                    autoFocus
                    required
                    className={this.props.classes.formControl}
                    margin="dense"
                    id="addr"
                    label="Addresss"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={this.handleClose} color="primary">
                    Add
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={this.props.classes.heroContent}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Voting App
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Welcome to Election Portal. Enter the details below:
              </Typography>
              <div className={this.props.classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <FormControl className={this.props.classes.formControl}>
                      <TextField required id="standard-basic" label="Roll No." type={"number"} helperText={this.state.errorMsgRn} onChange={(event) => {
                        this.setState({ roll_number: event.target.value, errorMsgRn: '' });
                      }} />
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl className={this.props.classes.formControl}>
                      <InputLabel id="demo-simple-select-label">Branch</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={(event) => {
                          this.setState({ branch: event.target.value, errorMsgBr: '' });
                        }}
                      >
                        <MenuItem value={"ECE"}>ECE</MenuItem>
                        <MenuItem value={"ME"}>ME</MenuItem>
                        <MenuItem value={"CSE"}>CSE</MenuItem>
                      </Select>
                      <FormHelperText>{this.state.errorMsgBr}</FormHelperText>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={1} justify="center">
                  <Button variant="contained" color="primary" onClick={this.getCandidates}>
                    Confirm
                  </Button>
                </Grid>
              </div>
            </Container>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default makeFunctional(App);
