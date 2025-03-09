import { useState } from "react";
import Button from "./button";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";

type Props = {}

const Product = (props: Props) => {
    // const [size, setSize] = useState('M');
    // const [quantity, setQuantity] = useState(1);
    const initialValue = {
        fullName: '',
        email: '',
        address: '',
        size: 'M',
        quantity: 1
    }
    const [formData, setFormData] = useState(initialValue);
    const handleQuantityChange = (quantity: number) => {
        setFormData(pv => ({...pv, quantity: (pv.quantity === 1 && quantity === -1) ? pv.quantity : pv.quantity + quantity}))
    }
    const [showNotification, setShowNotification] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        try {
            const response = await axios.post('https://api.brevo.com/v3/smtp/email', {
                sender: { name: "Order", email: 'info@attihsoul.com' },
                bcc: [{ email: "info@attihsoul.com", name: "Attih Soul" }],
                subject: "New Order Request",
                htmlContent: `
                    <h1>New Order from Attih Soul Store</h1>
                    <div>
                        <p>Customer Details:</p>
                        <ul>
                            <li>Name: ${formData.fullName}</li>
                            <li>Email: ${formData.email}</li>
                            <li>Shipping Address: ${formData.address}</li>
                        </ul>
                        <p>Order Details:</p>
                        <ul>
                            <li>Product: T-Shirt</li>
                            <li>Size: ${formData.size}</li>
                            <li>Quantity: ${formData.quantity}</li>
                            <li>Total Price: £${30 * formData.quantity}</li>
                        </ul>
                    </div>
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
                setShowModal(false)
                setTimeout(() => {
                    setShowNotification(false)
                }, 5000);
            }
        } catch (error) {
            console.error(error)
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-3'>
            <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-2 md:gap-10 font-radio tracking-[2px]">
                    <h3 className="uppercase font-medium md:text-3xl md:leading-9">Merchandise name</h3>
                    <div className="flex gap-1.5 md:gap-3.5">
                        <span className="md:text-2xl text-[#7E7E7E] md:leading-7">Size:</span>
                        <span className="font-medium text-lg md:text-3xl md:leading-9 ">{formData.size}</span>
                    </div>
                </div>
                <p className="md:text-xl text-sm md:leading-6 tracking-[1.58px] md:tracking-[4.58px] text-[#8E8E8E]">Short description about merchandise here</p>
            </div>
            <div className="flex flex-col relative max-h-[480px]">
                <img src="/images/products/tshirt.png" alt="" />
                <div className="absolute w-full bottom-6">
                    <h3 className="font-radio font-medium text-3xl leading-9 tracking-[2px] text-center">₤30</h3>
                </div>
            </div>
            <div className="flex md:flex-col justify-between flex-wrap space-y-4">
                <div className="flex md:gap-5 gap-2">
                    {['S', 'M', 'L', 'XL'].map(index => <button onClick={() => setFormData(pv=>({...pv, size: index}))} key={index} className={`rounded-full md:h-10 md:w-10 w-8 h-8 cursor-pointer ${formData.size === index ? 'bg-white text-black' : 'bg-neutral-700 text-white hover:bg-neutral-800'} `}>{index}</button>)}
                </div>
                <div className="flex gap-11">
                    <div className="flex">
                        <button onClick={() => handleQuantityChange(-1)} className={`w-8 h-10 flex cursor-pointer hover:bg-[#D0CCCC] justify-center items-center ${formData.quantity === 1 ? 'bg-[#393939]' : 'bg-[#A19E9E]'} `}>-</button>
                        <span className="w-8 h-10 flex justify-center items-center bg-[#393939]">{formData.quantity}</span>
                        <button onClick={() => handleQuantityChange(1)} className="w-8 h-10 flex cursor-pointer hover:bg-[#D0CCCC] justify-center items-center bg-[#A19E9E]">+</button>
                    </div>
                    <Button onClick={() => setShowModal(true)} className="border text-white border-white hidden md:flex">Buy Now</Button>
                </div>
                <Button onClick={() => setShowModal(true)} className="border text-white border-white md:hidden w-full">Buy Now</Button>
            </div>
            <AnimatePresence>
                {showNotification && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-md"
                    >
                        Order placed successfully!
                    </motion.div>
                )}
                {showModal &&
                    (<>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 z-50"
                            onClick={() => setShowModal(false)} />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] overflow-auto h-[70vh] md:h-auto"
                        >
                            <div className="relative flex flex-col gap-4 bg-black border border-neutral-800 p-6 shadow-xl w-[60vw] max-w-[462px]">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <h2 className="text-2xl font-radio mb-4">Checkout Details</h2>
                                    <div className="flex flex-col gap-2 md:gap-6 w-full">
                                        <label htmlFor="fullName" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Full Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            placeholder="Full Name"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            required
                                            className="border border-[#4E4E4E] p-2 focus-visible:outline-0 placeholder:text-neutral-300"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 md:gap-6 w-full">
                                        <label htmlFor="email" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="border border-[#4E4E4E] p-2 focus-visible:outline-0 placeholder:text-neutral-300"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 md:gap-6 w-full">
                                        <label htmlFor="address" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Shipping Address</label>
                                        <textarea
                                            name="address"
                                            placeholder="Shipping Address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            required
                                            rows={4}
                                            className="border border-[#4E4E4E] p-2 focus-visible:outline-0 placeholder:text-neutral-300"
                                        />
                                    </div>
                                    <div className="flex justify-center">
                                        <Button className="px-8 py-2 mx-auto text-white border border-white hover:bg-black/40 transition">
                                            Complete Purchase
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </>)}
            </AnimatePresence>
        </div>
    )
}

export default Product