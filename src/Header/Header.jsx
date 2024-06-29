import React from 'react'
import "./Header.css"

function Header({ linkHeader, link1, link2, link3, link4 }) {
    return (
        <header className='header'>
            <img className='logo-header' src={linkHeader} alt='logo-header' />
            <nav className='navbar'>
                <ul className='navbar-list'>
                    <li><a href="#" className='navbar-links'>{link1}</a></li>
                    <li><a href="#" className='navbar-links'>{link2}</a></li>
                    <li><a href="#" className='navbar-links'>{link3}</a></li>
                    <li><a href="#" className='navbar-links'>{link4}</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
