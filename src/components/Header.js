import React from 'react';
import './Header.css'; 

const header = () => {
    return (
        <nav className="App-Logo" alt="logo">
            <img src="../images/ironhack-logo.svg" alt="ironhack-logo"/>
            <img src="../images/menu-top.svg" alt="menu-top"/>
        </nav>
    );
}

export default header;