import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Portal } from 'react-portal';
import Button from './button';

interface AlbumImage {
    id: number;
    src: string;
    alt: string;
}

const images: AlbumImage[] = [
    { id: 1, src: '/images/album/album1.jpg', alt: 'Image 1' },
    { id: 2, src: '/images/album/album2.jpg', alt: 'Image 2' },
    { id: 3, src: '/images/album/album3.jpg', alt: 'Image 3' },
    { id: 4, src: '/images/album/album4.jpg', alt: 'Image 4' },
];
const Album = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [selectedImage, setSelectedImage] = useState<AlbumImage | null>(null);

    const handleImageHovered = (image: AlbumImage, event: React.MouseEvent) => {
        // const rect = event.currentTarget.getBoundingClientRect();
        // setModalPosition({ top: rect.top, left: rect.left });
        console.log(image.id)
        setSelectedImage(image);
        setHoveredId(image.id)
    };

    return (
        <div className="w-full relative">
            <div className="grid grid-cols-4 relative p-4 group hover:opacity-0 transition-all duration-1000">
                {images.map((image) => (
                    <motion.div
                        key={image.id}
                        className="relative h-[725px]"
                        layout
                        // initial={{ gridColumn: `${image.id} / span 1` }}
                        onMouseEnter={(e) => handleImageHovered(image, e)}
                        onMouseLeave={() => setHoveredId(null)}
                    >

                        <motion.img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                            // animate={{
                            //     opacity: hoveredId === image.id ? 1 : 0.8
                            // }}
                            whileHover={{
                                translateX: image.id > 2 ? '-50%' : '50%',
                                opacity: 0
                            }}
                            transition={{ duration: 0.2 }}
                        />
                    </motion.div>
                ))}
                {/* {selectedImage && (
                <Modal
                    image={selectedImage}
                    onClose={() => setSelectedImage(null)}
                    position={modalPosition}
                />
            )} */}
            </div>
            {hoveredId === 1 && <motion.div className="grid grid-cols-4 p-4 absolute inset-0 z-10 pointer-events-none">
                <motion.div
                    animate={{
                        opacity: 1
                    }}
                    initial={{
                        opacity: 0
                    }}
                    transition={{ duration: 0.5 }}
                    className="col-span-2 z-10 flex">
                    <div className="w-1/2 relative pointer-events-auto"
                        onMouseEnter={(e) => handleImageHovered(selectedImage!, e)}
                    // onMouseLeave={(e) => setHoveredId(null)}
                    >
                        <img src="/images/album/album1.jpg" className="object-cover brightness-25 h-full" alt="" />
                        <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                            <p className="uppercase">Album Name</p>
                            <Button className="border border-white text-white bg-transparent w-2/3">Watch Here</Button>
                        </div>
                    </div>

                    <img src="/images/album/album1.jpg" className="w-1/2 h-full object-cover" alt="" />
                </motion.div>
                <motion.div
                    animate={{
                        translateX: '0',
                        opacity: 0.5
                    }}
                    initial={{
                        translateX: '-200%',
                        opacity: 0
                    }}
                    transition={{ duration: 0.5 }} className="">
                    <img src="/images/album/album3.jpg" className="w-full h-full object-cover" alt="" />
                </motion.div>
                <motion.div
                    animate={{
                        translateX: '0',
                        opacity: 0.5
                    }}
                    initial={{
                        translateX: '-200%',
                        opacity: 0
                    }} transition={{ duration: 0.5 }} className="">
                    <img src="/images/album/album4.jpg" className="w-full h-full object-cover object-center]" alt="" />
                </motion.div>
            </motion.div>}
            {hoveredId === 2 && <motion.div className="grid grid-cols-4 p-4 absolute inset-0 z-10 pointer-events-none">
                <motion.div className=""></motion.div>
                <motion.div
                    animate={{
                        opacity: 1,
                        translateX: '0'
                    }}
                    initial={{
                        opacity: 0,
                        translateX: '50%'
                    }}
                    transition={{ duration: 0.5 }}
                    className=" col-span-2 z-10"></motion.div>
                <motion.div className=""></motion.div>
            </motion.div>}
            {hoveredId === 3 && <motion.div className="grid grid-cols-4 p-4 absolute inset-0 z-10 pointer-events-none">
                <motion.div className=""></motion.div>
                <motion.div className=""></motion.div>
                <motion.div
                    animate={{
                        opacity: 1
                    }}
                    initial={{
                        opacity: 0
                    }}
                    transition={{ duration: 0.5 }}
                    className=" col-span-2 z-10"></motion.div>
            </motion.div>}
            {hoveredId === 4 && <motion.div className="grid grid-cols-4 p-4 absolute inset-0 z-10 pointer-events-none">
                <motion.div className=""></motion.div>
                <motion.div className=""></motion.div>
                <motion.div
                    animate={{
                        opacity: 1
                    }}
                    initial={{
                        opacity: 0
                    }}
                    transition={{ duration: 0.5 }}
                    onMouseEnter={(e) => handleImageHovered(selectedImage!, e)}
                    className=" col-span-2 z-0 flex items-center justify-end pr-6">
                    {/* <Button className=" pointer-events-auto">Click Me</Button> */}
                </motion.div>
            </motion.div>}
        </div>
    );
};

