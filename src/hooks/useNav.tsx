import { useState } from "react"
import { useNavigate } from "react-router-dom"


const useNav = () => {

    const navigate = useNavigate()
    navigate('/admin')

}

export default useNav