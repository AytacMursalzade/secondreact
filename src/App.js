import React, { Component } from 'react';
import Users from './components/CardApp/Users';




class App extends Component {

  state = {
    

    users : [
      {
        id : 1,
        name : "Doe Jone",
        salary : "5000$",
        department : "Anka"
      },
      {
        id : 2,
        name : "Alex",
        salary : "3000$",
        department : "Anka"
      },
      {
        id : 3,
        name : "Doned",
        salary : "6000$",
        department : "Anka"
      }
    ]
  }


  render() {
    return (
      <>
       <Users users ={this.state.users}  />
      </>
    );
  }
}

export default App;
