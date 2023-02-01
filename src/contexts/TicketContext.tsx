import React, { createContext, useState } from "react";
import { SearchTicket } from "../interfaces/SearchInterface";

interface TicketContextData {
    ticketQuery: SearchTicket|undefined,
    handdleTicketQuery: (x: SearchTicket) => void
}

const TicketContext = createContext<TicketContextData|null>(null);

const TicketProvider = ({children}: React.PropsWithChildren) => {
    const [ticketQuery, setTicketQuery] = useState<SearchTicket>();

    const handdleTicketQuery = (data: SearchTicket) => setTicketQuery(data);
    
    const data = { ticketQuery, handdleTicketQuery };

    return <TicketContext.Provider value={data}> {children} </TicketContext.Provider>
}

export default TicketContext;
export { TicketProvider };