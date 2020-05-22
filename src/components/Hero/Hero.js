import React from 'react'
import './Hero.scss'
import Header from '../Header/Header'

//Stop vh to change when you scroll up and down on phone
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const Hero = () => {
    return(
        <>
        <Header />
        <div className={"hero-container"}>
            <h5>Ayo Ogunseinde</h5>
            <div className="professions">
                <p>Visual artist</p>    
                <p>Photographer</p>    
            </div>        
            <div className="scroll">Scroll down</div>
        </div>
        </>
    )
}

export default Hero