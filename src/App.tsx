import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserLogin, { userType } from "./components/UserLogin"
import HomePage from "./components/HomePage"
import { useState } from "react"
import { newUserType } from "./components/UserLogin"
import Register from "./components/Register"
import { useEffect } from "react"
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react"



const App = () => {

    
    // const [isUserLoggedIn, setIsUserloggedIn] = useState<boolean>(false)
    const [users, setUsers] = useState<userType[]>([])
    const [currentUser, setCurrentUser] = useState<userType>({ email: '', username: '', password: '', id: 0 })

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
        await fetch(`http://localhost:7000/users/${id}`,
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

    const signOut = () => {
        setCurrentUser({ email: '', username: '', password: '', id: 0 })
    }

    

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage currentUser={currentUser}  signOut={signOut}/>} />
                <Route path="/signIn" element={<UserLogin users={users} passUser={setCurrentUser} />} />
                <Route path="/register" element={<Register onAdd={addUser} />} />
            </Routes>
        </Router>
    )
}
// signOut={signOut} αυτό πάει μέσα στο HomePage αντί για το logout

export type setHasLoggedInType = {
    (param: boolean): void
}

export type signOutType = {
    (param: void): void
}




export default App



