'use client';
import { motion, useTransform, useScroll, useDragControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "./image";
// import BackgroundImage from "./background-image";
// import { useDrag } from 'react-use-gesture'
// const width = [[799,512],[1440, 1440],];
// const gallery = [1, 2, 3, 4, 5, 6, 7].map((item) =>{
//     image: `/images/gallery/gallery${item}.webp`,
//     width
// })
const HorizontalSlider = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const dragControls = useDragControls();
    // const { ref, drag } = useDrag()

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

    const [imageSrc, setImageSrc] = useState('./images/album/album4.webp');
    const [isVisible, setIsVisible] = useState(false);
    // const imageRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                        observer.disconnect()
                    }
                })
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => observer.disconnect();
    }, []);

    // useEffect(() => {
    //     if (isVisible) {
    //         setImageSrc(src)
    //     }
    // }, [isVisible]);
    return (
        <section ref={containerRef} className="relative md:h-[534px] h-[240px]">
            <div className="sticky top-0 flex items-center overflow-hidden w-full">
                <motion.div
                    style={{ x }}
                    className="flex"
                    drag="x"
                    dragControls={dragControls}
                    dragConstraints={{
                        left: -1600, // Adjust based on your content width
                        right: 0
                    }}
                    dragElastic={0.1}
                    dragMomentum={true}
                    whileTap={{ cursor: "grabbing" }}
                >
                    {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                        <motion.div
                            key={item}
                            className="md:h-[534px] h-[240px] bg-center cursor-grab bg-no-repeat overflow-hidden bg-contain active:cursor-grabbing bg-gray-100 flex items-center justify-center flex-shrink-0"
                            whileHover={{ scale: 1.02 }}
                        >
                            <Image key={item}
                                src={`/images/gallery/gallery${item}.webp`}
                                className="md:h-[534px] h-[240px] w-auto pointer-events-none"
                                alt={`Gallery ${item}`}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HorizontalSlider;