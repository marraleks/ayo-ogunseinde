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
                <p className="about-subheader">I'm Ayo Ogunseinde, an visual artist & photographer based in Huoston. </p>
            </div>
            <section className="about-paragraph-container">
            <p className="about-paragraph">Lorem Ipsum is   simply dummy text of the printing and   typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p className="about-paragraph">
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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