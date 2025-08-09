'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import zovan from '../../../public/WhatsApp Image 2025-08-09 at 20.38.16.jpeg'
import Instagram from '../../../public/Instagram.png'
import LinkedIn from '../../../public/LinkedIn.png'
import Gmail from '../../../public/Gmail.png'

export const About = () => {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleFlip = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <div className="min-h-screen w-full bg-[#09606D] flex px-16 py-24 text-white" id="about">
            {/* Left Section */}
            <div className="max-w-4/5 w-full mt-3">
                <h1 className="text-5xl font-helvetica-bold font-bold text-[#DAA14B] text-center mb-2">About Me</h1>
                <p className="font-helvetica px-20 text-2xl text-justify">
                    Hello, my name is Zovan Rizza. You can call me Zet or Zovan. I am a product designer specializing in UI/UX and I am an active student at Dian Nuswantoro
                    University. I can solve design problems by providing the best solutions, using creative approaches and design thinking to produce designs that are not only
                    visually appealing but also functional and work smoothly. Ready for the next project?
                </p>

                <div className="flex w-full mt-6 items-start justify-between gap-25 px-20">
                    {/* Contact */}
                    {/* <div className="flex-1 ml-18">
                        <h2 className="text-5xl font-bold font-helvetica text-[#DAA14B]">Contact me</h2>
                        <div className="flex flex-col relative items-center">
                            <div className="backdrop-blur-3xl mt-2 w-full bg-[#093D45]/20 border border-[#666666] shadow-lg shadow-[#]  rounded-xl px-8 py-4 text-white text-center text-xl font-semibold">
                                You can reach me at
                            </div>
                        </div>
                    </div> */}

                    {/* Divider */}
                    {/* <div className="w-[4px] self-stretch bg-white/50 rounded-4xl ml-20" /> */}

                    {/* Experience */}
                    <div className="flex-1">
                        <h2 className="text-5xl font-bold font-helvetica text-[#DAA14B]">Experience</h2>
                        <ul className="list-disc pl-5 mt-4 space-y-3">
                            <li className="text-xl font-helvetica font-bold text-[#FDFFFF]">
                                Freelance
                                <p className="text-sm font-helvetica-light text-[#FDFFFF] font-light">2024 - Present</p>
                            </li>
                            <li className="text-xl font-helvetica font-bold text-[#FDFFFF]">
                                Sendingdev.id
                                <p className="text-sm font-helvetica-light text-[#FDFFFF] font-extralight">June 2025 - Present</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-1/3 flex items-center justify-center mt-8">
                <div className="relative w-full max-w-xs h-[460px]">
                    {/* Card Container with 3D perspective */}
                    <div
                        className="relative w-full h-full cursor-pointer transition-transform duration-700"
                        style={{
                            transformStyle: 'preserve-3d',
                            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                        }}
                        onClick={handleFlip}
                    >
                        {/* Front Side */}
                        <div className="absolute inset-0 rounded-3xl" style={{ backfaceVisibility: 'hidden' }}>
                            <div className="relative w-full max-w-xs rounded-3xl [box-shadow:22px_-10px_40px_#C0E3E9]">
                                <div className="relative bg-gradient-to-bl from-[#D2ECF2]  to-[#0E8992] border border-[#0E8992]/75 w-full h-[460px] rounded-3xl p-10 flex flex-col shadow-2xl hover:cursor-pointer">
                                    {/* Image placeholder */}
                                    <Image src={zovan} alt="image-user" width={100} height={100} className="bg-gray-400 w-full h-64 rounded-3xl mb-4 shadow-2xl"></Image>

                                    {/* Text */}
                                    <div className="text-center mt-3">
                                        <h1 className="text-[#DAA14B] text-xl">Zet</h1>
                                        <h1 className="text-[#FDFFFF] text-xl font-bold font-helvetica">Zovan Rizza</h1>
                                    </div>

                                    {/* Elipse Effects */}
                                    <div className="absolute bottom-9 left-0 w-[320px] h-[2px] rotate-8 bg-white/35 opacity-65 blur-[2px] pointer-events-none" />
                                    <div className="absolute bottom-[22px] left-0 w-[280px] h-[2px] rotate-8 bg-white/35 opacity-65 blur-[2px] pointer-events-none" />
                                    <div className="absolute bottom-[13px] left-0 w-[170px] h-[2px] rotate-8 bg-white/35 opacity-65 blur-[2px] pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Back Side */}
                        <div
                            className="absolute inset-0 rounded-3xl"
                            style={{
                                backfaceVisibility: 'hidden',
                                transform: 'rotateY(180deg)',
                            }}
                        >
                            <div className="relative w-full max-w-xs rounded-3xl [box-shadow:22px_-10px_40px_#C0E3E9]">
                                <div className="relative bg-[#2B979F] border border-[#0E8992]/75 w-full h-[460px] rounded-3xl  flex flex-col shadow-2xl hover:cursor-pointer">
                                    <div className="p-15">
                                        <h1 className="text-white text-3xl text-center font-bold font-helvetica">Contact Me</h1>
                                    </div>
                                    <div className="px-10 gap-y-5">
                                        <a className="flex justify-start text-center items-start gap-5 mb-10" href="https://www.instagram.com/zovanrf/" target="_blank">
                                            <Image src={Instagram} alt="Instagram-icon" height={30} width={30} className="" />
                                            <h2 className="text-white text-center justify-center items-center flex text-xl font-bold font-helvetica">zovanrf</h2>
                                        </a>
                                        <a className="flex justify-start text-center items-start gap-5 mb-10">
                                            <Image src={LinkedIn} alt="Instagram-icon" height={30} width={30} className="" />
                                            <h2 className="text-white text-center justify-center items-center flex text-xl font-bold font-helvetica">Zovan Rizza</h2>
                                        </a>
                                        <a className="flex justify-start text-center items-start gap-5 mb-10">
                                            <Image src={Gmail} alt="Instagram-icon" height={30} width={30} className="" />
                                            <h2 className="text-white text-center justify-center items-center flex text-lg font-bold font-helvetica">zovanfannevi34@gmail.com</h2>
                                        </a>
                                    </div>
                                    {/* Elipse Effects */}
                                    <div className="absolute bottom-9 left-0 w-[320px] h-[2px] rotate-8 bg-white/35 opacity-65 blur-[2px] pointer-events-none" />
                                    <div className="absolute bottom-[22px] left-0 w-[280px] h-[2px] rotate-8 bg-white/35 opacity-65 blur-[2px] pointer-events-none" />
                                    <div className="absolute bottom-[13px] left-0 w-[170px] h-[2px] rotate-8 bg-white/35 opacity-65 blur-[2px] pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
