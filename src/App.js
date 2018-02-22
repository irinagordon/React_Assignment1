import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'tmangual1'
  };


  changeUsername = (event) => {
    //console.log('Was Clicked!');
    this.setState( {
      username: event.target.value
     } )
  }


  render() {
    const styles = {
      backgroundColor: 'black',
      font: 'inherit',
      padding: '8px',
      color: 'pink'
    };


    return (
      <div className="App">
      <h1 style={styles}> Assignment 1 </h1>
      <UserInput
        username={this.state.username}
        changed={this.changeUsername}/>
      <UserOutput
        username={this.state.username}/>
      </div>
    );
  }
}

export default App;
