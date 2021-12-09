import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import CampsiteRepository from "../../repos/CampsiteRepository"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"
import "./Campsite.css"

//! figur out how to get the user who created the sites name to display... users embed in campsite repo from user repo and then .find to get that user based on id and userId 
export default () => {
    const [camp, setCamp] = useState([])
    const { campsiteId } = useParams()
    const [currentUserId, setuserId] = useState({})
    const { getCurrentUser } = useSimpleAuth()
    
    useEffect(() => {
        setuserId(getCurrentUser)
    }, [])

    useEffect(() => {
        CampsiteRepository.get(campsiteId).then(setCamp)
    }, [campsiteId])
// have to wrap the "true" bc tirenay statements are truthy and not true 
    return (
        <>
            <div className="Details-div">
                <h1 className="camp-name">{camp.name}</h1>
                <h2 className="major-city"> Nearest Major City: {camp.majorCity}</h2>
                <h2 className="contact-info"> Phone: {camp.phoneNumber} <p> GPS Coordinates: {camp.gpsCoordinates}</p></h2>
                <h3 className="description-header">A Brief Overview</h3>
                <p>{camp.description}</p>
                <h2 className="amenities">Here's the 100% Deet(s)!</h2>
                <ul>
                    <li>Does it have? Toilets:{`${camp.toilets}` === 'true' ? '✔️' : '❌'}</li>
                    <li>Does it have? Showers:{`${camp.showers}`  === 'true' ? '✔️' : '❌'}</li>
                    <li>Does it have? Onsite Trash:{`${camp.trash}` === 'true' ? '✔️' : '❌'}</li>
                    <li>Does it have? pinicTables:{`${camp.pinicTables}`  === 'true' ? '✔️' : '❌'}</li>
                    <li>Is it Free to Stay Here? :{`${camp.isFree}`  === 'true' ? '✔️' : '❌'}</li>
                    <li>Is It Pet Friendly?:{`${camp.petFriendly}`  === 'true' ? '✔️' : '❌'}</li>
                    <li>Is It Actually Dark at Night?:{`${camp.isDark}`  === 'true' ? '✔️' : '❌'}</li>
                    <li>Does it have? Front Row Parking:{`${camp.parking}`  === 'true' ? '✔️' : '❌'}</li>
                    <li>Does it have? Car Camping Sites:{`${camp.carCamp}`  === 'true' ? '✔️' : '❌'}</li>
                    <li>Does it have? Tent Sites:{`${camp.tentCamp}`  === 'true' ? '✔️' : '❌'}</li>
                    <li>Does it have? Fire Pits:{`${camp.fire}`  === 'true' ? '✔️' : '❌'}</li>
                    <li>Does it have? Safe Drinking Water:{`${camp.water}`  === 'true' ? '✔️' : '❌'}</li>
                    <li>Date Added:{camp.dateCreated}</li>
                    <li>Added by User:{`${camp.user?.name}`}</li>
                </ul>
            </div>
            <aside className="photos">
            <div>Photos aside {camp.photos}</div>
            </aside>
            <form>!!!!display comments here and write comments below the displayed comments!!!!

            </form>
            <div>
                <button className="btn-comment">Comment!</button>
{currentUserId.id === camp.userId ? <button className="btn-edit">Edit Site Info</button> : ""}
            </div>
            
        </>
    )
}
