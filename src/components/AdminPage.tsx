import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import { setHasLoggedInType, signOutType } from '../App'
import '../styling/adminpage.css'
import Products from './Products'

const AdminPage = () => {

    const [isAdmin, setIsAdmin] = useState<boolean>(true)
    const [isAddPressed, setIsAddPressed] = useState<boolean>(false)
    const {logout} = useAuth0()

    const pressAddButton = () => {
        setIsAddPressed(!isAddPressed)
    }

    const logoutUser = () => {
        logout()
    }


    return (
        <div className='container'>
            <div className='title2'>Administration</div>
            <div className='aaa'>
                <button onClick={pressAddButton} className='add-button'>Add products</button>
            </div>
            <Products isAdmin={isAdmin} isAddPressed = {isAddPressed}/>
            <button onClick={logoutUser}>Log out</button>
        </div>
    )
}



export default AdminPage