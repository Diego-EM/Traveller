import React, { FC, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import SearchIcon from '../assets/svg/search.svg';
import TicketContext from '../contexts/TicketContext';
import { SearchTicket } from '../interfaces/SearchInterface';
import { DateInput, TextInput } from './FormInputs';
import '../styles/TicketForm.css'

const TicketForm: FC<{dark?: boolean}> = ({dark}) => {

  const navigate = useNavigate();
  const location = useLocation();
  const ticketContext = useContext(TicketContext);

  const handdleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { from, to, dateStart } = Object.fromEntries(formData);
    let unixDateStart = Date.parse(dateStart as string);
    const queryBody: SearchTicket = {
      from: from as string,
      to: to as string,
      dateStart: unixDateStart/1000,
      dateEnd: (unixDateStart/1000) + 86400
    }
    ticketContext?.handdleTicketQuery(queryBody);

    if (location.pathname !== "/tickets")
      navigate('/tickets');
  }

  return (
    <form className='ticket-form' onSubmit={(e)=>handdleSubmit(e)}>
      <TextInput dark={dark} inputLabel='From' inputName='from' inputPlaceholder='Leaving from'/>
      <TextInput dark={dark} inputLabel='To' inputName='to' inputPlaceholder='Going to'/>
      <DateInput dark={dark} inputLabel='Depart' inputName='dateStart' inputPlaceholder='Select a date'/>
      <button type="submit" id='submit-form'>
          <img src={SearchIcon} alt="search" />
          Search
      </button>
    </form>
  )
}

export default TicketForm