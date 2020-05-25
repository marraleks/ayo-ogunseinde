import React, { useState } from 'react'
import {MdMenu} from "react-icons/md"
import {MdClose} from "react-icons/md"
import { Link } from '@reach/router'
import './Header.scss'

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
                    <Link onClick={() => window.scrollTo(0)} className={"header-logo"} to={process.env.PUBLIC_URL + "/home"}>Ayo <br/> Ogunseinde</Link>
                </div>
                <div className="site-navs">
                    <Link to={process.env.PUBLIC_URL + "/gallery/bilde1"}>images</Link>
                    <Link to={process.env.PUBLIC_URL + "/gallery/bilde1"}>about</Link>
                    <Link to={process.env.PUBLIC_URL + "/gallery/bilde1"}>contact</Link>
                </div>
            </header>
        </>
       
    )
}

export default Header