import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom"
import { signOutType } from "../App"
import LoginLogout from "./LoginLogout"
import { userType } from "./UserLogin"

const Title = ({ name, currentUser, signOut }: properties) => {

    // const {loginWithRedirect, logout, user, isAuthenticated, isLoading} = useAuth0();


    return (
        <div className='title'>
            <div>
                <div className="webpage-name">{name}</div>
                <div className="after-title">Trade anything with anyone...</div>
            </div>
            <div className='search-bar'>
                <form>
                    <input />
                </form>
            </div>
            <div>
                <LoginLogout />
            </div>
        </div>
    )
}

interface properties {
    name: string
    currentUser: userType
    signOut: signOutType
}

export default Title