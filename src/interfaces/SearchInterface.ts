export interface SearchTicket {
    from: string,
    to: string,
    dateStart: string|number,
    dateEnd: string|number,
}

export interface BusTicket {
    leaving: string,
    depart: string,
    date: string,
    available: number,
    estimatedTime: string
}

export interface TicketsResults {
    msg: string,
    results?: BusTicket[]
}