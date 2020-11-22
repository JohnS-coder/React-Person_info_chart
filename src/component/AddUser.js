import Axios from 'axios';
import React, { Component } from 'react'
import posed from "react-pose";
import UserConsumer from "../context";

// var uniqid = require("uniqid");  Used for generating uniq id before api usage..
const Animation = posed.div({
    visible: {opacity: 1, applyAtStart:{display:"block"}},
    hidden: {opacity: 0, applyAtEnd: {display: "none"}}
});
class AddUser extends Component {
    state = {
        visible : false,
        name : "",
        department : "",
        salary : 0
    }

    changeVisibilty = () =>{
        this.setState({
            visible : !this.state.visible
            
        })
        
    }
    changeInput = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    addUser =  async(dispatch,e) => {
        e.preventDefault();
        const {name,department,salary} = this.state;
        const newUser={
            // id: uniqid(),       here we used generated id by uniqid() func..
            name : name,
            department : department,
            salary : salary
        }
        const response = await Axios.post("http://localhost:3004/users",newUser)
        dispatch({type : "ADD_USER",payload : response.data});
    }
    render() {
        const {visible,name,department,salary} = this.state;
        return (
            <UserConsumer>
                {    
                    value => {
                        const {dispatch} = value;
                        return (
                            <div className="col-md-8 mb-4">
                                <button 
                                    onClick = {this.changeVisibilty} 
                                    className="btn btn-dark btn-block mb-2" 
                                    style={{backgroundColor:"#ba2d65"}}
                                >
                                    { visible ? "Hide-Form" : "Show Form"}
                                </button>
                                <Animation pose={this.state.visible ? "visible" : "hidden"}>
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Add User Form</h4>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={this.addUser.bind(this,dispatch)}>
                                                <div className="form-group">
                                                    <label htmlFor="name" >Name</label>
                                                    <input 
                                                    type ="text"
                                                    name ="name"
                                                    id ="id"
                                                    placeholder ="Enter Name.."
                                                    className ="form-control"
                                                    value = {name}
                                                    onChange = {this.changeInput}
                                                    />
                
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="department" >Department</label>
                                                    <input 
                                                    type="text"
                                                    name="department"
                                                    id="id"
                                                    placeholder="Enter Department.."
                                                    className="form-control"
                                                    value= {department}
                                                    onChange = {this.changeInput}
                                                    />
                
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="salary" >Salary</label>
                                                    <input 
                                                    type="text"
                                                    name="salary"
                                                    id="id"
                                                    placeholder="Enter Salary.."
                                                    className="form-control"
                                                    value= {salary}
                                                    onChange = {this.changeInput}
                                                    />
                
                                                </div>
                                                <button className="btn btn-danger btn-block" type="submit">Add User</button>
                                            </form>
                                        </div>
                                    </div>
                                </Animation>
                            </div>
                        )

                    }
                }
            </UserConsumer>
        )
    }
}

export default AddUser;