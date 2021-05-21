import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjTwo, homeObjThree } from '../Homepage/Data'

const Products = () => {
    return (
        <>
            <HeroSection {...homeObjThree}/>
            <HeroSection {...homeObjTwo}/>
        </>
    )
}

export default Products;
