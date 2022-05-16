import Button from "./Button"
import { Link } from "react-router-dom"

const Title = ({name, successfullLogin}:properties) => {
    return (
        <h1 className='title'>
            {name}
            <form className='form-control'>
                <input/>
            </form>
            {successfullLogin ? (<Link className="btn" to={"/signIn"}>Sign In</Link>) : (<label>{}</label>)}
            
        </h1>
    )
}

interface properties {
    name: string
    successfullLogin: boolean
}

export default Title