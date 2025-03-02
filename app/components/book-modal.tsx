import { motion, AnimatePresence } from 'framer-motion'
import { IoMdClose } from 'react-icons/io'
import Button from './button'
import { useEffect } from 'react'
import { Portal } from 'react-portal'

interface BookModalProps {
    isOpen: boolean
    onClose: () => void
}

const BookModal = ({ isOpen, onClose }: BookModalProps) => {
    useEffect(() => {
        if (isOpen) {
            window.document.body.style.overflow = 'hidden';
        } else {
            window.document.body.style.overflow = 'auto'
        }
    }, [isOpen]);
    // if (!isOpen) return null

    return (
        <Portal>
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-50"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.5, opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] overflow-auto h-[70vh] md:h-auto"
                    >
                        <div className="relative flex flex-col gap-4 bg-black border border-neutral-800 p-6 shadow-xl w-[90vw] max-w-[962px]">
                            <button
                                onClick={onClose}
                                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                            >
                                <IoMdClose size={24} />
                            </button>
                            <div className="flex justify-center">
                                <div className="gap-1 flex flex-col max-w-[659px]">
                                    <h2 className="text-lg md:text-[28px] uppercase md:leading-[33px] font-radio tracking-[2px] text-center font-medium mb-4">Book a Session</h2>
                                    <p className="text-sm text-center leading-4 md:tracking-[4.58px]">In order to book for an event or service, fill out the booking form and we will contact you</p>
                                </div>
                            </div>


                            <form className="space-y-4">
                                <div className="flex flex-col md:flex-row gap-2 md:gap-12 w-full">
                                    <div className="flex flex-col gap-2 md:gap-6 w-full">
                                        <label htmlFor="name" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Name</label>
                                        <input type="text" className="border border-[#4E4E4E] py-2 focus-visible:outline-0 placeholder:text-neutral-300" />
                                    </div>
                                    <div className="flex flex-col gap-2 md:gap-6 w-full">
                                        <label htmlFor="name" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Email</label>
                                        <input type="text" className="border border-[#4E4E4E] py-2 focus-visible:outline-0 placeholder:text-neutral-300" />
                                    </div>
                                </div>
                                <p className="font-semibold leading-5 tracking-[3.8] text-center">Event & Services Details</p>

                                <div className="flex flex-col md:flex-row gap-2 md:gap-12 w-full">
                                    <div className="flex flex-col gap-2 md:gap-6 w-full">
                                        <label htmlFor="name" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Event/Services</label>
                                        <input type="text" className="border border-[#4E4E4E] py-2 focus-visible:outline-0 placeholder:text-neutral-300" />
                                    </div>
                                    <div className="flex flex-col gap-2 md:gap-6 w-full">
                                        <label htmlFor="name" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Date</label>
                                        <input type="text" className="border border-[#4E4E4E] py-2 focus-visible:outline-0 placeholder:text-neutral-300" />
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-2 md:gap-12 w-full">
                                    <div className="flex flex-col gap-2 md:gap-6 w-full">
                                        <label htmlFor="name" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Time</label>
                                        <input type="text" className="border border-[#4E4E4E] py-2 focus-visible:outline-0 placeholder:text-neutral-300" />
                                    </div>
                                    <div className="flex flex-col gap-2 md:gap-6 w-full">
                                        <label htmlFor="name" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Location</label>
                                        <input type="text" className="border border-[#4E4E4E] py-2 focus-visible:outline-0 placeholder:text-neutral-300" />
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-2 md:gap-12 w-full">
                                    <div className="flex flex-col gap-2 md:gap-6 w-full">
                                        <label htmlFor="name" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Budget</label>
                                        <input type="text" className="border border-[#4E4E4E] py-2 focus-visible:outline-0 placeholder:text-neutral-300" />
                                    </div>
                                    <div className="flex flex-col gap-2 md:gap-6 w-full">
                                        <label htmlFor="name" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Message</label>
                                        <input type="text" className="border border-[#4E4E4E] py-2 focus-visible:outline-0 placeholder:text-neutral-300" />
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <Button
                                        className="px-8 py-2 mx-auto text-white border border-white hover:bg-black/40 transition"
                                    >
                                        Book Now
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
        </Portal>
    )
}

export default BookModal