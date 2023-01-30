import React from 'react'
import SearchIcon from '../assets/svg/search.svg';
import '../styles/TicketForm.css'

const TicketForm = () => {
  return (
    <form className='ticket-form'>
        <label htmlFor="">From
          <input type="text" placeholder='Leaving from'/>
        </label>
        <label htmlFor="">To
          <input type="text" placeholder='Going to'/>
        </label>
        <label htmlFor="">Depart
          <input type="date" placeholder='Select a date'/>
        </label>
        <label htmlFor="">Passengers
          <input type="select" />
        </label>
        <button type="submit" id='submit-form'>
            <img src={SearchIcon} alt="search" />
            Search
        </button>
    </form>
  )
}

export default TicketForm