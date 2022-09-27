import React, { useRef, useEffect } from 'react'
import { Link } from 'react-scroll'
import './StickyNav.css'

const StickyNav = () => {

    const nav = useRef();

    useEffect(() => {
        window.addEventListener('scroll', addClass);
    }, []);

    const addClass = () => {
        if (nav.current) {
            if (window.pageYOffset > nav.current.offsetTop) {
                nav.current.classList.add('sticky');
            } else {
                nav.current.classList.remove('sticky');
            }
        }
    }

    return (
        <div className="Navbar" id="Navbar" ref={nav}>
            <div><Link activeClass="active" spy={true} smooth={true} offset={0} duration={500} to="Main">Home</Link></div>
            <div><Link activeClass="active" spy={true} smooth={true} offset={0} duration={500} to="About">About</Link></div>    
            <div><Link activeClass="active" spy={true} smooth={true} offset={0} duration={500} to="Products">Products</Link></div>
            <div><Link activeClass="active" spy={true} smooth={true} offset={0} duration={500} to="Contact">Contact</Link></div>
        </div>
    )
}

export default StickyNav