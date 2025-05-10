import React, { useState, useEffect } from 'react';
import { BookOpen } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
            <div className='container mx-auto px-4'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                        <BookOpen className='h-8 w-8 font-extrabold text-blue-600'/>
                        <span className='text-2xl font-bold text-gray-800'>CampusLinker</span>
                    </div>
                    <div className='flex items-center space-x-8'>
                        <HashLink smooth to="#features" className='text-gray-700 hover:text-blue-600 transition-colors duration-500'>Features</HashLink>
                        <HashLink smooth to="#events" className='text-gray-700 hover:text-blue-600 transition-colors duration-500'>Events</HashLink>
                        <HashLink smooth to="#resources" className='text-gray-700 hover:text-blue-600 transition-colors duration-500'>Resources</HashLink>
                        <HashLink smooth to="#testimonials" className='text-gray-700 hover:text-blue-600 transition-colors duration-500'>Testimonials</HashLink>
                        <HashLink smooth to="#login" className='border-2 border-blue-500 px-3 py-1.5 rounded-md text-blue-500 hover:bg-blue-200'>Log In</HashLink>
                        <HashLink smooth to="#signup" className='border border-blue-500 px-3 py-1.5 rounded-md bg-blue-500 text-white hover:bg-blue-600'>Sign Up</HashLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
