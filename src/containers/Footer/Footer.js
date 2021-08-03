import React, { useContext, useState } from 'react'
import FooterWrapper from './FooterWrapper'
import ThemeContext from '../../ThemeContext'
import { Link } from 'react-router-dom'
import FooterMenu from '../../data/Footer'


function Footer() {
    const {theme} = useContext(ThemeContext)
    const [download, setdownload] = useState('Бесплатное приложение для твоего телефона')
    

    return (
        <FooterWrapper className={`shadow ${theme === "light" ? "light" : "dark"}`}>
            <hr />
            <div className="container py-2">
                <div className="footer py-3 px-2 container">
                    <h1>Footer</h1>
                </div>
                <div className="footer-content">
                    <div className="footer-content__list row">
                        <ul className="col-4">
                            {FooterMenu['left'].map((i,index) => <li key={index} className="my-2"><Link to={i.to} className="text-white">{i.title}</Link></li>)}
                        </ul>
                        <ul className="col-4">
                            {FooterMenu['mid'].map((i,index) => <li key={index} className="my-2"><Link to={i.to} className="text-white">{i.title}</Link></li>)}
                        </ul>
                        <ul className="col-4">
                            <div className="footer-download-links ms-md-4">
                               {FooterMenu['right'].map((i,index) => <a className="my-2" onMouseLeave={() => {setdownload('Бесплатное приложение для твоего телефона')}} onMouseOver={() => {setdownload(i.state)}} href={i.to} key={index}><img src={i.icon} alt="Link" /></a>)}
                            </div>
                            <p>{download}</p>
                        </ul>
                    </div>
                </div>
            </div>
        </FooterWrapper>
        
    )
}

export default Footer