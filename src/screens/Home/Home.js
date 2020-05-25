import React from 'react'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'
import { navigate } from '@reach/router'
import './Home.scss'

const Home = (props) => {

    return(
        <div className="home-container">
        <Hero />
        <div className="home-img-container">
        {
            props.imgs.map(
                (img, index) => 
                    <img 
                    onClick={() => navigate(process.env.PUBLIC_URL + '/gallery/' + img.id)} 
                        className={`home-img ${img.id}`}
                        key={index} 
                        alt={img.id} 
                        src={img.data().url}/>
                        )
                    }
                    </div>
            <Footer/>
        </div>
    )
}

export default Home