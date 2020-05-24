import React, { useEffect, useState } from 'react'
import firebase from '../../data/firebase'
import { Link } from '@reach/router'
import './Gallery.scss'

const Gallery = (props) => {
    
    const [currentImg, setCurrentImg] = useState()
    const [bkColor, setBkColor] = useState("")
    const [prev, setPrev] = useState()
    const [next, setNext] = useState()

    // Get current img details from firebase
    useEffect(() => {
        firebase
        .firestore()
        .collection("images")
        .doc(props.id)
        .onSnapshot(
            snapshot => {
                setCurrentImg(snapshot.data())
                setBkColor(snapshot.data().color)
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
    
    return(
        <>
        <div className="gallery-screen" style={{backgroundColor: bkColor}}>
            {
                currentImg ?
                <> 
                <div style={{backgroundImage: 'url(' + currentImg.url + ')'}} className="gallery-img-container"></div>
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
                        <Link to={process.env.PUBLIC_URL + '/gallery/' + prev}>prev</Link>
                        <Link to={process.env.PUBLIC_URL + '/gallery/' + next}>next</Link>
                    </div>
                </>
                :
                <h2>Please stand by</h2>
            }
        </div>
            <Link className="close-btn" to={process.env.PUBLIC_URL + '/home'}>close</Link>
        </>
    )
}

export default Gallery