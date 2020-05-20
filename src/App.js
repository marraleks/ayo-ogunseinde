import React, { useEffect, useState } from 'react'
import "./App.scss";
import firebase from './data/firebase'

const App = () => { 
  const [imgs, setImgs] = useState([])

  useEffect(() => {
    firebase
    .firestore()
    .collection('images')
    .orderBy('id')
    .onSnapshot(
      snapshot => setImgs(snapshot.docs)
    )
  }, [])

  
  

  return(
    <>  
      <p>Ayo <br/> Ogunseinde</p>
    </>
  )
}

export default App