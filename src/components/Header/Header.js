import React from 'react'
import { Link } from '@reach/router'
import './header.scss'

const Header = () => {
    return(
        <header>
            <div>
                <Link onClick={() => window.scrollTo(0)} className={"header-logo"} to={process.env.PUBLIC_URL + "/home"}>Ayo <br/> Ogunseinde</Link>
            </div>
            <div>
                <p>images</p>
                <p>about</p>
                <p>contact</p>
            </div>
        </header>
       
    )
}

export default Header