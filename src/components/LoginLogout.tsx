import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { BsCart3 } from 'react-icons/bs'

const LoginLogout = () => {

    const { loginWithRedirect, logout, user, isLoading, isAuthenticated } = useAuth0()

    if (isLoading) return (<div>Loading...</div>)

    if (isAuthenticated) {

        return (
            <div className='LoginLogout'>
                <div className="cart">
                    <button>
                        <BsCart3/>
                    </button>
                </div>
                <div className="user">
                    <div className='user2'>Hello, {user?.nickname}</div>
                    <div className='profile'>Profile</div>
                </div>
                <button className="login-btn" onClick={() => logout()}>Log out</button>
            </div>
        )
    } else {
        return(
            <button className="login-btn" onClick={() => loginWithRedirect()}>Log In</button> 
        )
    }

    isAuthenticated ? 

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

export default LoginLogout

