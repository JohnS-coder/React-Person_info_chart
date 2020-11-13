import React, { Component } from 'react'
 

const UserContext = React.createContext();
//Provier, Consumer

const reducer = (state,action) => {
    switch(action.type) {
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
        
        case "ADD_USER":
            return {
                ...state,
                users : [...state.users,action.payload] 
            }
        default:
             return state
    }
}

export class UserProvider extends Component {
    state ={
        users : [
          {
              id: "uniq-0",
              name: "Selami",
              department: "Data-Science",
              salary: 2000
          },
          {
              id: "uniq-1",
              name: "Mustafa",
              department: "Data-Science",
              salary: 4200
          },
          {
              id: "uniq-2",
              name: "Elif",
              department: "FS-Science",
              salary: 6200
          }
      ],
      dispatch : (action) => {
          this.setState(state => reducer(state,action));
      }
      }
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
const UserConsumer = UserContext.Consumer;
export default UserConsumer;