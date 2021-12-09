import React, { useState } from "react"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";
import { Link, useHistory } from "react-router-dom";
import "./Login.css"


const Login = () => {
    const [credentials, syncAuth] = useState({
        name: "",
        remember: false
    })
    const { login } = useSimpleAuth()
    const history = useHistory()

    // Simplistic handler for login submit
    const handleLogin = (e) => {
        e.preventDefault()
        const storage = credentials.remember ? localStorage : sessionStorage

        /*
            For now, just store the userName that
            the person enters into local storage.
        */
        console.log("*** Initiate authentication ***")
        login(credentials.name, storage)
            .then(success => {
                if (success) {
                    console.log("*** Rerouting to root URL ***")
                    history.push("/")
                }
            })
    }

    const handleUserInput = (event) => {
        const copy = {...credentials}
        copy[event.target.id] = event.target.value
        syncAuth(copy)
    }

    return (
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Welcome to InTents</h1>
                    <h2 className="h3 mb-3 font-weight-normal">Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputName"> User Name </label>
                        <input type="name" onChange={handleUserInput}
                            id="name"
                            className="form-control"
                            placeholder="Enter Your User Name"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <input
                            onChange={
                                (event) => {
                                    const copy = {...credentials}
                                    if (event.target.value === "on") {
                                        copy.remember = true
                                    }
                                    else {
                                        copy.remember = false
                                    }
                                    syncAuth(copy)
                                }
                            }
                            defaultChecked={credentials.remember}
                            type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember"> Remember Me </label>
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                    </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}
export default Login
