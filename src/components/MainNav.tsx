import React, { useState, useEffect } from 'react'
import BusLogo from '../assets/svg/logo_bus.svg';
import '../styles/MainNav.css';

const MainNav = () => {
  const [navScrolled, setNavScrolled] = useState(false);

  const navIsScrolled = (): boolean => window.scrollY > 0;

  useEffect(() => {
    window.addEventListener('scroll',()=>setNavScrolled(navIsScrolled));
  }, []);

  return (
    <header className={`main-header ${navScrolled ? "scrolled" : ""}`}>
        <nav>
            <a href="/" id='logo'>
                <img src={BusLogo} alt="Bus" />
                Traveller
            </a>
            <ul className='nav-links'>
                <li><a href="/">About us</a></li>
                <li><a href="/">Services</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNav;