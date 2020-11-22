import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/add">Add User</Link>
                </li>
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "User info default"
}

export default Navbar;