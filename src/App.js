import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";
import "./App.scss";
import firebase from "./data/firebase";
import Home from "./screens/Home/Home";
import Gallery from "./screens/Gallery/Gallery";
import About from "./screens/About/About";

const App = () => {
  const [imgs, setImgs] = useState([]);

  // Get data from firebase
  useEffect(() => {
    firebase
      .firestore()
      .collection("images")
      .orderBy("id")
      .onSnapshot((snapshot) => setImgs(snapshot.docs));
  }, []);

  return (
    <>
      <Router basepath={process.env.PUBLIC_URL}>
        <Home default path="/home" imgs={imgs} />
        <Gallery path="/gallery/:id" />
        <About path="/about" />
      </Router>
    </>
  );
};

export default App;
