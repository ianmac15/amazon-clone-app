import Title from "./Title"
import Products from "./Products"
import { userType } from "./UserLogin"
import { signOutType } from "../App"

const HomePage = ({currentUser, signOut}:properties) => {

    

    return (
        <div>
            <Title name="Online Market" currentUser={currentUser} signOut={signOut}/>
            <div className="products">
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