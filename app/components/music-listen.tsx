import React from 'react'
import Button from './button';

type Props = {
    title: string;
    href: string;
    image: string
}

const MusicListen = ({ title, href, image }: Props) => {
    return (
        <div className="w-full flex border-b border-[#7E7E7E] md:py-12 py-4 px-4 md:px-6 even:flex-row-reverse">
            <div className="aspect-square w-[55.3%] h-auto">
                <img src={image} className="aspect-square object-cover h-full" alt="" />
            </div>
            <div className="flex justify-center items-center flex-col grow  gap-2.5">
                <p className="font-open font-bold text-center md:text-lg text-xs uppercase tracking-[1.9px] leading-[24px]">{title}</p>

                <a href={href} target="_blank" className="border bg-transparent text-white not-md:h-auto not-md:p-1 not-md:w-5/6 w-40 flex justify-center py-2">Listen</a>
            </div>
        </div>
    )
}

export default MusicListen