export default Album;
// import { createPortal } from 'react-dom';

interface ModalProps {
    image: AlbumImage;
    onClose: () => void;
    position: { top: number; left: number };
}

const Modal = ({ image, onClose, position }: ModalProps) => {
    const [sibling, setSibling] = useState<number[]>([]);
    const settings = [
        { id: 1, sibling: [1, 2] },
        { id: 2, sibling: [2, 3] },
        { id: 3, sibling: [2, 3] },
        { id: 4, sibling: [3, 4] }
    ]
    useEffect(() => {
        const setting = settings.find(setting => setting.id === image.id);
        if (!setting) return;
        setSibling(setting.sibling)
    }, []);
    if (typeof window === 'undefined') return null;
    const handleMouseEnter = (img: AlbumImage) => {
        if (img.id === image.id) {
            return
        }
        onClose()
    }

    return (
        <Portal>
            {/* <motion.div
                initial={{ opacity: 0, y: position.top + 20 }}
                animate={{ opacity: 1, y: position.top }}
                exit={{ opacity: 0, y: position.top + 20 }}
                className="fixed z-50 w-1/2 pr-4"
                style={{ top: position.top, left: position.left }}
            > */}
            {/* <div className="grid grid-cols-4 relative p-4">
                    <img src={image.src} alt={image.alt} className="h-[725px] w-full" />
                </div> */}
            <div className="grid grid-cols-4 p-4">
                {images.map((image, index) => (
                    <motion.div
                        key={image.id}
                        className="relative h-[725px] "
                        layout
                        onMouseEnter={(e) => handleMouseEnter(image)}
                    // initial={{ gridColumn: `${image.id} / span 1` }}
                    >

                        <motion.img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover "
                            // animate={{
                            //     opacity: hoveredId === image.id ? 1 : 0.8
                            // }}
                            transition={{ duration: 0.2 }}
                        />
                        {!sibling.includes(index) && <div className="absolute bg-black/70 z-20 inset-0"></div>}
                    </motion.div>
                ))}
            </div>

            {/* </motion.div> */}
        </Portal>
    );
};

// const Album = () => {
//     const [hoveredId, setHoveredId] = useState<number | null>(null);
//     const [selectedImage, setSelectedImage] = useState<AlbumImage | null>(null);
//     const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

//     const handleImageClick = (image: AlbumImage, event: React.MouseEvent) => {
//         const rect = event.currentTarget.getBoundingClientRect();
//         setModalPosition({ top: rect.top, left: rect.left });
//         setSelectedImage(image);
//     };

//     return (
//         <>
//             {/* Existing Album JSX */}
//             {selectedImage && (
//                 <Modal
//                     image={selectedImage}
//                     onClose={() => setSelectedImage(null)}
//                     position={modalPosition}
//                 />
//             )}
//         </>
//     );
// };