import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { HiringForm } from "./employees/HireEmployee"
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

            <Route exact path="/tickets">
                <TicketList />
            </Route>

            <Route exact path="/tickets/create">
                <TicketForm />
            </Route>
        </>
    )
}