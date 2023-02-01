import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import BusLogo from '../assets/svg/logo_bus.svg';
import '../styles/MainNav.css';

const MainNav = () => {
  const [navScrolled, setNavScrolled] = useState(false);
  const [inTicketsRoute, setInTicketsRoute] = useState<boolean>(false);
  const location = useLocation();  

  const navIsScrolled = (): boolean => window.scrollY > 0;
  const activeRoute = (route: string): boolean => window.location.pathname === route

  useEffect(() => {
    window.addEventListener('scroll',()=>setNavScrolled(navIsScrolled));
  }, []);

  useEffect(() => {
    setInTicketsRoute(activeRoute('/tickets'));
  }, [location.pathname])
  

  return (
    <header
    className = {`main-header ${navScrolled || inTicketsRoute ? "scrolled" : ""}`}>
        <nav>
            <a href="/" id='logo'>
                <img src={BusLogo} alt="Bus" />
                Traveller
            </a>
            <ul className='nav-links'>
              {
                inTicketsRoute ?
                <li><a href="/">Home</a></li>
                :
                <>
                  <li><a href="#about-us">About us</a></li>
                  <li><a href="#our-services">Services</a></li>
                </>
              }
            </ul>
        </nav>
    </header>
  )
}

export default MainNav;