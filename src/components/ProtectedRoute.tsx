import { withAuthenticationRequired } from "@auth0/auth0-react"
import AdminPage from "./AdminPage"

const ProtectedRoute = ({component}:properties) => {

    const Comp1 = withAuthenticationRequired(component, {onRedirecting: () => <>Loading...</>, returnTo: window.location.pathname})

  return (
    <Comp1/>
  )
}

interface properties {
  component: any
}

export default ProtectedRoute