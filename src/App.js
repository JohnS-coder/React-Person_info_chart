import { Component } from 'react';
// import './App.css';
import Navbar from "./component/Navbar";
// import User from "./component/User";
import Users from "./component/Users";
import AddUser from "./component/AddUser";

class App extends Component {
  

  
  render(){
  return (
    <div className="container">
      <h1 className="header">Burası React App component </h1>
      <Navbar title= "User info: "/>
      <AddUser />
      <Users 
        
      />  
    </div>
    );
  }
}

export default App;
