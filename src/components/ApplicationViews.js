import React from "react"
// import { Route } from "react-router-dom"
import {CampsiteRoutes} from "./CampsiteRoutes.js"
// ApplicationViews works in tandem with NavBar
// Route is listneing for the click event in the NavBar, and when the
// URL's '/somthing' matches the PATH's '/something' it will render the component declared inside.



export const ApplicationViews = () => {
    return (
        <>


            
                 <CampsiteRoutes />
            

        </>
    )
} 