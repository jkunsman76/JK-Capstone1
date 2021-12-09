import Settings from "./Settings"
import { fetchIt } from "./Fetch"
import UserRepository from "./UserRepository"

export default {
    async get(id) {
        const users = await UserRepository.getAll()
        return await fetchIt(`${Settings.remoteURL}/campsites/${id}?_expand=user`)
    },
    async createCampsite(site) {
        return await fetchIt(`${Settings.remoteURL}/campsites`, "POST", JSON.stringify(site))
    },
    async delete(id) {
        return await fetchIt(`${Settings.remoteURL}/users/${id}`, "DELETE")
    },
    async getAll() {
        return await fetchIt(`${Settings.remoteURL}/campsites`)
    }
}

