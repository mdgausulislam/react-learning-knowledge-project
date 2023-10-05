import React from 'react';
import './Header.css';
import logo from '/profile.png'

const Header = () => {
    return (
        <nav>
            <h1>The Learning knowledge</h1>
            <div className="navbar">
                <a href="/home">Home</a>
                <a href="/blog">Blog</a>
                <a href="/aboutUs">About Us</a>
                <a href="/inventory">Inventory</a>
                <img src={logo} alt="" />
            </div>
        </nav>
    );
};

export default Header;