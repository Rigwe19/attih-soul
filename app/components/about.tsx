import React from 'react'

type Props = {}

const About = (props: Props) => {
    return (
        <div className='bg-[#1E1E1E5E] my-[110px] md:mx-[50px] mx-2 py-10 md:px-12 px-2 gap-6 flex flex-col'>
            <h2 className="font-bold text-4xl tracking-[1.9px]  text-center">ATTIH SOUL</h2>
            <p className="tracking-[1.9px] md:leading-[37.8px] leading-6 md:text-xl text-base text-center">Attih Soul is a Nigerian singer, songwriter, and guitarist with a passion for soulful melodies. Born on February 13, 1990, in Calabar, Nigeria, Attih began his music career performing at open mic events and has since captivated audiences worldwide. A finalist in major competitions like Nigerian Idol and Project Fame West Africa, he gained recognition for his emotive voice and engaging performances. In 2017, Attih composed and performed Nigeria's Democracy Day theme song and released his debut single, Say You Love Me. His debut album, Shades of Emotions, launched in 2023, showcases his mastery of blending soulful tunes with heartfelt lyrics. Now based in Barcelona, Spain, Attih continues to inspire through his music, live performances, and his journey as a trailblazing African artist.</p>
        </div>
    )

}

export default About