


//refactor to what you know and learned

    export const GetCampCreator = (id) => {
        return  fetch(`http://localhost:8088/campsites/${id}?_expand=user`).then(res => res.json())
    }
    export const GetSiteId = (id) => {
        return  fetch(`http://localhost:8088/campsites/${id}`).then(res => res.json())
    }
    export const CreateCampsite = (site) => {
        
        const fetchOption = {
            method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify(site)}
        return  fetch(`http://localhost:8088/campsites`,fetchOption)

    }
    export const DeleteSite = (id) => {
        
        fetch(`http://localhost:8088/campsites/${id}`,{
        method: "DELETE"})

    }
    export const GetAll = () => {
        return  fetch(`http://localhost:8088/campsites`).then(res => res.json())
    }

    export const EditSite = (editedsite)  => {
        
        const fetchOption = {
        method: "PUT",
         headers: {
             "Content-Type": "application/json"
            },
            body: JSON.stringify(editedsite)
        }
        return fetch(`http://localhost:8088/campsites/${editedsite.id}`,fetchOption)

        
    }