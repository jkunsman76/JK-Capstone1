import React from 'react';
import { useState, useEffect } from "react"
import {GetSiteId, CreateCampsite, DeleteSite, EditSite } from "../../repos/CampsiteRepository.js"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"
import "./CampsiteForm.css"
import { useHistory, useParams } from "react-router-dom"




export const CampsiteForm = () => {
    const [campsite, updateCampsite] = useState({})
    const [userId, setuserId] = useState({})
    const { getCurrentUser } = useSimpleAuth()
    const { campsiteId } = useParams()


    useEffect(() => {
        if (campsiteId) {
            GetSiteId(campsiteId)
                .then((campArray) => { updateCampsite(campArray) })
        }
    }, [campsiteId])


    useEffect(() => {
        setuserId(getCurrentUser)
    }, [])

    const history = useHistory()

    const constructNewCampsite = () => {

        // object containing new campsite information being posted to api by the campsite repo function createCampsite, then history.push takes to main campsite page
        // object is updated Onchange in the form below with user input based on id of input



        const campObj = {
            id: campsite.id,
            name: campsite.name,
            cityState: campsite.cityState,
            userId: userId.id,
            majorCity: campsite.majorCity,
            phoneNumber: campsite.phoneNumber,
            gpsCoordinates: campsite.gpsCoordinates,
            price: campsite.price,
            description: campsite.description,
            toilets: campsite.toilets,
            showers: campsite.showers,
            trash: campsite.trash,
            pinicTables: campsite.pinicTables,
            isFree: campsite.isFree,
            petFriendly: campsite.petFriendly,
            isDark: campsite.isDark,
            parking: campsite.parking,
            carCamp: campsite.carCamp,
            tentCamp: campsite.tentCamp,
            fire: campsite.fire,
            water: campsite.water,
            dateCreated: new Date(),
            photos: ""

        }
        campsiteId ? EditSite(campObj)
            .then(() => {
                history.push("/campsites")
            }) :
            CreateCampsite(campObj)
                .then(() => {
                    history.push("/campsites")
                })
    }

    //new func for radio buttons
    const userInput = (event) => {
        const copy = { ...campsite }
        copy[event.target.id] = event.target.value
        updateCampsite(copy)
    }

    const radioInput = (event) => {
        const copy = { ...campsite }
        copy[event.target.id] = JSON.parse(event.target.value)
        updateCampsite(copy)
    }


    const campsiteDelete = () => {

        DeleteSite(campsiteId)
              
          
    }

    return (
        <>
            <form className="campsiteForm">
                <h2 className="campsiteForm__title">{campsiteId ? "Edit Campsite " : "New Campsite"}</h2>
                <div className="form-group">
                    <label htmlFor="campsiteName">Campsite name</label>
                    <input id="name" defaultValue={campsite.name} onChange={userInput}
                        type="text"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Campsite name"
                    />
                </div>




                <div className="form-group">
                    <label htmlFor="cityState">City, State </label>
                    <input id="cityState" defaultValue={campsite.cityState} onChange={userInput}
                        type="text"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="exmp... Atlanta, GA"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="majorCity">Nearest Major City </label>
                    <input id="majorCity" defaultValue={campsite.majorCity} onChange={userInput}
                        type="text"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="exmp... Atlanta, GA"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone:</label>
                    <input id="phoneNumber" defaultValue={campsite.phoneNumber} onChange={userInput}
                        type="text"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="exmp... 615-615-6156"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="gpsCoordinates">GPS Coordinates </label>
                    <input id="gpsCoordinates" defaultValue={campsite.gpsCoordinates} onChange={userInput}
                        type="text"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="exmp... 12.203746, -56.113981 "
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price $</label>
                    <input id="price" defaultValue={campsite.price} onChange={userInput}
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
                    <input id="description" defaultValue={campsite.description} onChange={userInput}
                        type="text"
                        required
                        autoFocus
                        className="form-description"
                        placeholder="exmp... Lovely place with... "
                    />
                </div>

                <div className="radio">
                    <label>Toilets? <input type="radio" id="toilets" name="toilets" checked={campsite.toilets === true} value={campsite.toilets === true ? campsite.toilets : true} onChange={radioInput} />Yes</label>
                    <label><input type="radio" id="toilets" name="toilets" checked={campsite.toilets === false} value={campsite.toilets === false ? campsite.toilets : false} onChange={radioInput} />No</label>
                </div>
                <div className="radio">
                    <label>Showers? <input type="radio" id="showers" name="showers" checked={campsite.showers === true} value={campsite.showers === true ? campsite.showers : true} onChange={radioInput} />Yes</label>
                    <label><input type="radio" id="showers" name="showers" checked={campsite.showers === false} value={campsite.showers === false ? campsite.showers : false} onChange={radioInput} />No</label>
                </div>
                <div className="radio">
                    <label>Trash? <input type="radio" id="trash" name="trash" checked={campsite.trash === true} value={campsite.trash === true ? campsite.trash : true} onChange={radioInput} />Yes</label>
                    <label><input type="radio" id="trash" name="trash" checked={campsite.trash === false} value={campsite.trash === false ? campsite.trash : false} onChange={radioInput} />No</label>
                </div>
                <div className="radio">
                    <label>Pinic Tables? <input type="radio" id="pinicTables" name="pinicTables" checked={campsite.pinicTables === true} value={campsite.pinicTables === true ? campsite.pinicTables : true} onChange={radioInput} />Yes</label>
                    <label><input type="radio" id="pinicTables" name="pinicTables" checked={campsite.pinicTables === false} value={campsite.pinicTables === false ? campsite.pinicTables : false} onChange={radioInput} />No</label>
                </div>
                <div className="radio">
                    <label>Is it Free? <input type="radio" id="isFree" name="isFree" checked={campsite.isFree === true} value={campsite.isFree === true ? campsite.isFree : true} onChange={radioInput} />Yes</label>
                    <label><input type="radio" id="isFree" name="isFree" checked={campsite.isFree === false} value={campsite.isFree === false ? campsite.isFree : false} onChange={radioInput} />No</label>
                </div>
                <div className="radio">
                    <label>Pet Friendly? <input type="radio" id="petFriendly" name="petFriendly" checked={campsite.petFriendly === true} value={campsite.petFriendly === true ? campsite.petFriendly : true} onChange={radioInput} />Yes</label>
                    <label><input type="radio" id="petFriendly" name="petFriendly" checked={campsite.petFriendly === false} value={campsite.petFriendly === false ? campsite.petFriendly : false} onChange={radioInput} />No</label>
                </div>
                <div className="radio">
                    <label>Is it Dark at night for sleeping? <input type="radio" id="isDark" name="isDark" checked={campsite.isDark === true} value={campsite.isDark === true ? campsite.isDark : true} onChange={radioInput} />Yes</label>
                    <label><input type="radio" id="isDark" name="isDark" checked={campsite.isDark === false} value={campsite.isDark === false ? campsite.isDark : false} onChange={radioInput} />No</label>
                </div>
                <div className="radio">
                    <label>Is there drive up parking to the site? <input type="radio" id="parking" name="parking" checked={campsite.parking === true} value={campsite.parking === true ? campsite.parking : true} onChange={radioInput} />Yes</label>
                    <label><input type="radio" id="parking" name="parking" checked={campsite.parking === false} value={campsite.parking === false ? campsite.parking : false} onChange={radioInput} />No</label>
                </div>
                <div className="radio">
                    <label>Can you car camp here? <input type="radio" id="carCamp" name="carCamp" checked={campsite.carCamp === true} value={campsite.carCamp === true ? campsite.carCamp : true} onChange={radioInput} />Yes</label>
                    <label><input type="radio" id="carCamp" name="carCamp" checked={campsite.carCamp === false} value={campsite.carCamp === false ? campsite.carCamp : false} onChange={radioInput} />No</label>
                </div>
                <div className="radio">
                    <label>Can you tent camp here? <input type="radio" id="tentCamp" name="tentCamp" checked={campsite.tentCamp === true} value={campsite.tentCamp === true ? campsite.tentCamp : true} onChange={radioInput} />Yes</label>
                    <label><input type="radio" id="tentCamp" name="tentCamp" checked={campsite.tentCamp === false} value={campsite.tentCamp === false ? campsite.tentCamp : false} onChange={radioInput} />No</label>
                </div>
                <div className="radio">
                    <label>Are there fire pits? <input type="radio" id="fire" name="fire" checked={campsite.fire === true} value={campsite.fire === true ? campsite.fire : true} onChange={radioInput} />Yes</label>
                    <label><input type="radio" id="fire" name="fire" checked={campsite.fire === false} value={campsite.fire === false ? campsite.fire : false} onChange={radioInput} />No</label>
                </div>
                <div className="radio">
                    <label>Is there safe drinking water? <input type="radio" id="water" name="water" checked={campsite.water === true} value={campsite.water === true ? campsite.water : true} onChange={radioInput} />Yes</label>
                    <label><input type="radio" id="water" name="water" checked={campsite.water === false} value={campsite.water === false ? campsite.water : false} onChange={radioInput} />No</label>
                </div>
                <div>Upload Photos Here</div>












                <button type="submit"
                    onClick={
                        evt => {
                            evt.preventDefault()
                            constructNewCampsite()

                        }}
                    className="btn btn-primary">Save Campsite</button>

                <button type="submit"
                    onClick={
                        () => {

                            campsiteDelete()
                            history.push("/campsites")

                        }
                    }
                    className="btn btn-primary">Delete Campsite</button>
            </form>
        </>
    )
}
