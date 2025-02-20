import React from 'react'

type Props = {
    title: string;
}

const Header = ({ title }: Props) => {
    return (
        <div className="pt-4 md:pt-24 md:mb-12 md:pl-12 pl-4 border-b border-[#7E7E7E]">
            <p className="font-bold md:text-[73.26px] text-4xl leading-[86.01px] tracking-[4.58p] uppercase">{title}</p>
        </div>
    )
}

export default Header