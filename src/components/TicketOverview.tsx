import { FC } from 'react';
import BusIcon from '../assets/svg/icon_bus.svg';
import { BusTicket } from '../interfaces/SearchInterface';
import '../styles/TicketOverview.css';

export const TicketOverview: FC<BusTicket> = ({leaving, depart, date, available, estimatedTime}) => {
  const departHour = new Date(parseInt(date)).getHours();
  const departMinutes = new Date(parseInt(date)).getMinutes();
  const arrivesHour = new Date(parseInt(date)).getHours() + (parseInt(estimatedTime)/3600);
  const estimatedHours = parseInt(estimatedTime) / 3600;

  return (
    <div className='ticket-card'>
        <figure className='card-content card-bus'>
            <img src={BusIcon} alt="Bus" />
            <figcaption>{`Duration ${estimatedHours}:00 hrs`}</figcaption>
        </figure>
        <div className='card-content card-trip'>
            <div>
              <span className='trip-title'>Depart</span>
              <span className='trip-description'>{`${departHour}:${departMinutes} hrs`}</span>
            </div>
            <div>
              <span className='trip-title'>Arrives</span>
              <span className='trip-description'>{`${arrivesHour}:${departMinutes} hrs`}</span>
            </div>
        </div>
        <div className='card-content card-trip'>
          <div>
              <span className='trip-title'>From</span>
              <span className='trip-description'>{leaving}</span>
            </div>
            <div>
              <span className='trip-title'>To</span>
              <span className='trip-description'>{depart}</span>
          </div>
        </div>
        <div className='card-content card-ticket'>
          <span className='ticket-available'>{`${available} available`}</span>
          <p className='ticket-price'>MXM$<span>250</span></p>
          <button className='ticket-button'>Select</button>
        </div>
    </div>
  )
}