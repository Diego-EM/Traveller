import React, { useEffect, useContext, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { helperFetchTicketsData } from '../helpers/helperFetchTickets';
import { TicketsResults } from '../interfaces/SearchInterface';
import TicketContext from '../contexts/TicketContext';
import TicketForm from '../components/TicketForm';
import { TicketOverview } from '../components/TicketOverview';
import '../styles/ResultsPage.css';

const ResultsPage = () => {
  const [ticketResults, setTicketResults] = useState<TicketsResults>();
  const contextTicket = useContext(TicketContext);
  const noResultsRef = useRef<HTMLHeadingElement|null>(null);
  const navigate = useNavigate();
  
  const getBusTickets = helperFetchTicketsData('http://localhost:8080','POST');

  useEffect(() => {
    if(contextTicket?.ticketQuery)
      getBusTickets('/tickets',contextTicket?.ticketQuery)
        .then(data => {
          setTicketResults(data);
          const noResultsElement = noResultsRef.current
          if (data.results.length === 0)
            noResultsElement?.classList.remove('hidden')
          else
            noResultsElement?.classList.add('hidden')
        });
    else
      navigate('/');

  }, [contextTicket])

  return (
    <main id='search-main'>
      <div id='search-tickets'>
        <h1>Results of</h1>
        <TicketForm dark={true}/>
      </div>      
      <section id='ticket-overview'>
        {
          ticketResults?.results?.map((result,key) => 
            <TicketOverview
              key={key}
              leaving={result.leaving}
              depart={result.depart}
              date={result.date}
              available={result.available}
              estimatedTime={result.estimatedTime}
            />)
        }
        <h1 
        ref={noResultsRef}
        className='hidden'
        >
          No results found for {`${contextTicket?.ticketQuery?.from} to ${contextTicket?.ticketQuery?.to}`}
        </h1>
      </section>
    </main>
  )
}

export default ResultsPage;