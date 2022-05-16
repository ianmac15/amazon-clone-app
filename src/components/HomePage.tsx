import Title from "./Title"
import Products from "./Products"
import { userType } from "./UserLogin"

const HomePage = ({currentUser}:properties) => {

    
    return (
        <div>
            <Title name="Online Shop" currentUser={currentUser}/>
            <div className="products">
                <Products />
            </div>
        </div>
    )
}

type properties = {
    currentUser: userType
}

export default HomePage