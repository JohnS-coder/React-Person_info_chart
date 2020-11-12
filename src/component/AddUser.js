import React, { Component } from 'react'

class AddUser extends Component {
    render() {
        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header">
                        <h4>Add User Form</h4>
                    </div>
                    <div className="card-body">
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="name" >Name</label>
                                <input 
                                type="text"
                                name="name"
                                id="id"
                                placeholder="Enter Name.."
                                class="form-control"
                                />

                            </div>
                            <div className="form-group">
                                <label htmlFor="department" >Department</label>
                                <input 
                                type="text"
                                name="department"
                                id="id"
                                placeholder="Enter Department.."
                                class="form-control"
                                />

                            </div>
                            <div className="form-group">
                                <label htmlFor="salary" >Salary</label>
                                <input 
                                type="text"
                                name="salary"
                                id="id"
                                placeholder="Enter Salary.."
                                class="form-control"
                                />

                            </div>
                            <button class="btn btn-danger btn-block" type="submit">Add User</button>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default AddUser;