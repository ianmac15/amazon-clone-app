import Title from "./Title"
import Products from "./Products"
import { userType } from "./UserLogin"
import { signOutType } from "../App"
import '../styling/mainPage.css'
import { useState } from "react"

const HomePage = ({ currentUser, signOut }: properties) => {

    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    return (
        <div >
            <Title name="Market Town" currentUser={currentUser} signOut={signOut} />

            <div className="main-page">
                <div className="welcome-message-container">
                    <div className="welcome-message">Choose from a great variety of products</div>
                </div>
                <Products isAddPressed = {false} isAdmin={isAdmin}/>
            </div>
        </div>
    )
}

// signOut={signOut} αυτό πάει μέσα στο Title αντί για το logout

type properties = {
    currentUser: userType
    signOut: signOutType
}

export default HomePage