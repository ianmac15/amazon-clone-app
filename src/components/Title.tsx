import Button from "./Button"
import { Link } from "react-router-dom"
import { userType } from "./UserLogin"

const Title = ({name, currentUser}:properties) => {
    return (
        <h1 className='title'>
            {name}
            <form className='form-control'>
                <input/>
            </form>
            {currentUser ? (<h1>{currentUser.username}</h1>) : (<Link className="btn" to={"/signIn"}>Sign In</Link>)}
            
        </h1>
    )
}

interface properties {
    name: string
    currentUser: userType
}

export default Title