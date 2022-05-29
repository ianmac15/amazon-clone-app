import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const LoginLogout = () => {

    const { loginWithRedirect, logout, user, isLoading, isAuthenticated } = useAuth0()

    if (isLoading) return (<div>Loading...</div>)

    return (
        <div className='LoginLogout'>
            {isAuthenticated
                ? <div className='user-button'>
                    <div className="user">
                        <div className='user2'>Hello, {user?.nickname}</div>
                        <div className='profile'>Profile</div>
                    </div>
                    <button className="login-btn" onClick={() => logout()}>Log out</button>
                </div>
                : (<button className="login-btn" onClick={() => loginWithRedirect()}>Log In</button>)}
        </div>
    )
}

export default LoginLogout

