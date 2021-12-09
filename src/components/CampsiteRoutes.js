import React from "react"
import { Route } from "react-router-dom"
import { CampsiteList } from "./camp/CampsiteList"
import CampsiteDetails from "./camp/CampsiteDetails"

export default () => {
    return (
        <>
            <Route exact path="/">
                <CampsiteList />
            </Route>
            <Route exact path="/campsites">
                <CampsiteList />
            </Route>
            <Route path="/campsites/:campsiteId(\d+)">
                <CampsiteDetails />
            </Route>
        </>
    )
}