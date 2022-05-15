import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './Register'

const UserLogin = ({successfullLogin}:properties) => {

    const [users, setUsers] = useState<userType[]>([])
    const [userToCheck, setUserToCheck] = useState<newUserType>({
        email:'', username:'', password:''})
    const [isRegisterPanelOpen, setIsRegisterPanelOpen] = useState<boolean>(false)

    useEffect(
        () => {

            const getUsersFromServer = async () => {
                const usersFromServer = await getUsers()
                setUsers(usersFromServer)
            }


            getUsersFromServer()
        }, []
    )

    const getUsers = async () => {
        const res = await fetch("http://localhost:7000/users")
        const data = res.json()
        return data
    }

    const getUserByID = async (id: number) => {
        const res = await fetch(`http://localhost:7000/users/${id}`)
        const data = res.json()
        return data
    }

    const addUser = async (newUser: newUserType) => {
        const res = await fetch("http://localhost:7000/users",
            {
                method: "POST",
                headers: { "content-type": 'application/json' },
                body: JSON.stringify(newUser)
            }
        )

        const data = await res.json()

        setUsers([...users, data])
    }

    const deleteUser = async (id: number) => {
        const res = await fetch(`http://localhost:7000/users/${id}`,
            {
                method: 'DELETE'
            }
        )

        setUsers(
            users.filter(
                (user) => user.id === id
            )
        )
    }

    const editUser = async (id: number, updEmail: string, updUsername: string, updPassword: string) => {

        const userToEdit = await getUserByID(id)
        const updUser: userType = { ...userToEdit, email: updEmail, username: updUsername, password: updPassword }

        const res = await fetch(`http://localhost:7000/users/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(updUser)
            }
        )

        const data: userType = await res.json()

        setUsers(
            users.map(
                (user) => user.id === id ? { ...user, email: data.email, username: data.username, password: data.password } : user
            )
        )

    }

    const checkUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        for (let i = 0; i < users.length; i++) {
            if (userToCheck.username == users[i].username) {
                successfullLogin = true
                return
            }
        }
        

    }

    const openRegisterPanel = () => {
        setIsRegisterPanelOpen(!isRegisterPanelOpen)
    }

    return (


        <div>{isRegisterPanelOpen ? <Register onAdd={addUser} goBack={openRegisterPanel} /> :
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
                <button className="btn register" onClick={openRegisterPanel}>Create your account</button>
            </div>}
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
    successfullLogin: boolean
}

export default UserLogin

//<Link className="btn register" to={"/register"}>Create your account</Link>