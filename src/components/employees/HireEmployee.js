import React, { useState } from "react"
import { useHistory } from "react-router-dom";

export const HiringForm = () => {
    const [hire, update] = useState({
        name: "",
        specialty: ""
    });
    
    const history = useHistory()
    
    const saveEmployee = (event) => {
        event.preventDefault()
        
        const newHire = {
            name: hire.name,
            specialty: hire.specialty
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newHire)
        }

        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")
            })


    }

    return (
        <form className="hiringForm">
            <h2 className="hiringForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange = {
                            (evt) => {
                                const copy = {...hire}
                                copy.name = evt.target.value
                                update(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Specialty:</label>
                        <input 
                            onChange = {
                                (evt) => {
                                    const copy = {...hire}
                                    copy.specialty = evt.target.value
                                    update(copy)
                                }
                            }
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="Specialty"
                        />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveEmployee}>
                Hire Employee
            </button>
        </form>
    )
}
