import Settings from "./Settings"
import { fetchIt } from "./Fetch"

export default { 
    async getAll() {
        return await fetchIt(`${Settings.remoteURL}/users`)
    }
}