import Title from "./components/Title"
import Products from "./components/Products"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import UserLogin from "./components/UserLogin"
import HomePage from "./components/HomePage"


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signIn" element={<UserLogin />} />
      </Routes>
    </Router>
  )
}







export default App



