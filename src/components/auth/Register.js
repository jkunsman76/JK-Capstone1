import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"
import "./Login.css"

export const Register = () => {
    const [credentials, syncAuth] = useState({
        name: ""
    })
    const { register } = useSimpleAuth()
    const history = useHistory()

    const handleRegister = (e) => {
        e.preventDefault()

        const newUser = {
            name: credentials.name
        }

        register(newUser).then(() => {
            history.push("/")
        })
    }

    const handleUserInput = (event) => {
        const copy = {...credentials}
        copy[event.target.id] = event.target.value
        syncAuth(copy)
    }


    return (
        <main className="container--login">
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Join InTents!</h1>
                <fieldset>
                    <label htmlFor="inputName"> User Name </label>
                    <input type="name" onChange={handleUserInput}
                        id="name"
                        className="form-control"
                        placeholder="User Name"
                        required />
                </fieldset>
                <fieldset>
                    <button type="submit">
                        Sign in
                    </button>
                </fieldset>
            </form>
        </main>
    )
}
