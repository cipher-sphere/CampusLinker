import React from 'react'
import { ArrowRight } from 'lucide-react';

function Hero() {
    return (
        <section className="relative mt-2 px-12 py-20 bg-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-0 right-0 bg-blue-100 w-2/3 h-full rounded-bl-[100px] opacity-50"></div>
                <div className="absolute top-40 right-20 bg-purple-100 w-24 h-24 rounded-full"></div>
                <div className="absolute bottom-20 left-10 bg-teal-100 w-32 h-32 rounded-full"></div>
            </div>
            
            <div className='container mx-auto px-4'>
                <div className="flex items-center justify-between gap-16">
                    {/* Text Content */}
                    <div className="max-w-xl text-xl">
                        <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-snug">
                            Connect Your <span className="text-blue-600">Campus Life</span> in One Place
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Streamline your campus experience with seamless communication, event management, and academic resources all in one platform.
                        </p>
                        <div className="flex space-x-6">
                            <a
                                href="#signup"
                                className="px-8 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
                            >
                                Get Started
                            </a>
                            <a
                                href="#features"
                                className="px-8 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition duration-300 flex items-center"
                            >
                                Learn More <ArrowRight className="ml-2" />
                            </a>
                        </div>
                    </div>

                    {/* Image Section with Decorative Elements */}
                    <div className="w-full max-w-3xl">
                        <div className="relative">
                            <div className="absolute -top-6 -left-6 w-full h-full bg-purple-200 rounded-xl"></div>
                            <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-200 rounded-xl"></div>
                            <img
                            src="https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Students collaborating on campus"
                                className="relative z-10 rounded-xl shadow-xl w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
