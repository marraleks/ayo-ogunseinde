import React from 'react'
import Hero from '../../components/Hero/Hero'
import { navigate } from '@reach/router'
import './Home.scss'

const Home = (props) => {

    return(
        <div className="home-container">
        <Hero />
        {
            props.imgs.map(
                (img, index) => 
                <div className="home-img-container">
                    <img 
                    onClick={() => navigate(process.env.PUBLIC_URL + '/gallery/' + img.id)} 
                        className={`home-img ${img.id}`}
                        key={index} 
                        alt={img.id} 
                        src={img.data().url}/>
                </div>
                
            )
        }
        </div>
    )
}

export default Home