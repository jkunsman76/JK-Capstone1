import React from "react";
import { CampsiteList } from "./CampsiteList.js"
import { useHistory } from "react-router-dom"





export const Campsite = () => {
    const history = useHistory()

    return (
        <>
            <div>

            </div>
            <div>
                {CampsiteList()}
                {/* <div>
                    <button onClick={evt => {
                        evt.preventDefault()
                        history.push("/campsites/mysites")
                    }}
                        className="btn-MySites">My Created Sites</button>
                </div> */}

            </div>

        </>
    )
}