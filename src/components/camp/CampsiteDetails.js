import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import CampsiteRepository from "../../repos/CampsiteRepository"
import "./Campsite.css"

//! need to creat checkboxs for the li below next, then 
export default () => {
    const [camp, setCamp] = useState([])
    

    const { campsiteId } = useParams()


    useEffect(() => {
        CampsiteRepository.get(campsiteId).then(setCamp)
    }, [campsiteId])

    return (
        <>
            <div className="">
                <h1 className="campName">{camp.name}</h1>
                <h2> Nearest Major City: {camp.majorCity}</h2>
                <h2> Phone: {camp.phoneNumber} <p> GPS Coordinates: {camp.gpsCoordinates}</p></h2>
                <h3>A Brief Overview</h3>
                <p>{camp.description}</p>
                <h2 className="amenities">Here's the 100% Deet(s)!</h2>
                <ul>
                    <li>Does it have? Toilets:{camp.toilets}</li>
                    <li>Does it have? Showers:{camp.showers}</li>
                    <li>Does it have? Onsite Trash:{camp.trash}</li>
                    <li>Does it have? pinicTables:{camp.pinicTables}</li>
                    <li>Is it Free to Stay Here? :{camp.isFree}</li>
                    <li>Is It Pet Friendly?:{camp.petFriendly}</li>
                    <li>Is It Actually Dark at Night?:{camp.isDark}</li>
                    <li>Does it have? Front Row Parking:{camp.parking}</li>
                    <li>Does it have? Car Camping Sites:{camp.carCamp}</li>
                    <li>Does it have? Tent Sites:{camp.tentCamp}</li>
                    <li>Does it have? Fire Pits:{camp.fire}</li>
                    <li>Does it have? Safe Drinking Water:{camp.water}</li>
                    <li>Date Added:{camp.dateCreated}</li>
                    <li>photos:{camp.photos}</li>
                </ul>
            </div>
        </>
    )
}
