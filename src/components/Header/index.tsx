import { HeaderContainer } from './styles'

import { Link, NavLink } from 'react-router-dom'
import ignitelogo from '../../assets/ignite-logo.svg'
import { Timer, Scroll } from "phosphor-react"

export function Header() {
    return (
        <HeaderContainer>
            <img src={ignitelogo} alt="" />
            <nav>
                <NavLink to={"/"} title='Timer'> 
                    <Timer size={24}/> 
                </NavLink>
                <NavLink to={"/history"} title='History'> 
                    <Scroll size={24}/> 
                    
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}