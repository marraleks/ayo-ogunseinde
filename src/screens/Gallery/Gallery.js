import React, { useEffect, useState } from 'react'
import firebase from '../../data/firebase'
import { Link } from '@reach/router'
import './Gallery.scss'

const Gallery = (props) => {
    
    const [currentImg, setCurrentImg] = useState()
    const [prev, setPrev] = useState()
    const [next, setNext] = useState()

    // Get current img details from firebase
    useEffect(() => {
        firebase
        .firestore()
        .collection("images")
        .doc(props.id)
        .onSnapshot(
            snapshot => setCurrentImg(snapshot.data())
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
        <div className="gallery-screen">
            {
                currentImg ?
                <> 
                <div style={{backgroundImage: 'url(' + currentImg.url + ')'}} className="gallery-img-container"/>
                <div className="gallery-img-description">
                    <h5>{currentImg.header}</h5>
                    <p>This paragraph is ment for the artist to describe the picture or fill in with relevant information regarding the image. </p>
                </div>
                </>
                :
                <h2>Please stand by</h2>
            }

                <div className="gallery-navs">
                    <Link to={process.env.PUBLIC_URL + '/gallery/' + prev}>prev</Link>
                    <Link to={process.env.PUBLIC_URL + '/gallery/' + next}>next</Link>
                </div>
            <Link className="close-btn" to={process.env.PUBLIC_URL + '/home'}>close</Link>
            
        </div>
    )
}

export default Gallery