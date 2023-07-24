'use client'

import { useEffect, useRef } from "react"

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const bluredVideoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        videoRef.current?.play()
        bluredVideoRef.current?.play()

    }, [])

    return (
        <section className="relative h-80 md:h-screen lg:h- mb-20 flex flex-col items-center justify-center text-center text-white py-0 px-3">
            <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                <video
                    className="min-w-full min-h-full absolute object-cover"
                    src="/Ajara-Tourist-Alphabet.mp4"
                    autoPlay
                    muted
                    loop>

                </video>
            </div>
            <div className="video-content space-y-2">
                <h1 className="font-light text-3xl lg:text-6xl tracking-widest font-fira-go">#გამომყევიაჭარაში</h1>
                <h3 className="font-light text-xl lg:text-2xl tracking-widest mt-5 ">მოიგე 100 000 ლარი</h3>
            </div>
        </section>
    )
}

export default Hero
