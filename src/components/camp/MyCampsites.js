import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { GetAll } from "../../repos/CampsiteRepository.js"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"
import "./MyCampsites.css"





export const MyCampsites = () => {
    const [MyCampsites, updateMyCampsites] = useState([])
    const [campsites, updateCampsites] = useState([])
    const [currentUserId, setuserId] = useState({})
    const { getCurrentUser } = useSimpleAuth()
    const history = useHistory()

    useEffect(() => {
        setuserId(getCurrentUser)
    }, [])

    useEffect(
        () => {
            GetAll()
                .then(
                    (campArray) => {
                        updateCampsites(campArray)
                    })
                   

        },
        []
    )



    const filterfunc = (array) => {const mySitesFiltered = array.filter(campsite => campsite.userId === currentUserId.id)
       return mySitesFiltered
    }







return (
<main className="Mysites">
 <div className={"siteList__div"}>
     <h1 className= "mysitesh1">My Created Sites</h1>
 {
    filterfunc(campsites).map(
         (site) => {
             return <p className={'sites'} key={`campsite--${site.id}`}>

                 <button className="sites__buttons" onClick={() => history.push(`/campsites/${site.id}`)}


                 >{site.name} in {site.cityState}, Near {site.majorCity}</button>

             </p>
         }
     )
 }
</div>
</main>
)
}