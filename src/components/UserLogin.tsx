import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const UserLogin = ({ passUser, users }: properties) => {

    const [userToCheck, setUserToCheck] = useState<newUserType>({
        email: '', username: '', password: ''
    })

    const navigate = useNavigate()


    const checkUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        for (let i = 0; i < users.length; i++) {
            if (userToCheck.username === users[i].username && userToCheck.password === users[i].password) {
                passUser(users[i])
                navigate('/')
                return
            }
        }

        alert("Wrong username or password")
        

    }

    return (
        <div className='signin-form'>
            <div className='userLogin'>
                <h1>Sign In</h1>
                <p>Enter username</p>
                <form onSubmit={checkUser}>
                    <input type='text' placeholder='username'
                        value={userToCheck.username} onChange={(e) => setUserToCheck({ ...userToCheck, username: e.target.value })} />
                    <input type='password' placeholder='password' value={userToCheck.password}
                        onChange={(e) => setUserToCheck({ ...userToCheck, password: e.target.value })} />
                    <button className='btn' type='submit'>Sign in</button>
                </form>
                <Link className='btn' to='/'>Back</Link>

            </div>
            <Link className="btn register" to={'/register'}>Create your account</Link>
        </div>
    )
}

export interface userType {
    email: string
    username: string
    password: string
    id: number

}

type passUserType = {
    (param: userType): void
}

export interface onAddInterface {
    (param: newUserType): void
}

export interface newUserType {
    email: string
    username: string
    password: string
}

type properties = {
    passUser: passUserType
    users: userType[]
}

export default UserLogin

//<Link className="btn register" to={"/register"}>Create your account</Link>