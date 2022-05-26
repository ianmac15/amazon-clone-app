import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const LoginLogout = () => {

    const {loginWithRedirect, logout, user, isLoading, isAuthenticated } = useAuth0()

    if (isLoading) return (<div>Loading...</div>)

    return (
        <div>
            {isAuthenticated
                ? (<div className="user">
                    <h3 style={{ fontSize: 30 }}>
                        {user?.nickname}
                    </h3>
                    <button className="btn" onClick={() => logout()}>Log out</button>
                    {/* <button className="btn" onClick={() => signOut()}>Sign out</button> */}
                </div>)
                // : (<Link className="btn" to={"/signIn"}>Sign In</Link>)}
                : (<button className="btn" onClick={() => loginWithRedirect()}>Log In</button>)}
        </div>
    )
}

export default LoginLogout