import React from 'react'
import './Hero.scss'
import Header from '../Header/Header'

const Hero = () => {
    return(
        <>
        <Header />
        <div className={"hero-container"}>
            <h5>Ayo Ogunseinde</h5>
            <div className="professions">
                <h6>Visual artist</h6>    
                <h6>Photographer</h6>    
            </div>        
            <div className="scroll">Scroll down</div>
        </div>
        </>
    )
}

export default Hero