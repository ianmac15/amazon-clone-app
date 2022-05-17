import { Link } from "react-router-dom"
import { useState } from "react"
import { newUserType, onAddInterface} from "./UserLogin"

const Register = ({ onAdd }: properties) => {
    const [newUser, setNewUser] = useState<newUserType>(
        {
            email:'',
            username:'',
            password:''
        })


    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!newUser.email) {
            alert('Please add an email')
            return
        }

        if(!newUser.username) {
            alert('Please add an email')
            return
        }

        if(!newUser.password) {
            alert('Please add an email')
            return
        }

        onAdd(newUser)

        setNewUser({
            email:'',
            username:'',
            password:''
        })
    }

    return (
        <div className='signin-form'>

            <div className='userLogin'>
                <h1>Register</h1>

                <form onSubmit={onSubmit}>
                    <p>Enter email</p>
                    <input type='text' value={newUser.email} placeholder='Example: user@gmail.com'
                        onChange={(e) => setNewUser({...newUser, email: e.target.value})} />
                    <p>Enter username</p>
                    <input type='text' value={newUser.username} placeholder='Example: jonh.doe'
                        onChange={(e) => setNewUser({...newUser, username: e.target.value})} />
                    <p>Enter password</p>
                    <input type='text' value={newUser.password}
                        onChange={(e) => setNewUser({...newUser, password: e.target.value})} />
                    <input className='submit' type='submit' value='Continue' />
                </form>
                <Link className='btn' to={'/signIn'} >Back</Link>
            </div>
        </div>
    )
}

interface properties {
    onAdd: onAddInterface
}

export default Register