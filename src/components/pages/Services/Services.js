import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjFour, homeObjOne} from "./Data"

const Services = () => {
    return (
        <>
            <HeroSection {...homeObjOne}/>
            <HeroSection {...homeObjFour}/>
        </>
    )
}

export default Services;
