import React, { useEffect, useState } from "react"
import { getAllCustomers } from "../ApiManager"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            getAllCustomers()
                .then((data) => {
                    setCustomers(data)
                })
        },
        []
    )

    useEffect(
        () => {

        },
        [customers]
    )

    return (
        <>
            
            {
                customers.map(
                    (customerObject) => {
                        return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                    }
                )
            }
        </>
    )
}
