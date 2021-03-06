import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { getAllEmployees } from "../ApiManager"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [active, setActive] = useState("")
    const [specialties, listSpecialties] = useState("")
    const history = useHistory()

    useEffect(
        () => {
            getAllEmployees()
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )

    useEffect(
        () => {
            const employeeSpecialties = employees.map(emp => emp.specialty)
            listSpecialties(employeeSpecialties.join(", "))

        /*
            1. Use .map() to get the specialty of each employee
            2. Then update a state variable to be a comma-separated string
                (e.g. "iPhone, Printers, ...")
        */
    }, [employees])

    useEffect(() => {
        const activeEmployeeCount = employees.filter(employee => employee.id > 0).length
        setActive(`We currently employ ${activeEmployeeCount} specialists`)
    }, [employees])

    return (
        <>
            <div>
                <button onClick={() => history.push("/employees/hire")}>Hire Employee</button>
            </div>
            { active }
            <div>
                Specialties: {specialties}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}><Link to={`/employees/${employee.id}`}>{employee.name}</Link></p>
                    }
                )
            }
        </>
    )
}
