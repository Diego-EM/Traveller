import React, { useState, useEffect, useRef, FC } from 'react'
import { helperFetchTicketsData } from '../helpers/helperFetchTickets';
import LocationIcon from '../assets/svg/location.svg';
import '../styles/FormInputs.css'

interface InputProps {
    inputLabel: string,
    inputName: string,
    inputPlaceholder: string,
    dark?: boolean
}

export const TextInput: FC<InputProps> = ({inputLabel, inputName, inputPlaceholder, dark=false}) => {
    const URL = 'http://localhost:8080';
    const getBusTicketData = helperFetchTicketsData(URL,'POST');

    const [placeInput, setPlaceInput] = useState({});
    const [placesList, setPlacesList] = useState<string[]>([]);

    const textInput = useRef<HTMLInputElement>(null)
    const dataList = useRef<HTMLUListElement>(null);
    
    const setPlaces = (e: React.ChangeEvent<HTMLInputElement>, isLeaving: boolean) => {
        if (e.target.value.length > 0){
            setPlaceInput({placeQuery: e.target.value, isLeaving});
            dataList.current?.classList.remove('hidden');
        }
    }

    const showPlacesList = (e: React.FocusEvent<HTMLInputElement>) => {
        setTimeout(() => {
            if (placesList.length > 0) {
                dataList.current?.classList.toggle('hidden');
            }
        }, 100);
    }

    const setInputValue = (value: string) => {
        if (textInput.current)
            textInput.current.value = value;
    }

    useEffect(() => {
        getBusTicketData('/search',placeInput)
        .then(data => {
            if (data.places)
                setPlacesList(data.places);
            else
                console.log(data.msg);
        })
        .catch(err => console.log(err))

    },[placeInput])

  return (
    <label htmlFor={inputName}>{inputLabel}
        <input
            type="text"
            autoComplete="off"
            className={dark ? 'dark' : ""}
            ref={textInput}
            name={inputName}
            placeholder={inputPlaceholder}
            onChange={(e)=>setPlaces(e,true)}
            onFocus={(e)=>showPlacesList(e)}
            onBlur={(e)=>showPlacesList(e)}
        />
        <ul ref={dataList} className='hidden dropdown-menu'>
        {
            placesList.map((place, key) =>
            <li key={key} onClick={()=>setInputValue(place)}>
                <img src={LocationIcon} alt="" />{place}
            </li>)
        }
        </ul>
        </label>
  )
}

export const DateInput: FC<InputProps> = ({inputLabel, inputName, inputPlaceholder, dark=false}) =>{
    return(
    <label htmlFor={inputName}>{inputLabel}
        <input
            type="date"
            autoComplete="off"
            className={dark ? 'dark' : ""}
            name={inputName}
            placeholder={inputPlaceholder}/>
    </label>
    );
}