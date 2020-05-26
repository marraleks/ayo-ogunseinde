import React from 'react'
import './Footer.scss'

const Header = () => {

    
    return(
        <footer>
            <a className="underline_animation" href="mailto:armedshutter@loremIpsum.com">Mail</a>
            <div className="footer-dot"></div>
            <a className="underline_animation" href='https://www.instagram.com/armedshutter/' target="_blank" rel="noopener noreferrer">Instagram</a>
            <div className="footer-dot"></div>
            <a className="underline_animation" href='https://www.armedshutter.com/' target="_blank" rel="noopener noreferrer">Portfolio</a>
        </footer>
       
    )
}

export default Header