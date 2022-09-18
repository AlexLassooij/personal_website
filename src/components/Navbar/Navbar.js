import React from 'react'
import { useState } from 'react'
import { Link, animateScroll } from 'react-scroll'
import { useScrollPosition } from '../../hooks/useScrollPosition'


import './Navbar.css'

function Navbar() {

    const [isShown, setIsShown] = useState(false);
    const scrollPosition = useScrollPosition();
    return (
    <div
        onMouseEnter={() => {
            console.log('is shown')
            setIsShown(true)}}
        onMouseLeave={() => setIsShown(false)}
        className={scrollPosition > 800 && !isShown ? 'navbar-container contracted' : 'navbar-container'}>
        <div className={scrollPosition > 800 && !isShown ? 'navbar-content hide-navbar-content' : 'navbar-content'}>
            <div>
                <p className='navbar-item' onClick={() => {
                animateScroll.scrollToTop()
            }}>
                Alex Lassooij
                </p>
            </div>
            <div className='navbar-item-container'>
                <Link to='bio_container' smooth={true} duration={1000} className='navbar-item'>
                    About
                </Link>
            </div>
            <div className='navbar-item-container'>
                <Link to='experience_container' smooth={true} duration={1000} className="navbar-item">
                Experience
                </Link>
            </div>
            <div className='navbar-item-container'>
                <Link to='projects' smooth={true} duration={1000} className="navbar-item">
                Projects
                </Link>
            </div>
        </div>
    </div>
    )
}

export default Navbar