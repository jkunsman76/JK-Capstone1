import Settings from "../../repos/Settings"


const useSimpleAuth = () => {

    const isAuthenticated = () => localStorage.getItem("camper_creds") !== null
        || sessionStorage.getItem("camper_creds") !== null

    const register = (user) => {
        return fetch(`${Settings.remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(_ => _.json())
        .then(response => {
            if ("id" in response) {
                const baseUserObject = JSON.stringify(response)
                let encoded = Buffer.from(baseUserObject).toString("base64")
                localStorage.setItem("camper_creds", encoded)
                
            }
        })
    }

    const login = (name) => {
        return fetch(`${Settings.remoteURL}/users?name=${name}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(_ => _.json())
        .then(matchingUsers => {
            if (matchingUsers.length > 0) {
                const baseUserObject = JSON.stringify(matchingUsers[0])
                let encoded = Buffer.from(baseUserObject).toString("base64")
                localStorage.setItem("camper_creds", encoded)
                return true
            }
            return false
        })
    }

    const logout = () => {
        console.log("*** Toggling auth state and removing credentials ***")
        localStorage.removeItem("camper_creds")
        sessionStorage.removeItem("camper_creds")
    }

    const getCurrentUser = () => {
        const encoded = localStorage.getItem("camper_creds")
        const unencoded = Buffer.from(encoded, "base64").toString("utf8")
        const parsed = JSON.parse(unencoded)
        const bare = Object.assign(Object.create(null), parsed)
        return bare
    }

    return { isAuthenticated, logout, login, register, getCurrentUser }
}

export default useSimpleAuth
