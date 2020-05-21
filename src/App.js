import React, { useEffect, useState } from 'react'
import { Router } from '@reach/router'
import "./App.scss";
import firebase from './data/firebase'
import Home from './screens/Home/Home'
import Gallery from './screens/Gallery/Gallery'



const App = () => { 
  const [imgs, setImgs] = useState([])

  // Get data from firebase
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
        <Router basepath={process.env.PUBLIC_URL}>
          <Home default path='/home' imgs={imgs}/>
          <Gallery path="/gallery/:id"/>
        </Router>
    </>
  )
}

export default App