'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface SplashProps {
    parent: ReactNode
}

export const Splash = ({ parent }: SplashProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [showContent, setShowContent] = useState<boolean>(false)
    const [hideBackground, setHideBackground] = useState<boolean>(false)

    const text = 'HELLO'
    const letters: string[] = text.split('')

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        // Animasi seperti mesin slot/domino
        const animateLetters = (): void => {
            letters.forEach((_, index) => {
                const letterElement = container.querySelector(`[data-letter="${index}"]`) as HTMLDivElement
                if (letterElement) {
                    // Setiap huruf mulai scroll dari posisi acak
                    const randomStart = Math.random() * -200 - 100 // Random start position dari -100 sampai -300
                    letterElement.style.transform = `translateY(${randomStart}vh)`

                    // Semua huruf langsung mulai bergerak ke bawah secara continuous
                    letterElement.style.transition = 'transform 0.1s linear'

                    // Function untuk animasi continuous scrolling
                    const startScrolling = () => {
                        let currentPosition = randomStart
                        const scrollSpeed = 0.8 // Kecepatan scroll

                        const scroll = () => {
                            currentPosition += scrollSpeed
                            letterElement.style.transform = `translateY(${currentPosition}vh)`

                            // Continue scrolling sampai 1 detik, lalu mulai berhenti satu per satu
                            if (Date.now() - startTime < 1000) {
                                requestAnimationFrame(scroll)
                            } else {
                                // Berhenti dengan delay berurutan (seperti domino)
                                setTimeout(() => {
                                    letterElement.style.transition = 'transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)'
                                    letterElement.style.transform = 'translateY(0)' // Berhenti di posisi normal
                                }, index * 100) // Delay berurutan untuk efek domino
                            }
                        }

                        const startTime = Date.now()
                        requestAnimationFrame(scroll)
                    }

                    // Mulai scrolling untuk setiap huruf
                    startScrolling()
                }
            })
        }

        // Mulai animasi langsung tanpa delay
        setTimeout(animateLetters, 0)

        // Setelah semua huruf selesai animasi, mulai fade background
        const totalAnimationTime: number = 500 + 1000 + letters.length * 100 + 500 // initial delay + scroll time + domino stop time + settle time

        setTimeout(() => {
            setShowContent(true) // Render children
            setTimeout(() => {
                setHideBackground(true) // Fade background
            }, 100)
        }, totalAnimationTime)
    }, [letters])

    return (
        <>
            {/* Splash Screen */}
            <div
                ref={containerRef}
                className={`fixed inset-0 bg-[#09606D] z-50 flex items-center justify-center transition-opacity duration-800 ${
                    hideBackground ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
                style={{
                    transition: hideBackground ? 'opacity 0.8s ease-out' : 'none',
                }}
            >
                <div className="flex space-x-4 text-white text-6xl font-extrabold overflow-hidden">
                    {letters.map((char: string, index: number) => (
                        <div
                            key={index}
                            data-letter={index}
                            className="inline-block transform-gpu"
                            style={{
                                transform: 'translateY(0)',
                                willChange: 'transform',
                            }}
                        >
                            {char}
                        </div>
                    ))}
                </div>
            </div>

            {/* Content yang akan ditampilkan setelah splash */}
            {showContent && <div className="w-full min-h-screen">{parent}</div>}
        </>
    )
}
