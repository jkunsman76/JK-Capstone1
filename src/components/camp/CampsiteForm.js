import React from 'react';
import { useState } from "react"
import CampsiteRepository from "../../repos/CampsiteRepository";
import UserRepository from "../../repos/UserRepository";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"
import "./CampsiteForm.css"
import { useEffect } from "react"
import { useHistory } from "react-router-dom"




export default () => {
    const [campsite, updateCampsite] = useState({})
    const [userId, setuserId] = useState({})
    const { getCurrentUser } = useSimpleAuth()

    useEffect(() => {
        setuserId(getCurrentUser)
    }, [])

    const history = useHistory()

    const constructNewCampsite = () => {
        // object containing new campsite information being posted to api by the campsite repo function createCampsite, then history.push takes to main campsite page
        // object is updated Onchange in the form below with user input based on id of input
        CampsiteRepository.createCampsite({
            name: campsite.name,
            cityState: campsite.cityState,
            userId: userId.id,
            majorCity: campsite.majorCity,
            phoneNumber: campsite.phoneNumber,
            gpsCoordinates: campsite.gpsCoordinates,
            price: campsite.price,
            description: campsite.description,
            toilets: true,
            showers: true,
            trash: true,
            pinicTables: true,
            isFree: true,
            petFriendly: true,
            isDark: true,
            parking: true,
            carCamp: true,
            tentCamp: true,
            fire: true,
            water: true,
            dateCreated: new Date(),
            photos: ""

        })
            .then(() => history.push("/campsites"))
    }


    const userInput = (event) => {
        const copy = { ...campsite }
        copy[event.target.id] = event.target.value
        updateCampsite(copy)
    }


    return (
        <>
            <form className="campsiteForm">
                <h2 className="campsiteForm__title">New Campsite</h2>
                <div className="form-group">
                    <label htmlFor="campsiteName">Campsite name</label>
                    <input id="name" onChange={userInput}
                        type="text"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Campsite name"
                    />
                </div>




                <div className="form-group">
                    <label htmlFor="cityState">City, State </label>
                    <input id="cityState" onChange={userInput}
                        type="text"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="exmp... Atlanta, GA"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="majorCity">Nearest Major City </label>
                    <input id="majorCity" onChange={userInput}
                        type="text"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="exmp... Atlanta, GA"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone:</label>
                    <input id="phoneNumber" onChange={userInput}
                        type="text"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="exmp... 615-615-6156"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="gpsCoordinates">GPS Coordinates </label>
                    <input id="gpsCoordinates" onChange={userInput}
                        type="text"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="exmp... 12.203746, -56.113981 "
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price $</label>
                    <input id="price" onChange={userInput}
                        type="number"
                        pattern="[0-9]*"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="exmp... 28"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input id="description" onChange={userInput}
                        type="text"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="exmp... Lovely place with... "
                    />
                </div>

                <div className="radio">
                    <label>Toilets? <input type="radio" id="toilets" name="toilets" value={true} onChange={userInput} />Yes</label>
                    <label><input type="radio" id="toilets" name="toilets" value={false} onChange={userInput} />No</label>
                </div>
                <div className="radio">
                    <label>Showers? <input type="radio" id="showers" name="showers" value={true} onChange={userInput} />Yes</label>
                    <label><input type="radio" id="showers" name="showers" value={false} onChange={userInput} />No</label>
                </div>
                <div className="radio">
                    <label>Trash? <input type="radio" id="trash" name="trash" value={true} onChange={userInput} />Yes</label>
                    <label><input type="radio" id="trash" name="trash" value={false} onChange={userInput} />No</label>
                </div>
                <div className="radio">
                    <label>Pinic Tables? <input type="radio" id="pinicTables" name="pinicTables" value={true} onChange={userInput} />Yes</label>
                    <label><input type="radio" id="pinicTables" name="pinicTables" value={false} onChange={userInput} />No</label>
                </div>
                <div className="radio">
                    <label>Is it Free? <input type="radio" id="isFree" name="isFree" value={true} onChange={userInput} />Yes</label>
                    <label><input type="radio" id="isFree" name="isFree" value={false} onChange={userInput} />No</label>
                </div>
                <div className="radio">
                    <label>Pet Friendly? <input type="radio" id="petFriendly" name="petFriendly" value={true} onChange={userInput} />Yes</label>
                    <label><input type="radio" id="petFriendly" name="petFriendly" value={false} onChange={userInput} />No</label>
                </div>
                <div className="radio">
                    <label>Is it Dark at night for sleeping? <input type="radio" id="isDark" name="isDark" value={true} onChange={userInput} />Yes</label>
                    <label><input type="radio" id="isDark" name="isDark" value={false} onChange={userInput} />No</label>
                </div>
                <div className="radio">
                    <label>Is there drive up parking to the site? <input type="radio" id="parking" name="parking" value={true} onChange={userInput} />Yes</label>
                    <label><input type="radio" id="parking" name="parking" value={false} onChange={userInput} />No</label>
                </div>
                <div className="radio">
                    <label>Can you car camp here? <input type="radio" id="carCamp" name="carCamp" value={true} onChange={userInput} />Yes</label>
                    <label><input type="radio" id="carCamp" name="carCamp" value={false} onChange={userInput} />No</label>
                </div>
                <div className="radio">
                    <label>Can you tent camp here? <input type="radio" id="tentCamp" name="tentCamp" value={true} onChange={userInput} />Yes</label>
                    <label><input type="radio" id="tentCamp" name="tentCamp" value={false} onChange={userInput} />No</label>
                </div>
                <div className="radio">
                    <label>Are there fire pits? <input type="radio" id="fire" name="fire" value={true} onChange={userInput} />Yes</label>
                    <label><input type="radio" id="fire" name="fire" value={false} onChange={userInput} />No</label>
                </div>
                <div className="radio">
                    <label>Is there safe drinking water? <input type="radio" id="water" name="water" value={true} onChange={userInput} />Yes</label>
                    <label><input type="radio" id="water" name="water" value={false} onChange={userInput} />No</label>
                </div>
                <div>Upload Photos Here</div>












                <button type="submit"
                    onClick={
                        evt => {
                            evt.preventDefault()
                            constructNewCampsite()
                        }
                    }
                    className="btn btn-primary">Save Campsite</button>
            </form>
        </>
    )
}
