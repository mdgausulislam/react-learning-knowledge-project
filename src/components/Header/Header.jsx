import React from 'react';
import logo from '../../assets/image/profile.png';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <div>
                <h1>The Learning Knowledge</h1>
            </div>

            <div className='navbar-item'>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/blog">Blog</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
                <img src={logo} alt="" />
            </div>
        </nav>
    );
};

export default Header;