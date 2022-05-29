import Title from "./Title"
import Products from "./Products"
import { userType } from "./UserLogin"
import { signOutType } from "../App"
import '../styling/mainPage.css'

const HomePage = ({ currentUser, signOut }: properties) => {



    return (
        <div >
            <Title name="Market Town" currentUser={currentUser} signOut={signOut} />

            <div className="main-page">
                <div className="welcome-message-container">
                    <div className="welcome-message">Choose from a great variety of products</div>
                </div>
                <Products />
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