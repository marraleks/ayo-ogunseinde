import React, { useEffect, useState } from 'react'
import { Router } from '@reach/router'
import "./App.scss";
import firebase from './data/firebase'
import Header from './components/Header/Header' 
import Home from './screens/Home/Home'


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
      <Header/>
        <Router basepath={process.env.PUBLIC_URL}>
          <Home default path='/home/' imgs={imgs}/>
        </Router>
    </>
  )
}

export default App