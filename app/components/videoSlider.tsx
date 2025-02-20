'use client';
import { motion, useTransform, useScroll, useDragControls } from "framer-motion";
import { useRef } from "react";

const VideoSlider = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const dragControls = useDragControls();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

    return (
        <section ref={containerRef} className="relative h-[534px]">
            <div className="sticky top-0 flex items-center overflow-hidden space-x-8">
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
                            className="h-[253px] bg-center mx-4 relative cursor-grab bg-no-repeat bg-contain active:cursor-grabbing flex items-center justify-center flex-shrink-0"
                            // whileHover={{ scale: 1.02 }}
                            // whileTap={{ scale: 0.98 }}
                            style={{ backgroundImage: `url(/images/gallery/gallery${item}.jpg)`, border: '1px dashed #ffffff' }}
                        >
                            <div className="absolute inset-0 bg-[#1E1E1E99]" />
                            <img
                                src={`/images/gallery/gallery${item}.jpg`}
                                className="h-[253px] w-auto invisible"
                                alt={`Gallery ${item}`}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default VideoSlider;