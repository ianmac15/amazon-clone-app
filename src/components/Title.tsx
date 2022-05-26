import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom"
import { signOutType } from "../App"
import LoginLogout from "./LoginLogout"
import { userType } from "./UserLogin"

const Title = ({ name, currentUser, signOut }: properties) => {

    // const {loginWithRedirect, logout, user, isAuthenticated, isLoading} = useAuth0();
    

    return (
        <h1 className='title'>
            <div>
                <h3 className="webpage-name">{name}</h3>
                <h4 className="after-title">Trade anything with anyone...</h4>
            </div>
            <form className='form-control'>
                <input />
            </form>
            <LoginLogout />

        </h1>
    )
}

interface properties {
    name: string
    currentUser: userType
    signOut: signOutType
}

export default Title