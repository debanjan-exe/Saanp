import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import {homeObjFour} from "./Data"

const Home = () => {
    return (
        <>
            <HeroSection {...homeObjFour}/>
            <Pricing/>
        </>
    )
}

export default Home;
