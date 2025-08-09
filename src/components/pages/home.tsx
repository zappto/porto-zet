'use client'
import Image from 'next/image'
import { playFair } from '@/components/global/fonts'
import bintang from '../../../public/Portal.svg'
import { useEffect, useState } from 'react'

export const HomePage = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // Trigger animations after component mounts
        const timer = setTimeout(() => {
            setIsLoaded(true)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div
            className="w-full min-h-screen flex items-center justify-center px-12 transition-all duration-10000 ease-in-out"
            style={{
                background: isLoaded ? 'linear-gradient(to bottom, #D2ECF2, #09606D)' : '#09606D',
            }}
            id='home'
        >
            <div className={`flex flex-col items-center ml-4 mt-10 mr-10 transition-all duration-1500 ease-out delay-1000 ${isLoaded ? 'opacity-100 ' : 'opacity-0 '}`}>
                <div className="flex flex-col items-center">
                    <div className="w-[1px] h-120 bg-[#DAA14B]"></div>
                    <div className="text-[#DAA14B] font-helvetica-narrow font-bold text-xl rotate-[-90deg] tracking-[0.2em] mt-8">2025</div>
                </div>

                {/* Scroll Text di bawah */}
                <div className="text-[#DAA14B] absolute bottom-24 left-40 text-lg mt-4 animate-bounce">Scroll down ↓</div>
            </div>

            {/* CENTER COLUMN */}
            <div className="flex-1 text-center justify-center items-center">
                <h1 className={`${playFair.className} text-[180px] lg:text-[254px] text-white leading-none text-shadow mb-0`}>
                    Hell
                    <span className="relative inline-block">
                        <Image src={bintang} alt="bintang" width={50} height={50} className="absolute top-[66px] left-[66%] -translate-x-1/2 -rotate-12" />o
                    </span>
                </h1>
                <h2
                    className={`${playFair.className} text-white text-4xl md:text-7xl leading-tight mt-[-20px] text-shadow transition-all duration-1500 ease-out delay-1500 ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    I’m <span className="text-[#DAA14B]">Zet</span>, a UI/UX Designer
                </h2>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-8 ml-12">
                <Image
                    src={bintang}
                    alt="star1"
                    width={220}
                    height={220}
                    className={`transition-all duration-1500 ease-out delay-2000 absolute top-[20%] right-[7%]  ${
                        isLoaded ? 'opacity-100 translate-y-0 rotate-[168deg]' : 'opacity-0 translate-y-8 '
                    }`}
                />
                <Image
                    src={bintang}
                    alt="star2"
                    width={220}
                    height={220}
                    className={`transition-all duration-1500 ease-out delay-2300 absolute top-[34%] right-[11%] ${
                        isLoaded ? 'opacity-100 translate-y-0 rotate-[168deg]' : 'opacity-0 translate-y-8'
                    }`}
                />
                <Image
                    src={bintang}
                    alt="star3"
                    width={220}
                    height={220}
                    className={`transition-all duration-1500 ease-out delay-2600  absolute top-[43%] right-[3%] ${
                        isLoaded ? 'opacity-100 translate-y-0 rotate-[168deg]' : 'opacity-0 translate-y-8'
                    }`}
                />
            </div>
        </div>
    )
}
