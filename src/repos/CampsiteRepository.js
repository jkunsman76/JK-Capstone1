import Settings from "./Settings"
import { fetchIt } from "./Fetch"
import UserRepository from "./UserRepository"


const expandUser = (user, users) => {
    user.users = user.users.map(u => {
        u.user = users.find(user => user.id === u.userId)
        return u
    })
return user
}

export default {
    async get(id) {
        const users = await UserRepository.getAll()
        return await fetchIt(`${Settings.remoteURL}/campsites/${id}?_embed=users`)
        .then(user => {
            user = expandUser(user, users)
            return user
        })
    },
    async createCampsite(site) {
        return await fetchIt(`${Settings.remoteURL}/campsites`, "POST", JSON.stringify(site))
    },
    // async filterSites(un, pwd) {
    //     return await fetchIt(`${Settings.remoteURL}/users?id=${un}`)
    // },
    async delete(id) {
        return await fetchIt(`${Settings.remoteURL}/users/${id}`, "DELETE")
    },
    async getAll() {
        return await fetchIt(`${Settings.remoteURL}/campsites`)
    }
}

