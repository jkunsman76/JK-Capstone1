import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CampsiteRepository from "../../repos/CampsiteRepository";
import "./CampsiteList.css"


//! need to make toilets the Favorite star!!!!!!!!!

export const CampsiteList = () => {
    const [campsites, updateCampsites] = useState([])
    const history = useHistory()


    useEffect(
        () => {
            CampsiteRepository.getAll()
                .then(res => { updateCampsites(res) })
        },
        []
    )



    return (
        <>
            <div className={"siteList"}>
                {
                    campsites.map(
                        (site) => {
                            return <p className={'sites'} key={`campsite--${site.id}`}>

                               <button onClick={() => history.push(`/campsites/${site.id}`)}
                               
                               
                               >{site.name}, in {site.cityState}, Near {site.majorCity}, {`${site.price}` > 0 ? `$${site.price} per night`: 'Free to Camp!!!'}. {`${site.toilets}` === "true" ? "⭐": ""} </button>

                            </p>
                        }
                    )
                }
            </div>
            
        </>
    )
}