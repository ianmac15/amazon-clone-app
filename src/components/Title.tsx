import { Link } from "react-router-dom"
import { signOutType } from "../App"
import { userType } from "./UserLogin"

const Title = ({ name, currentUser, signOut }: properties) => {
    return (
        <h1 className='title'>
            <h3 className="webpage-name">{name}</h3>
            <form className='form-control'>
                <input />
            </form>
            {currentUser.id !== 0
                ? (<div className="user">
                    <h3 style={{ fontSize: 30 }}>
                        {currentUser.username}
                    </h3>
                    <button className="btn" onClick={() => signOut()}>Sign out</button>
                </div>)
                : (<Link className="btn" to={"/signIn"}>Sign In</Link>)}

        </h1>
    )
}

interface properties {
    name: string
    currentUser: userType
    signOut: signOutType
}

export default Title