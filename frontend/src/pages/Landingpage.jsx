import React from 'react'
import Navbar from './landingcomponents/Navbar'
import Features from './landingcomponents/Features'
import Hero from './landingcomponents/Hero'
import Testimonials from './landingcomponents/Testimonials'
import Footer from './landingcomponents/Footer'
function Landingpage() {
    return (
        <div className='font-sans'>
            <Navbar></Navbar>
            <main>
                <Hero></Hero>
                <Features></Features>
                <Testimonials></Testimonials>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Landingpage