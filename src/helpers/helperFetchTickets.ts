interface SearchTicket {
    from: string,
    to: string,
    dateStart: string,
    dateEnd: string,
}

interface SearchPlace {
    placeQuery: string,
    isLeaving: boolean
}

interface BusTicket {
    leaving: string,
    depart: string,
    date: string,
    available: number,
    estimatedTime: string
}

interface TicketsResults {
    msg: string,
    results?: BusTicket[]
}

interface PlacesResult {
    msg: string,
    places?: string[]
}

export const helperFetchTicketsData = (baseurl: string, method: string) => {
    
    const getBusTicketData = async (endpoint: string, query: SearchPlace|SearchTicket|{})
    : Promise<PlacesResult> => {
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