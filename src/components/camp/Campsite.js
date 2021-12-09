import React from "react";
import { CampsiteList } from "./CampsiteList.js"
import { useHistory } from "react-router-dom"







export default () => {
    const history = useHistory()
    return (
        <>
            <div>
                {CampsiteList()}
                <div>
                    <button onClick={evt => {
                        evt.preventDefault()
                        history.push("/campsites/mysites")
                    }}
                        className="btn-MySites">My Created Sites</button>
                </div>
                <div>
                    <button onClick={evt => {
                        evt.preventDefault()
                        history.push("/campsites/create")
                    }}
                        className="btn-CreateSite">Create New Site</button>
                </div>
            </div>

        </>
    )
}