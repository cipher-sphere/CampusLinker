import React from 'react'
import Navbar from './landingcomponents/Navbar'
import Features from './landingcomponents/Features'
import Hero from './landingcomponents/Hero'
function Landingpage() {
    return (
        <div className='font-sans'>
            <Navbar></Navbar>
            <main>
                <Hero></Hero>
                <Features></Features>
            </main>
        </div>
    )
}

export default Landingpage