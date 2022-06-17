import React from 'react'
import { useNavigate, Route, Navigate } from 'react-router-dom'
import AdminPage from './AdminPage'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import { signOutType } from '../App'

const AuthProviderWithCallback = ({ component }: properties) => {

  const navigate = useNavigate()

  const goHomePage = () => {
    navigate('/')
  }

  return (
    <Route path="/admin" element={withAuthenticationRequired(component, { onRedirecting: () => <>Loading...</> })} />
  )
}

interface properties {
  component: any
}


export default AuthProviderWithCallback