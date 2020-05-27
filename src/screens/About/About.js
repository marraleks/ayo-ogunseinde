import React, { useEffect,  useRef} from 'react'
import './About.scss'
import Header from '../../components/Header/Header'
import {gsap} from 'gsap'

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const About = () => {

    let background = useRef(null)

    useEffect(() => {
        gsap.to([background], 1, {
            delay: 0.2,
            ease: "power3.out",
            width: "0",
            stagger:{
                amount: 0.15,
            }
        })
    })

    return(
        <div className="about-container">
            <div  ref={el => background = el} className="background"></div>
            <Header/>
            <div className="about-hero">
                <div className="about-profile-pic"/>
                <h6 className="about-header">I LIKE TO TAKE <br/> PICTURES</h6>
                <p className="about-subheader">I'm Ayo Ogunseinde, an visual artist & photographer based in Houston. </p>
            </div>
            <section className="about-paragraph-container">
            <p className="about-paragraph">I stared taking pictures when I was a little kid, back then we didn’t have the equipment we have nowadays, which though me a lot. Everything I know about photographing and editing is self though, so yeah; I’m passionate about this s**t. 
            </p>
            <p className="about-paragraph">
            Some of my work I share on Unsplash. It makes me happy when I see people use my work in their projects. The feeling of accomplishment I get from it is special. I also do freelancing, you gotta do what you gotta do to survive. 
            </p>
            <div className="about-getintouch">
                <p>get in touch</p>
                <a href="mailto:armedshutter@loremIpsum.com">armedshutter@loremIpsum.com</a>
            </div>
            </section>

        </div>
    )
}

export default About