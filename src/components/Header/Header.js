import React, { useState } from 'react'
import {MdMenu} from "react-icons/md"
import {MdClose} from "react-icons/md"
import { Link } from '@reach/router'
import './Header.scss'
import DarkModeToggle from '../../darkmode/DarkModeToggle'

const Header = () => {

    const [show, setShow] = useState(false)

    return(
        <>
            <div className="burger" onClick={() => setShow(!show)}>
               {
                   !show 
                   ?
                   <MdMenu color ='#EAEAEA' size='32' />
                   :
                   <MdClose color ='#EAEAEA' size='32'/>
               }
            </div>
            <header className={show ? 'visible' : ''} onClick={() => setShow(false)}>
                <div>
                    <p><Link onClick={() => window.scrollTo(0)} className={"header-logo underline_animation"} to={process.env.PUBLIC_URL + "/home"}>Ayo <br/> Ogunseinde</Link></p>
                </div>
                <div className="site-navs">
                    <p><Link className="underline_animation" to={process.env.PUBLIC_URL + "/gallery/bilde1"}>images</Link></p>
                    <p><Link className="underline_animation" to={process.env.PUBLIC_URL + "/about"}>about</Link></p>
                    <DarkModeToggle/>
                </div>
            </header>
        </>
       
    )
}

export default Header