import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Employee = () => {
    const [employee, setEmployee] = useState({})  // State variable for current Employee object
    const { employeeId } = useParams()  // Variable storing the route parameter

    useEffect(
        () => {
            fetch(`http://localhost:8088/employees/${employeeId}`)
                .then(res => res.json())
                .then((data) => {
                    setEmployee(data)
                })
        },
        [ employeeId ]  // Above function runs when the value of ticketId change
    )

    return (
        <>
            <h2>Employee Number {employeeId}</h2>
            <section className="employee">
                <h3 className="employee__name">{employee.name}</h3>
                <div className="employee__specialty">Specialty: {employee.specialty}</div>
            </section>
        </>
    )
}