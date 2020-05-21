import React, { useEffect, useState } from 'react'
import firebase from '../../data/firebase'
import { Link } from '@reach/router'

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
        <>
            {
                currentImg ? 
                <img alt={currentImg.id} src={currentImg.url} />
                :
                <h2>Please stand by</h2>
            }
            <Link to={process.env.PUBLIC_URL + '/home'}>close</Link>
            <Link to={process.env.PUBLIC_URL + '/gallery/' + prev}>prev</Link>
            <Link to={process.env.PUBLIC_URL + '/gallery/' + next}>next</Link>
        </>
    )
}

export default Gallery