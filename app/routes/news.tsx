import React from 'react'
import type { Route } from './+types/news';
import Header from '~/components/header';
import Nav from '~/components/nav';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Attih Soul Music gallery" },
        { name: "description", content: "Browse Attih Soul Image Gallery" },
    ];
}

const News = () => {
    return (
        <div>
            <Nav />
            <Header title='News' />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-16 px-4 my-4">
                {[1, 2, 3, 4, 5, 6, 7].map(gallery => <div key={gallery} className="bg-white p-6 rounded-xl flex flex-col gap-6">
                    <img src={`./images/gallery/gallery${gallery}.webp`} className='aspect-video object-cover' alt="news" />
                    <div className="tracking-[4.21px] leading-[100%] align-middle flex flex-col gap-7 text-black">
                        <p className="text-2xl">
                            <span className="font-bold">
                                RELEASE
                            </span>
                            <span>
                                Nigeria Superstar Attih Soul delivers sixth album
                            </span>
                        </p>
                        <span className="font-bold underline text-xl">READ MORE</span>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default News