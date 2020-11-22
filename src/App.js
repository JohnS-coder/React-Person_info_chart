import { Component } from 'react';
// import './App.css';
import Navbar from "./component/Navbar";
// import User from "./component/User";
import Users from "./component/Users";
import AddUser from "./component/AddUser";
import {BrowserRouter as Router,Route, Switch,} from "react-router-dom";
import NotFound from "./component/NotFound";

// const Home = () => {
//   return(
//     <h3>Home Page</h3>
//   )
// }

// const About = () => {
//   return(
//     <h3>About</h3>
//   )
// }
class App extends Component {
  
  
  render(){

  return (
    <Router>
      <div className="container">
        <Navbar title= "User info: "/>
        <hr/>
        <Switch>
          <Route exact path = "/" component = {Users} />
          <Route exact path = "/Add" component = {AddUser} />
          <Route component = {NotFound} />
        </Switch>
       
        {/* <AddUser />
        <Users />   */}

      
        {/* <Route exact path="/" component = {Home} />        
        <Route exact path="/about" render={About} />    */}
      </div>
    </Router>
      
        
    );
  }
}

export default App;
