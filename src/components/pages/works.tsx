import Image from 'next/image'
import React from 'react'
import gpm from '../../../public/gpm.jpeg'
import ecoTrack from '../../../public/ecoTrack.jpeg'
import porto from '../../../public/porto.jpeg'
import project from '../../../public/project-1.jpeg'
import { MoveRight } from 'lucide-react'

export const Works = () => {
    const worksData = [
        {
            id: 1,
            title: 'Abstract Image',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tempore natus, sunt distinctio, laboriosam mollitia nisi quo doloribus id facere blanditiis fugiat, est neque expedita.',
            tags: ['Pattern', 'Abstract'],
            image: gpm,
        },
        {
            id: 2,
            title: 'Creative Design',
            description: 'Desain kreatif yang mengekspresikan imajinasi tanpa batas dalam bentuk visual.',
            tags: ['Design', 'Creative'],
            image: ecoTrack,
        },
        {
            id: 3,
            title: 'Modern UI',
            description: 'Tampilan antarmuka yang bersih dan modern untuk pengalaman pengguna terbaik.',
            tags: ['UI', 'Modern'],
            image: porto,
        },
        {
            id: 4,
            title: 'Modern UI',
            description: 'Tampilan antarmuka yang bersih dan modern untuk pengalaman pengguna terbaik.',
            tags: ['UI', 'Modern'],
            image: project,
        },
    ]

    return (
        <div className="w-full min-h-screen bg-[#09606D] px-6 py-20" id="project">
            <h1 className="text-[#DAA14B] font-bold font-helvetica text-5xl text-center mb-15">Latest Works</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {worksData.map((work) => (
                    <div key={work.id} className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-xl transition-transform duration-300 hover:scale-105">
                        {/* Gambar */}
                        <div className="relative aspect-video w-full">
                            <Image src={work.image} alt={work.title} fill className="object-cover" />
                        </div>

                        {/* Konten */}
                        <div className="flex flex-col p-4 flex-1">
                            {/* Tags */}
                            <div className="flex gap-2 font-bold flex-wrap mb-2">
                                {work.tags.map((tag) => (
                                    <span key={tag} className="bg-[#DAA14B] px-3 py-1 font-helvetica rounded-2xl text-sm text-center">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Title & Description */}
                            <div className="flex-1">
                                <h2 className="text-xl font-bold font-helvetica">{work.title}</h2>
                                <p className="text-sm font-helvetica text-justify">{work.description}</p>
                            </div>

                            {/* Arrow - Stay at Bottom */}
                            <div className="mt-auto flex justify-end">
                                <div className="bg-[#DAA14B] rounded-full p-2 flex items-center justify-center ">
                                    <MoveRight width={20} height={20} className="transition-transform duration-500 hover:[transform:rotateX(180deg)]" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
