import React, { useEffect, useState, useRef } from 'react'
import firebase from '../../data/firebase'
import { Link } from '@reach/router'
import './Gallery.scss'
import {gsap} from 'gsap'

const Gallery = (props) => {
    
    const [currentImg, setCurrentImg] = useState()
    const [textColor, setTextColor] = useState("")
    const [bkColor, setBkColor] = useState("")
    const [prev, setPrev] = useState()
    const [next, setNext] = useState()
    let background = useRef(null)
    

    // Get imgages details from firebase
    useEffect(() => {
        firebase
        .firestore()
        .collection("images")
        .doc(props.id)
        .onSnapshot(
            snapshot => {
                setCurrentImg(snapshot.data())
                setBkColor(snapshot.data().color)
                setTextColor(snapshot.data().textColor ? snapshot.data().textColor : "black")
            }
        )
    }, [props.id])
    
    // Logic for next and prev button
    useEffect(() => {
        firebase
        .firestore()
        .collection('images')
        .orderBy('id')
        .get()
        .then( images => {
            const array = images.docs.map(doc => doc.id)
            const myPos = array.indexOf(props.id)
            setNext(myPos + 1 === array.length ? array[0] : array[myPos + 1])
            setPrev(myPos === 0 ? array[array.length - 1 ] : array[myPos -1])
        })
    }, [props.id])

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
        <div className="gallery-screen" style={{backgroundColor: bkColor, color: textColor}}>
        <div ref={el => background = el} className="background"/>
            {
                currentImg ?
                <> 
                <div style={{backgroundImage: 'url(' + currentImg.url + ')'}} className={`gallery-img-container image${currentImg.id}`}></div>
                    <p className='img-header'>{currentImg.header}</p>
                    <div className="camera-stats">
                        {
                            <>
                                <p><span>Focal Lenght</span><br/>{currentImg.focalLenght ? currentImg.focalLenght : "unknown"}</p>
                                <p><span>Apeture</span><br/>{currentImg.aperture ? currentImg.aperture : "unknown"}</p>
                                <p><span>Shutter Speed</span><br/>{currentImg.shutterSpeed ? currentImg.shutterSpeed : "unknown"}</p>
                                <p><span>ISO</span><br/>{currentImg.iso ? currentImg.iso : "unknown"}</p>
                            </>
                        }
                    </div>
                    <div className="gallery-navs">
                        <Link style={{color: textColor}} to={process.env.PUBLIC_URL + '/gallery/' + prev}>prev</Link>
                        <Link style={{color: textColor}} to={process.env.PUBLIC_URL + '/gallery/' + next}>next</Link>
                    </div>
                </>
                :
                <h2>Please stand by</h2>
            }
            <p><Link style={{color: textColor}} className="close-btn underline_animation" to={process.env.PUBLIC_URL + '/home'}>close</Link></p>
        </div>
    )
}

export default Gallery