import React from "react"
import { Route } from "react-router-dom"
import {CampsiteDetails} from "./camp/CampsiteDetails"
import {CampsiteForm} from "./camp/CampsiteForm"
import {Campsite} from "./camp/Campsite"

export const CampsiteRoutes = () => {
    return (
        <>
            <Route exact path="/">
                <Campsite />
            </Route>
            <Route exact path="/campsites">
                <Campsite />
            </Route>
            <Route exact path="/campsites/create">
                <CampsiteForm />
            </Route>
            <Route exact path="/campsites/:campsiteId(\d+)">
                <CampsiteDetails />
            </Route>
            <Route exact path="/campsites/:campsiteId(\d+)/create">
                <CampsiteForm />
            </Route>
        </>
    )
}
