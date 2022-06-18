import { useState } from "react"
import { useNavigate } from "react-router-dom"


const useNav = ({link}:properties) => {

    const navigate = useNavigate()
    navigate(link)

}

interface properties {
    link: any
}

export default useNav