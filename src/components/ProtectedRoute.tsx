import { withAuthenticationRequired } from "@auth0/auth0-react"
import AdminPage from "./AdminPage"

const ProtectedRoute = () => {

    const Comp1 = withAuthenticationRequired(AdminPage, {onRedirecting: () => <>Loading...</>})

  return (
    <Comp1/>
  )
}

export default ProtectedRoute