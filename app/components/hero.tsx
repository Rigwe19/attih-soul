import { useEffect, useState } from 'react';
import Nav from './nav';
import Button from './button';

const Hero = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative h-screen overflow-hidden w-full">

            {/* Content Container */}
            <div className="relative z-10 flex items-center justify-end w-full h-full bg-black/50">
                <div className="text-white px-4 w-[309px] gap-[26px] flex flex-col">
                    <p className="text-xs leading-[23px] font-normal uppercase tracking-[2px]">
                        Attih Ekpenyong, known professionally as Attih Soul, is a Nigerian singer, songwriter, and guitarist with a passion for soulful melodies
                    </p>
                    <Button>
                        BOOKINGS/INQUIRY
                    </Button>
                </div>
            </div>


            <div className="bg-gradient-to-b from-transparent via-black/79 to-black/85 absolute bottom-0 left-0 right-0 h-24"></div>
            <div className="flex justify-between items-center z-10 w-full absolute bottom-0 left-0 right-0 px-12 h-24">
                <span className="uppercase text-white">Music Videos</span>
                <span className="uppercase text-white">SIGNUP</span>
            </div>
        </div>
    );
};

export default Hero;