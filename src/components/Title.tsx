import { useAuth0 } from "@auth0/auth0-react"
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom"
import { signOutType } from "../App"
import LoginLogout from "./LoginLogout"
import SearchBar from "./SearchBar"
import { userType } from "./UserLogin"
import { useState } from "react"
import '../styling/Title.css'

const Title = ({ name, currentUser, signOut }: properties) => {

    // const {loginWithRedirect, logout, user, isAuthenticated, isLoading} = useAuth0();

    const [isClicked, setIsClicked] = useState<boolean>(false);
    const navigate = useNavigate()

    const goToHome = () => {
        window.location.reload()
    }

    return (
        <div className='title'>
            <div className="header1">
                <div className="webpage-name" onClick={goToHome}>{name}</div>
            </div>
            <div className='header2'>
                <div className="form1-container">
                    <form className={"form1"}>
                        <SearchBar />
                    </form>
                </div>
                <div className="buttons-container">
                    <LoginLogout />
                </div>

            </div>
            {/* <div className="header3"> */}

            {/* </div> */}
        </div>
    )
}

interface properties {
    name: string
    currentUser: userType
    signOut: signOutType
}

export default Title

{/* <form  onClick={ onclick} className={`${isClicked ? "form form-clicked" : "form"} `}> */ }