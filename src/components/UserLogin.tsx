import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './Register'
import { setHasLoggedInType } from '../App'

const UserLogin = ({setHasLoggedIn, users}:properties) => {

    const [userToCheck, setUserToCheck] = useState<newUserType>({
        email:'', username:'', password:''})
    // const [isRegisterPanelOpen, setIsRegisterPanelOpen] = useState<boolean>(false)

    

    const checkUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        for (let i = 0; i < users.length; i++) {
            if (userToCheck.username == users[i].username) {
                setHasLoggedIn(true)
                return
            }
        }
    }

    // const openRegisterPanel = () => {
    //     setIsRegisterPanelOpen(!isRegisterPanelOpen)
    // }

    return (
            <div className='signin-form'>
                <div className='userLogin'>
                    <h1>Sign In</h1>
                    <p>Enter username</p>
                    <form onSubmit={checkUser}>
                        <input type='text' placeholder='Example user@gmail.com'
                           value={userToCheck.username} onChange={(e) => setUserToCheck({...userToCheck,username:e.target.value})} />
                        <input type='text' placeholder='password' value={userToCheck.password}
                            onChange={(e) => setUserToCheck({...userToCheck,password:e.target.value})} />
                        <input className='submit' type='submit' value='Continue' />
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

export interface onAddInterface {
    (param: newUserType): void
}

export interface newUserType {
    email: string
    username: string
    password: string
}

type properties = {
    setHasLoggedIn: setHasLoggedInType
    users: userType[]
}

export default UserLogin

//<Link className="btn register" to={"/register"}>Create your account</Link>