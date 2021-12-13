import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { GetAll } from "../../repos/CampsiteRepository.js"
import "./CampsiteList.css"


//! need to change toilets to Favorite star!!!!!!!!!

export const CampsiteList = () => {
    const [campsites, updateCampsites] = useState([])
    const history = useHistory()


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


    const MostRecent = () => {

        return campsites.sort((a, b) => { return b.dateCreated - a.dateCreated })
    }


    return (
        <>
            <section className={"siteList"}>
                <div className={"siteList__div"}>
                    {
                        campsites.map(
                            (site) => {
                                return <p className={'sites'} key={`campsite--${site.id}`}>

                                    <button onClick={() => history.push(`/campsites/${site.id}`)}


                                    >{site.name} in {site.cityState}, Near {site.majorCity}, {`${site.price}` > 0 ? `$${site.price} per night` : 'Free to Camp!!!'}. {`${site.toilets}` === "true" ? "⭐" : ""} </button>

                                </p>
                            }
                        )
                    }
                </div>
            </section>

            <aside className={"siteList__aside"}>
                <div className={"siteList__div"}>
                    {
                        MostRecent().map((site) => {
                            return <p className={'sites'} key={`campsite--${site.id}`}>

                                <button onClick={() => history.push(`/campsites/${site.id}`)}


                                >{site.name} in {site.cityState}</button>

                            </p>
                        })
                    }
                </div>
            </aside>

        </>
    )
}








