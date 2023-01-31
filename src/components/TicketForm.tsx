import React from 'react'
import SearchIcon from '../assets/svg/search.svg';
import '../styles/TicketForm.css'
import { DateInput, TextInput } from './FormInputs';

const TicketForm = () => {
  return (
    <form className='ticket-form'>
      <TextInput inputLabel='From' inputName='from' inputPlaceholder='Leaving from'/>
      <TextInput inputLabel='To' inputName='to' inputPlaceholder='Going to'/>
      <DateInput inputLabel='Depart' inputName='date' inputPlaceholder='Select a date'/>
      <button type="submit" id='submit-form'>
          <img src={SearchIcon} alt="search" />
          Search
      </button>
    </form>
  )
}

export default TicketForm