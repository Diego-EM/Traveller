import React from 'react';
import TicketForm from '../components/TicketForm';
import FoodServiceIcon from '../assets/svg/food.svg';
import FastTimeIcon from '../assets/svg/fasttime.svg';
import EntertaimentIcon from '../assets/svg/screen.svg';
import WifiIcon from '../assets/svg/wifi.svg';
import BusIcon from '../assets/svg/icon_bus.svg';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <main>
      <section id="ticket-search">
        <div className='ticket-bg'></div>
        <div className='ticket-container'>
          <h1>Discover new experiences in México
            Tickets for your next bus trip</h1>
          <TicketForm/>
        </div>
      </section>
      <section id="about-us">
        <div className='content-container'>
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Autem quas totam ullam, tenetur tempora recusandae perferendis vitae
            voluptas inventore eos aliquid magnam temporibus!
            Minus, voluptatum. Ratione corporis voluptate error optio.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Autem quas totam ullam, tenetur tempora recusandae perferendis vitae
            voluptas inventore eos aliquid magnam temporibus!
            Minus, voluptatum. Ratione corporis voluptate error optio.</p>
        </div>
        <img src={BusIcon} alt="" className='bg-bus'/>
      </section>
      <section id="our-services">
          <h2>Our services</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae autem necessitatibus impedit, atque, veritatis dolor,
            consequatur nam incidunt repudiandae nobis magni. Molestiae odit
            necessitatibus aspernatur amet doloribus sequi voluptate quaerat.</p>
          <div className='content-container'>
            <figure className='service-icon'>
              <img src={FastTimeIcon} alt="Food service" />
              <figcaption>Fast trips</figcaption>
            </figure>
            <figure className='service-icon'>
              <img src={WifiIcon} alt="Free WIFI" />
              <figcaption>WIFI</figcaption>
            </figure>
            <figure className='service-icon'>
              <img src={FoodServiceIcon} alt="Food service included" />
              <figcaption>Food included</figcaption>
            </figure>
            <figure className='service-icon'>
              <img src={EntertaimentIcon} alt="Entertaiment included" />
              <figcaption>Entertaiment</figcaption>
            </figure>
          </div>
      </section>
    </main>
  )
}

export default HomePage;