import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../../ThemeContext'
import HeaderWrapper from './HeaderWrapper'

const link = [
    {to: "/", title: "Home"},
    {to: "/about", title: "About"},
]

const Header = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)

    return <HeaderWrapper className={theme === "light" ? "light" : "dark"}>
        <div className="header container d-flex justify-content-between align-items-center">
            <ul className="d-flex header__ul py-3">
                {link.map((i,index) => 
                <li key={index} className="header__li  py-2 rounded"><Link className="btn text-white" to={i.to}>{i.title}</Link></li>
                )}
            </ul>
            <button 
                className={`${theme === "light" ? "btn-dark" : "btn-primary"} btn`} 
                onClick={toggleTheme}>
                {theme === "light" ? "Night" : "Day"}
            </button>
        </div>
    </HeaderWrapper>
}

export default Header