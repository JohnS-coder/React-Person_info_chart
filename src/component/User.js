import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserConsumer from "../context";


class User extends Component{
    static defaultProps = {
        name:"default name",
        department: "default department",
        salary: 0
    }

    state ={
        isVisible: false
        }
    onNameClicked = (e)=> {
            // alert("Merhaba")
            this.setState({
                isVisible: !this.state.isVisible
                })
            
    }
    
    ondeleteUser =(dispatch,e) => {
        const {id} = this.props;
        //consumer dispatch gelecek
        dispatch({type: "DELETE_USER", payload: id});
    } 
    render() {
        const {name,department,salary} = this.props;
        const {isVisible} = this.state;
        
        return( 
        <UserConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return (
                        <div className="col-md-8 mb-4" >
                            <div className="card">
                                <div className="card-header d-flex justify-content-between" onClick={this.onNameClicked}>
                                    <h4 className="d-inline" >{name}</h4>
                                    <i onClick={this.ondeleteUser.bind(this,dispatch)} className="fa fa-trash" style={{fontSize:30, cursor: "pointer"}} ></i>
                                </div>
                                {
                                    isVisible ?  <div className="card-body">
                                    <p className="card-text">{department}</p>
                                    <p className="card-text"> {salary} </p>
            
                                </div> : null
                                }
                               
                            </div>
                        </div>
                    )
                }
            }
        </UserConsumer>)
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
    id : PropTypes.number.isRequired
}
//Yukarıda static olarak da tanımlanır burada da olur
// User.defaultProps = {
//     name:"default name",
//     department: "default department",
//     salary: 0
// }

export default User;