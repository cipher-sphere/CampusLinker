import React from 'react'
import Navbar from './landingcomponents/Navbar'
import Features from './landingcomponents/Features'
import Hero from './landingcomponents/Hero'
import Testimonials from './landingcomponents/Testimonials'
function Landingpage() {
    return (
        <div className='font-sans'>
            <Navbar></Navbar>
            <main>
                <Hero></Hero>
                <Features></Features>
                <Testimonials></Testimonials>
            </main>
        </div>
    )
}

export default Landingpage