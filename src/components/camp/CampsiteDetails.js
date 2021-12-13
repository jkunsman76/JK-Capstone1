import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom";
import { GetCampCreator} from "../../repos/CampsiteRepository.js"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"
import "./Campsite.css"


export const CampsiteDetails = () => {
    const [camp, setCamp] = useState([])
    const { campsiteId } = useParams()
    const [currentUserId, setuserId] = useState({})
    const { getCurrentUser } = useSimpleAuth()
    const history = useHistory()


    useEffect(() => {
        setuserId(getCurrentUser)
    }, [])

    useEffect(() => {
        GetCampCreator(campsiteId)
            
            .then((campArray) => {
                setCamp(campArray)
            }
        )
    }, [campsiteId])
    // have to wrap the "true" bc T-statements are truthy and not true 
    return (
        <>
            <div className="Details-div" key={`campsite--${camp.id}`}>
                <h1 className="camp-name">{camp.name}</h1>
                <h2 className="major-city"> Nearest Major City: {camp.majorCity}</h2>
                <h2 className="contact-info"> Phone: {camp.phoneNumber} <p> GPS Coordinates: {camp.gpsCoordinates}</p></h2>
                <h3 className="description-header">A Brief Overview</h3>
                <p>{camp.description}</p>
                <h2 className="amenities">Here's the 100% Deet(s)!</h2>
                <ul>
                    <li>Does it have? Toilets:{`${camp.toilets}` === 'true' ? '✔️' : '❌'}</li>
                    <li>Does it have? Showers:{`${camp.showers}` === 'true' ? '✔️' : '❌'}</li>
                    <li>Does it have? Onsite Trash:{`${camp.trash}` === 'true' ? '✔️' : '❌'}</li>
                    <li>Does it have? pinicTables:{`${camp.pinicTables}` === 'true' ? '✔️' : '❌'}</li>
                    <li>Is it Free to Stay Here? :{`${camp.isFree}` === 'true' ? '✔️' : '❌'}</li>
                    <li>Is It Pet Friendly?:{`${camp.petFriendly}` === 'true' ? '✔️' : '❌'}</li>
                    <li>Is It Actually Dark at Night?:{`${camp.isDark}` === 'true' ? '✔️' : '❌'}</li>
                    <li>Does it have? Front Row Parking:{`${camp.parking}` === 'true' ? '✔️' : '❌'}</li>
                    <li>Does it have? Car Camping Sites:{`${camp.carCamp}` === 'true' ? '✔️' : '❌'}</li>
                    <li>Does it have? Tent Sites:{`${camp.tentCamp}` === 'true' ? '✔️' : '❌'}</li>
                    <li>Does it have? Fire Pits:{`${camp.fire}` === 'true' ? '✔️' : '❌'}</li>
                    <li>Does it have? Safe Drinking Water:{`${camp.water}` === 'true' ? '✔️' : '❌'}</li>
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
                <button className="btn-comment" onClick={() => history.push(`/campsites/${camp.id}`)}>Comment!</button>
                {currentUserId.id === camp.userId ? <button className="btn-edit" onClick={() => history.push(`/campsites/${camp.id}/create`)}>Edit Site Info</button> : ""}
            </div>

        </>
    )
}
