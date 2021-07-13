
import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Navbar() {
    const navStyle = {
        color: 'white'
    }
  return (
    <nav>
        <Link style={navStyle} to='/'>
        <h3>Logo</h3>
        </Link>
        <ul className="nav-links">
            <Link style={navStyle} to='/home'>
                <li>Home</li>
            </Link>
            <Link style={navStyle} to='/about'>
                <li>About</li>
            </Link>
            <Link style={navStyle} to='/contact'>
                <li>Contact</li>
            </Link>
            <Link style={navStyle} to='/products'>
                <li>products</li>
            </Link>
            <Link style={navStyle} to='/cart'>
                <li>Cart</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Navbar;
