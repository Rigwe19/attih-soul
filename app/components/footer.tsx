import { FaFacebook, FaInstagram, FaSpotify, FaTiktok, FaWikipediaW, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import Button from './button'
import AppleMusic from './appleMusic'
import { links } from '~/links'
import { Link } from 'react-router'
import Social from './social'
import { cn } from './utils'
import axios from 'axios'
import { useState } from 'react'
import { IoCheckmarkCircle } from 'react-icons/io5'
// import {LiAppleMusic} from 'react-icons/lib'

type Props = {
    className?: string
    buttonClassName?: string
}
const Footer = ({ buttonClassName, className }: Props) => {
    const [email, setEmail] = useState('');
    const [showNotification, setShowNotification] = useState(false);
    const sendEmail = async () => {
        try {
            const response = await axios.post('https://api.brevo.com/v3/smtp/email', {
                sender: { name: "Contact", email: 'info@attihsoul.com' },
                bcc: [{ email: "info@attihsoul.com", name: "Attih Soul" }],
                subject: "Subscription email",
                htmlContent: `
            <h1>New Subscription from ${email}</h1>
            <h2>Email:</h2>
            <p>${email}</p>
            `
            }, {
                headers: {
                    'api-key': import.meta.env.VITE_BREVO_API_KEY,
                    "Content-Type": "application/json"
                }
            })
            if (response.status === 201) {
                setShowNotification(true)
                setEmail("")
                setTimeout(() => {
                    setShowNotification(false)
                }, 5000);
            }
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className={cn('w-full flex flex-col bg-black gap-[59px] justify-center items-center md:p-10 py-4 px-1', className)}>
            <div className="flex flex-col gap-7 max-w-[545px] w-full">
                <p className="font-medium font-[13px] leading-[16.9px] tracking-[2px] text-center">Sign up for newsletter to get first news on new releases, shows and tours</p>
                <div className="flex md:gap-1.5 gap-2.5 w-full">
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="text"
                        placeholder="Enter your email"
                        className={cn("md:w-[300px] h-[40px] p-2.5 bg-transparent focus-visible:ring-0 focus-visible:outline-0 placeholder:text-[#5D5D5D] border border-white", buttonClassName)}
                    />
                    <Button onClick={sendEmail} className={cn("md:w-[150px] h-[40px] bg-white text-black border border-white bg-transparent text-white", buttonClassName)}>Subscribe</Button>
                </div>
            </div>
            <div className={`w-full flex border-t font-thin text-xs leading-3 tracking-[2px] text-center flex-col gap-6 uppercase items-center py-12 ${className ? 'border-black' : 'border-white'}`}>
                <div className="flex flex-col gap-1.5">
                    <p className="text-center">Follow ATTIH SOUL</p>
                    <Social />
                    <p className="text-center">© {new Date().getFullYear()} ATTIH Music Entertainment</p>
                </div>
                <div className="flex justify-center items-center md:gap-6 gap-3 flex-wrap">
                    {links.map(link => <div key={link.name} className="flex gap-0.5 font-semibold">
                        <Link to={`/${link.link}`} viewTransition>{link.name}</Link>
                        <span>|</span>
                    </div>)}
                </div>
            </div>

            {showNotification && (
                <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2 animate-fade-in">
                    <IoCheckmarkCircle size={20} />
                    <span>Message sent successfully!</span>
                </div>
            )}
        </div>
    )
}

export default Footer