import { motion, AnimatePresence } from 'framer-motion'
import { IoMdClose } from 'react-icons/io'
import Button from './button'
import { useEffect, useState } from 'react'
import { Portal } from 'react-portal'
import axios from 'axios'

interface BookModalProps {
    isOpen: boolean
    onClose: () => void
}

const BookModal = ({ isOpen, onClose }: BookModalProps) => {
    const initialValue = {
        name: '',
        email: '',
        eventServices: '',
        date: '',
        time: '',
        location: '',
        budget: '',
        message: ''
    }
    const [formData, setFormData] = useState(initialValue);
    const [showNotification, setShowNotification] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    useEffect(() => {
        if (isOpen) {
            window.document.body.style.overflow = 'hidden';
        } else {
            window.document.body.style.overflow = 'auto'
        }
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        try {
            const response = await axios.post('https://api.brevo.com/v3/smtp/email', {
                sender: { name: "Booking", email: 'info@attihsoul.com' },
                to: [{ email: "booking@attihsoul.com", name: "Attih Soul" }],
                subject: "New Booking Request",
                htmlContent: `
                    <h1>New Booking Request</h1>
                    <h2>Client Details:</h2>
                    <p>Name: ${formData.name}</p>
                    <p>Email: ${formData.email}</p>
                    <h2>Event Details:</h2>
                    <p>Event/Services: ${formData.eventServices}</p>
                    <p>Date: ${formData.date}</p>
                    <p>Time: ${formData.time}</p>
                    <p>Location: ${formData.location}</p>
                    <p>Budget: ${formData.budget}</p>
                    <h2>Additional Message:</h2>
                    <p>${formData.message}</p>
                `
            }, {
                headers: {
                    'api-key': import.meta.env.VITE_BREVO_API_KEY,
                    "Content-Type": "application/json"
                }
            })
            if (response.status === 201) {
                setShowNotification(true)
                setFormData(initialValue)
                onClose()
                setTimeout(() => {
                    setShowNotification(false)
                }, 5000);
            }
        } catch (error) {
            console.error(error)
        }
    };

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
                                {/* Header content remains the same */}

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="flex flex-col md:flex-row gap-2 md:gap-12 w-full">
                                        <div className="flex flex-col gap-2 md:gap-6 w-full">
                                            <label htmlFor="name" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="border border-[#4E4E4E] py-2 focus-visible:outline-0 placeholder:text-neutral-300"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 md:gap-6 w-full">
                                            <label htmlFor="email" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="border border-[#4E4E4E] py-2 focus-visible:outline-0 placeholder:text-neutral-300"
                                            />
                                        </div>
                                    </div>

                                    <p className="font-semibold leading-5 tracking-[3.8] text-center">Event & Services Details</p>

                                    <div className="flex flex-col md:flex-row gap-2 md:gap-12 w-full">
                                        <div className="flex flex-col gap-2 md:gap-6 w-full">
                                            <label htmlFor="eventServices" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Event/Services</label>
                                            <input
                                                type="text"
                                                name="eventServices"
                                                value={formData.eventServices}
                                                onChange={handleChange}
                                                className="border border-[#4E4E4E] py-2 focus-visible:outline-0 placeholder:text-neutral-300"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 md:gap-6 w-full">
                                            <label htmlFor="date" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Date</label>
                                            <input
                                                type="date"
                                                name="date"
                                                value={formData.date}
                                                onChange={handleChange}
                                                className="border border-[#4E4E4E] py-2 focus-visible:outline-0 placeholder:text-neutral-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-2 md:gap-12 w-full">
                                        <div className="flex flex-col gap-2 md:gap-6 w-full">
                                            <label htmlFor="time" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Time</label>
                                            <input
                                                type="time"
                                                name="time"
                                                value={formData.time}
                                                onChange={handleChange}
                                                className="border border-[#4E4E4E] py-2 focus-visible:outline-0 placeholder:text-neutral-300"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 md:gap-6 w-full">
                                            <label htmlFor="location" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Location</label>
                                            <input
                                                type="text"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                className="border border-[#4E4E4E] py-2 focus-visible:outline-0 placeholder:text-neutral-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-2 md:gap-12 w-full">
                                        <div className="flex flex-col gap-2 md:gap-6 w-full">
                                            <label htmlFor="budget" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Budget</label>
                                            <input
                                                type="text"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                className="border border-[#4E4E4E] py-2 focus-visible:outline-0 placeholder:text-neutral-300"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 md:gap-6 w-full">
                                            <label htmlFor="message" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Message</label>
                                            <textarea
                                                rows={6}
                                                name="message"
                                                value={formData.message}
                                                onChange={e=>setFormData(pv=>({...pv, message: e.target.value}))}
                                                // onChange={handleChange}
                                                className="border border-[#4E4E4E] py-2 focus-visible:outline-0 placeholder:text-neutral-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex justify-center">
                                        <Button
                                            // type="submit"
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