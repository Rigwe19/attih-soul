import { useEffect, useState } from 'react';
import Nav from './nav';
import Button from './button';
import { Portal } from 'react-portal';
import BookModal from './book-modal';
import { Link } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';

const Hero = () => {
    const [offset, setOffset] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // Add autoplay functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setOffset(prev => prev + 1000);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen overflow-hidden w-full">
            <div className="absolute inset-0 w-full h-full">
                <AnimatePresence initial={false}>
                    {[
                        { title: "Soulful Melodies", image: "/images/music/down_on_knees.webp", buttonText: "Listen Now" },
                        { title: "Live Performances", image: "/images/music/good_old_days.webp", buttonText: "Book Show" },
                        { title: "Latest Releases", image: "/images/music/dreams.webp", buttonText: "Explore Music" }
                    ].map((slide, index) => {
                        if (index === (Math.floor(offset / 1000) % 3)) {
                            return (
                                <motion.div
                                    key={index}
                                    className="absolute inset-0"
                                    initial={{ opacity: 0, x: 300 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -300 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="relative w-full h-full">
                                        <motion.img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="w-full h-full object-cover"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 1 }}
                                        />
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                            <div className="text-white space-y-8">
                                                <motion.h2
                                                    className="text-5xl font-bold"
                                                    initial={{ y: -200, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    exit={{ y: -200, opacity: 0 }}
                                                    transition={{ duration: 0.8, delay: 0.2 }}
                                                >
                                                    {slide.title}
                                                </motion.h2>
                                                <motion.button
                                                    className="px-8 py-3 bg-white text-black rounded"
                                                    initial={{ y: 50, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    exit={{ y: 50, opacity: 0 }}
                                                    transition={{ duration: 0.8, delay: 0.4 }}
                                                >
                                                    {slide.buttonText}
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        }
                        return null;
                    })}
                </AnimatePresence>
            </div>
            {/* Content Container */}
            {/* <div className="relative z-10 flex items-center justify-center md:justify-end w-full h-full bg-black/50">
                <div className="text-white px-4 w-[309px] gap-[26px] flex flex-col">
                    <p className="text-xs leading-[23px] font-normal text-center md:text-left uppercase tracking-[2px]">
                        Attih Soul is a Nigerian singer, songwriter, guitarist, and Performing artist with a passion for soulful melodies
                    </p>
                    <Button onClick={() => setIsOpen(true)} className='font-bold border-white border'>
                        BOOKINGS/INQUIRY
                    </Button>
                </div>
            </div> */}


            {/* <div className="bg-gradient-to-b from-transparent via-black/79 to-black/85 absolute bottom-0 left-0 right-0 h-24"></div>
            <div className="flex justify-between items-center z-10 w-full absolute bottom-0 left-0 right-0 px-12 h-24">
                <Link viewTransition to="/music" className="uppercase text-white">Music Videos</Link>
                <span className="uppercase text-white">SIGNUP</span>
            </div> */}
            <BookModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    );
};

export default Hero;