import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { setHasLoggedInType, signOutType } from '../App'

const LoginLogout = () => {

    const { loginWithRedirect, logout, user, isLoading, isAuthenticated } = useAuth0()

    const goToPage = useNavigate()

    const clickMyProfile = () => {
        goToPage('/profile')
    }

    const clickShoppingCart = () => {
        goToPage('/shopping-cart')
    }

    const loginUser = () => {
        loginWithRedirect()
        // passAuth(isAuthenticated)
    }

    const logoutUser = () => {
        logout()
        // passAuth(isAuthenticated)
    }

    if (isLoading) return (<div>Loading...</div>)

    if (isAuthenticated) {

        return (
            <div className='LoginLogout'>
                <BsCart3 className='login-btn cart-button' onClick={clickShoppingCart}/>
                {/* <div className="user">
                    <div className='user2'>Hello, {user?.nickname}</div>
                    <div className='profile'>Profile</div>
                </div> */}
                <button className='login-btn' onClick={clickMyProfile}>My Profile</button>
                <button className="login-btn" onClick={logoutUser}>Log out</button>
            </div>
        )
    } else {
        return (
            <button className="login-btn" onClick={loginUser}>Log In</button>
        )
    }



    // return (

    //     {
    //         isAuthenticated
    //             ?
    //             (<div className = 'LoginLogout' >
    //                 <div className='user-button'>
    //                     <div className="cart">
    //                         <button >
    //                             <BsCart3 />
    //                         </button>

    //                     </div>

    //                     <div className="user">
    //                         <div className='user2'>Hello, {user?.nickname}</div>
    //                         <div className='profile'>Profile</div>
    //                     </div>
    //                     <button className="login-btn" onClick={() => logout()}>Log out</button>
    //                 </div>
    //             </div >)
    //             : (<button className="login-btn" onClick={() => loginWithRedirect()}>Log In</button>)}

    // )
}

interface properties {
    passAuth: setHasLoggedInType
}

export default LoginLogout

