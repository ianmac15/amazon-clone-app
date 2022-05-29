import { useState } from "react"
import setHasLoggedInType from "../App"

const SearchBar = () => {

const [isClicked, setIsClicked] = useState<boolean>(false);

const onclick = () => {
    setIsClicked(!isClicked)
    
}

    
  return (
    <input className='input'  />
  )
}

interface properties {
    
}

export default SearchBar

