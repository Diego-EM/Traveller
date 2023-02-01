import { SearchTicket, TicketsResults } from '../interfaces/SearchInterface'

interface SearchPlace {
    placeQuery: string,
    isLeaving: boolean
}

export const helperFetchTicketsData = (baseurl: string, method: string) => {
    
    const getBusTicketData = async (endpoint: string, query: SearchPlace|SearchTicket|{})
    : Promise<any> => {
        const fetchData = await fetch(baseurl + endpoint, {
            headers: { 'Content-Type':'application/json' },
            method,
            body: JSON.stringify(query)
        });
        const data = fetchData.json();
        return data;
    }

    return getBusTicketData;
}