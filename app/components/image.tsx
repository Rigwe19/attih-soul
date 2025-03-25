import clsx from 'clsx'
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'

type Props = {
    src: string;
    alt: string;
    className?: string;
    placeholder?: string;
    onClick?: VoidFunction
}

const Image = ({ src, alt, className, placeholder, onClick }: Props) => {
    const [imageSrc, setImageSrc] = useState('./images/album/album4.webp');
    const [isVisible, setIsVisible] = useState(false);
    const imageRef = useRef<HTMLImageElement | null>(null)
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

        if (imageRef.current) {
            observer.observe(imageRef.current)
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            setImageSrc(src)
        }
    }, [isVisible, src]);
    return (
        <motion.img ref={imageRef} onClick={onClick} src={imageSrc} alt={alt} className={clsx(className)} loading='lazy' />
    )
}

export default Image