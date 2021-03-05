import React from 'react';
import logo from '../Header/logo.png'
import '../Header/Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
            <div className="search">
                <input type="text" className='form-control'/>
                <button>Search</button>
            </div>
        </div>
    );
};

export default Header;