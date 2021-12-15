import React from "react";
import { CampsiteList } from "./CampsiteList.js"






export const Campsite = () => {


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