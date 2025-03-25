import axios from 'axios';
import { useState } from "react";
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Booking from "~/components/booking";
import Button from "~/components/button";
import Footer from "~/components/footer";
import Nav from "~/components/nav";
import Social from "~/components/social";
import type { Route } from "./+types/contact";
import { IoCheckmarkCircle } from 'react-icons/io5';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Attih Soul Contact" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}
const postURL = `https://attihsoul.us7.list-manage.com/subscribe/post?u=0bd9ba2118b0697092bfa5182&id=48090a1e39`
const Contact = () => {
    const [formData, setFormData] = useState({
        message: '',
        name: '',
        email: ''
    });
    const [showNotification, setShowNotification] = useState(false);
    const handleChange = (value:string, name:string) => {
      setFormData({
        ...formData,
        [name]: value
      });
    }

    const sendEmail = async() => {
      try {
        const response = await axios.post('https://api.brevo.com/v3/smtp/email', {
            sender: {name: "Contact", email: 'info@attihsoul.com'},
            bcc: [{email: "info@attihsoul.com", name: "Attih Soul"}],
            subject: "Contact us",
            htmlContent: `
            <h1>New Contact Message from ${formData.name}</h1>
            <p><strong>From:</strong> ${formData.name} (${formData.email})</p>
            <h2>Message:</h2>
            <p>${formData.message}</p>
            `
        }, {
            headers: {
            'api-key': import.meta.env.VITE_BREVO_API_KEY,
            "Content-Type": "application/json"
            }
        })
        if(response.status === 201){
            setShowNotification(true)
            setFormData({
                name: "",
                email: "",
                message: ""
            })
            setTimeout(() => {
                setShowNotification(false)
            }, 5000);
        }
      } catch (error) {
        console.error(error)
      }
    }
    
    
    return (
        <div className="bg-white text-black">
            <div className="h-[774px]" style={{
                backgroundImage: 'url("/images/contact.webp")',
            }}>
                <Nav home />
            </div>
            <div className="py-6 md:px-24 px-4 flex flex-col gap-20">
                <div className="flex flex-col gap-4">
                    <Social />
                    <h2 className="uppercase font-bold md:text-8xl text-4xl md:leading-28 tracking-[2px] md:tracking-[4.58px] text-center">contact</h2>
                </div>
                <div className="flex flex-col md:gap-20 gap-12">
                            <div className="flex gap-11 flex-col-reverse md:flex-row">
                                <div className="flex flex-col gap-4 w-full max-w-xl">
                                    <div className="flex flex-col gap-2 md:gap-6">
                                        <label htmlFor="name" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Name</label>
                                        <input type="text" value={formData.name} onChange={e=>handleChange(e.target.value, 'name')} className="border border-black py-2 focus-visible:outline-0" />
                                    </div>
                                    <div className="flex flex-col gap-2 md:gap-6">
                                        <label htmlFor="email" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Email</label>
                                        <input type="email" value={formData.email} onChange={e=>handleChange(e.target.value, 'email')} className="border border-black py-2 focus-visible:outline-0" />
                                    </div>
                                    <div className="flex flex-col gap-2 md:gap-6">
                                        <label htmlFor="message" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Message</label>
                                        <textarea value={formData.message} onChange={e=>handleChange(e.target.value, 'message')} rows={12} className="border border-black py-2 focus-visible:outline-0" />
                                    </div>

                                </div>
                                <img src="/images/contact.png" alt="" />
                            </div>
                            <Button onClick={sendEmail} className="border border-black text-black px-12 w-fit self-center -mt-8">Send a Message</Button>

                </div>
            </div>

            {showNotification && (
                <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2 animate-fade-in">
                    <IoCheckmarkCircle size={20} />
                    <span>Message sent successfully!</span>
                </div>
            )}
            <Booking className="bg-white text-black" buttonClassName="border-black text-black" />
            <Footer className="bg-white text-black" buttonClassName="border-black text-black" />
        </div>
    )
}

export default Contact