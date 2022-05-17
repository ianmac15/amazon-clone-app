import { Link } from "react-router-dom"
import { userType } from "./UserLogin"

const Title = ({name, currentUser}:properties) => {
    return (
        <h1 className='title'>
            {name}
            <form className='form-control'>
                <input/>
            </form>
            {currentUser.id !== 0 ? (<div className="user"><h3 style={{fontSize:30}}>{currentUser.username}</h3><button className="btn">Sign out</button></div>) : (<Link className="btn" to={"/signIn"}>Sign In</Link>)}
            
        </h1>
    )
}

interface properties {
    name: string
    currentUser: userType
}

export default Title