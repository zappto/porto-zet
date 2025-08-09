'use client'

import React from 'react'
import { playFair } from '../global/fonts'
import zovan from '../../../public/WhatsApp Image 2025-08-09 at 20.38.16.jpeg'
import Image from 'next/image'

export const Footer = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#09606D]" id="contact">
            {/* Hero Content */}
            <div className="flex flex-col items-center justify-center flex-1 text-center px-6">
                {/* Garis + Heading */}
                <div className="flex items-center w-full max-w-7xl">
                    <hr className="flex-1 border-white border-2" />
                    <h1 className={`mx-4 text-white text-3xl md:text-6xl font-bold leading-snug ${playFair.className}`}>
                        Got an <span className="text-[#DAA14B]">awesome</span> idea?
                        <br />
                        Let’s make it happen!
                    </h1>
                    <hr className="flex-1 border-white border-2" />
                </div>

                {/* Sub Text */}
                <p className={`${playFair.className} text-white mt-6 max-w-7xl font-normal text-lg md:text-4xl`}>
                    I am always excited when invited to collaborate and create new innovations, whether your idea is from scratch or improving an existing idea.
                </p>
            </div>

            {/* Footer */}
            <footer className="bg-[#EFE3D0] py-6 px-8 flex flex-col md:flex-row justify-between ">
                {/* Profile */}
                <div className="flex gap-4">
                    <Image src={zovan} alt="Profile" width={50} height={50} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                        <h2 className={`${playFair.className} font-bold text-4xl`}>Zovan Rizza Fannevi</h2>
                        <p className={`${playFair.className} text-base `}>Created with excited and challenges</p>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 ml-30 mt-4 md:mt-0">
                    <h3 className={`${playFair.className} font-bold text-[#09606D] text-xl`}>Navigation</h3>
                    <ul className={`${playFair.className} gap-4 text-lg`}>
                        <li>
                            <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">
                                Home
                            </button>
                        </li>
                        <li>
                            <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">
                                About
                            </button>
                        </li>
                        <li>
                            <button onClick={() => document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">
                                Project
                            </button>
                        </li>
                        <li>
                            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">
                                Contact
                            </button>
                        </li>
                    </ul>
                </nav>

                {/* Email */}
                <div className="flex mt-4 md:mt-0 font-bold">
                    <div className="flex items-center">
                        <Image src="../../../Portal-footer.svg" width={50} height={50} alt="bintang" className="relative left-3" />
                        <h1 className={`${playFair.className} text-lg md:text-3xl`}>Zovanfannevi34@gmail.com</h1>
                    </div>
                </div>
            </footer>
        </div>
    )
}
