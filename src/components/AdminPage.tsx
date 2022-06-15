import { useState } from 'react'
import { setHasLoggedInType, signOutType } from '../App'
import '../styling/adminpage.css'
import Products from './Products'

const AdminPage = () => {

    const [isAdmin, setIsAdmin] = useState<boolean>(true)
    const [isAddPressed, setIsAddPressed] = useState<boolean>(false)

    const pressAddButton = () => {
        setIsAddPressed(!isAddPressed)
    }


    return (
        <div className='container'>
            <div className='title2'>Administration</div>
            <div className='aaa'>
                <button onClick={pressAddButton} className='add-button'>Add products</button>
            </div>
            <Products isAdmin={isAdmin} isAddPressed = {isAddPressed}/>
        </div>
    )
}



export default AdminPage