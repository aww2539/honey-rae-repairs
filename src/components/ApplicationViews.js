import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { Employee } from "./employees/Employee"
import { EmployeeList } from "./employees/EmployeeList"
import { HiringForm } from "./employees/HireEmployee"
import { Ticket } from "./serviceTickets/Ticket"
import { TicketForm } from "./serviceTickets/TicketForm"
import { TicketList } from "./serviceTickets/TicketList"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>
                    <Route exact path="/employees/hire">
                        <HiringForm />
                    </Route>
                    <Route exact path="/employees/:employeeId(\d+)">
                        <Employee />
                    </Route>

            <Route exact path="/tickets">
                <TicketList />
            </Route>
                    <Route exact path="/tickets/create">
                        <TicketForm />
                    </Route>
                    <Route exact path="/tickets/:ticketId(\d+)">
                        <Ticket />
                    </Route>
        </>
    )
}