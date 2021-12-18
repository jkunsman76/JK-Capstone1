import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { GetAll } from "../../repos/CampsiteRepository.js"
import "./CampsiteList.css"


export const CampsiteList = () => {
    const [campsites, updateCampsites] = useState([])
    const [filSites, FilterSites] = useState([])
    const history = useHistory()


    useEffect(
        () => {
            GetAll()
                .then(
                    (campArray) => {
                        updateCampsites(campArray)
                        FilterSites(campArray)
                        // setting sites for display in scroll box for filter
                    })

        },
        []
    )






    const MostRecent = () => {
        const campArray = [...campsites]
        return campArray.sort((a, b) => { return b.dateCreated - a.dateCreated }).slice(0, 5)
    }



    const input = (event) => {
        const copy = event.target.value ? [...campsites].filter(sites => sites.majorCity === event.target.value) : [...campsites]
        FilterSites(copy)
    }
    //map converts data from state to state
    const citieMapArray = () => {
        const copyCampsites = [...campsites]
        //converting campsite obj into string of the major city
        const cities = copyCampsites.map(campsite => campsite.majorCity)
        const uniqueCities = [...new Set(cities)]
        return uniqueCities
    }
    return (
        <>
            <main className="campsiteMainPage">
                <aside className={"siteList__aside"}>
                    <div className={"siteList__asideDiv"}>
                        <h2 className="siteList__asideHeading">Recently Updated</h2>
                        {
                            MostRecent().map((site) => {
                                return <p className={'recentSites'} key={`campsite--${site.id}`}>

                                    <button className="recentSites__button" onClick={() => history.push(`/campsites/${site.id}`)}


                                    >{site.name} in {site.cityState}</button>

                                </p>
                            })
                        }
                    </div>
                    <div className="mysitesdiv">
                        <button onClick={evt => {
                            evt.preventDefault()
                            history.push("/campsites/mysites")
                        }}
                            className="btn-MySites">My Created Sites</button>
                    </div>
                </aside>
                <section className={"siteList"}>
                    <h1 className="heading">InTents</h1>
                    <div className="filterSelect">
                        <label htmlFor="cityFilter">Filter by Major City: </label>
                        <select id="majorCity" onChange={input}
                            defaultValue=""
                            name="majorCity"
                            className="cityFilterDropdown"
                        >
                            <option key="majorCity--0" value="">View All</option>
                            {citieMapArray().map((majorCityString, I) => (
                                <option key={I} value={majorCityString}>
                                    {majorCityString}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={"siteList__div"}>
                        {
                            filSites.map(
                                (site) => {
                                    return <p className={'sites'} key={`campsite--${site.id}`}>

                                        <button className="sites__buttons" onClick={() => history.push(`/campsites/${site.id}`)}


                                        >{site.name} in {site.cityState}, Near {site.majorCity}, {`${site.price}` > 0 ? `$${site.price} per night` : 'Free to Camp!!!'}.</button>

                                    </p>
                                }
                            )
                        }
                    </div>
                    <div className={"createSite"}>
                        <button onClick={evt => {
                            evt.preventDefault()
                            history.push("/campsites/create")
                        }}
                            className="btn-CreateSite">Create New Site</button>
                    </div>
                </section>
            </main>
        </>
    )
}
