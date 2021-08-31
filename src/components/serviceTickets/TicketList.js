import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { getAllTickets } from "../ApiManager"
import "./Tickets.css"

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const [active, setActive] = useState("")
    const history = useHistory()

    const getTickets = () => {
        getAllTickets()
            .then((data) => {
                updateTickets(data)
            })
    }
    
    useEffect(
        () => {
            getTickets()
        },
        []
    )

    useEffect(() => {
        const activeTicketCount = tickets.filter(t => t.dateCompleted === "").length
        setActive(`There are ${activeTicketCount} open tickets.`)
    }, [tickets])
    
    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        })
        .then(() => getTickets())
    }

    return (
        <>
            <div>
                <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>
            </div>
            { active }
            {
                tickets.map(
                    (ticket) => {
                        return <div key={`ticket--${ticket.id}`}>
                            <p className={ticket.emergency ? "emergency" : "ticket"}>
                                {ticket.emergency ? "🚑" : ""} <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link> submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                            </p>
                            <button onClick={() => {
                                deleteTicket(ticket.id)
                            }}>Delete</button>

                        </div>
                    }
                )
            }
        </>
    )
}
