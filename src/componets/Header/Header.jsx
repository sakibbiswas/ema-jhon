import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className="">
                {/* a*4[href={$}]{$} */}
                <a href='/Order'>Order</a>
                <a href='/Order Review'>Order Review</a>
                <a href='/Inventory'>Inventory</a>
                <a href='/Manage Inventory'>Manage Inventory</a>

            </div>

        </nav>

    );
};



export default Header;