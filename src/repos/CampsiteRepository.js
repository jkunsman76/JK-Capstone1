








import Settings from "./Settings"
import { fetchIt } from "./Fetch"

export default {
    async get(id) {
        return await fetchIt(`${Settings.remoteURL}/campsites/${id}`)
    },
    async createCampsite(site) {
        return await fetchIt(`${Settings.remoteURL}/campsites`, "POST", JSON.stringify(site))
    },
    async filterSites(un, pwd) {
        return await fetchIt(`${Settings.remoteURL}/users?id=${un}`)
    },
    async delete(id) {
        return await fetchIt(`${Settings.remoteURL}/users/${id}`, "DELETE")
    },
    async getAll() {
        return await fetchIt(`${Settings.remoteURL}/campsites`)
    }
}

