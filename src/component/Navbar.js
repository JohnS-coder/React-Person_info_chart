import React from 'react';
import PropTypes from "prop-types";

const Navbar = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <hr/>
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