import Booking from '~/components/booking'
import Footer from '~/components/footer'
import Header from '~/components/header'
import Nav from '~/components/nav'
import GalleryComponent from '~/components/slider'
import type { Route } from './+types/gallery'
import Image from '~/components/image'
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import { Portal } from 'react-portal'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Attih Soul Music gallery" },
        { name: "description", content: "Browse Attih Soul Image Gallery" },
    ];
}
const images = [1,2,3,4,5,6,7].map(value=>({original: `./images/gallery/gallery${value}.webp`}))
const Gallery = () => {
    const [active, setActive] = useState(-1);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        if(showModal){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'unset'
        }
    }, [showModal]);
    return (
        <div className="bg-black ">
            <Nav />
            <Header title='Gallery' />
            {/* <GalleryComponent /> */}
            
                <Portal>
                    {showModal && (<motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 flex justify-center items-center"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.9 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black"
                            onClick={() => {setShowModal(false);setActive(-1)}}
                        />
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        >
                            <ImageGallery startIndex={active} showFullscreenButton={false} onScreenChange={e=>console.log(e)} showThumbnails={false} items={images} />
                        </motion.div>
                    </motion.div>)}
                </Portal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-16 px-4 my-4">
                {[1,2,3,4,5,6,7].map((gallery, index)=><Image onClick={()=>{setActive(index); setShowModal(true)}} key={gallery} className="aspect-square w-full object-cover" src={`./images/gallery/gallery${gallery}.webp`} alt="gallery" />)}
            </div>
            <Booking />
            <Footer />
        </div >
    )
}

export default Gallery