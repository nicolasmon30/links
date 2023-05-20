import { useLocation } from "react-router-dom"

import { Button } from "../atoms/Button"
import { Logo } from "../atoms/Logo"


export const HeaderMolecule = () => {
    const location = useLocation()
    let buttonText = ''
    let pathButton = ''

    if(location.pathname === '/'){
        buttonText = 'signup'
        pathButton = '/register'
    }else if(location.pathname === '/register'){
        buttonText = 'login'
        pathButton = '/'
    }else{
        buttonText = 'logout'
        pathButton = '#'
    }


  return (
    <>
        <Logo/>
        <Button text={buttonText} to={pathButton} />
    </>
  )
}
