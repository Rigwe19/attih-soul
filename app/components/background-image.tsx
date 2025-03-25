import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

type Props = {
    isVisible: boolean,
    image: string
}

const BackgroundImage = ({image, isVisible}: Props) => {
    const [dimension, setDimension] = useState({
        width: 720,
        height: 520
    });
    useEffect(() => {
        const bgImage = new Image();
        bgImage.onload = (e:any) => {
            console.log(e)
            setDimension({
                width: e.target?.width ?? 720,
                height: e.target?.height ?? 520
            })
        }
        bgImage.src = image
    }, [isVisible]);
    return (
        <motion.div
            key={image}
            className="md:h-[534px] h-[240px] pb-[100%] bg-center cursor-grab bg-no-repeat overflow-hidden bg-contain active:cursor-grabbing bg-gray-100 flex items-center justify-center flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            // whileTap={{ scale: 0.98 }}
            animate={{ width: dimension.width, backgroundImage: isVisible ? `url(${image})` : '', opacity: isVisible ? 1 : 0 }}
        >
            {/* <Image
                                src={`/images/gallery/gallery${item}.webp`}
                                width={}
                                className="md:h-[534px] h-[240px] w-auto invisible"
                                alt={`Gallery ${item}`}
                            /> */}
        </motion.div>
    )
}

export default BackgroundImage