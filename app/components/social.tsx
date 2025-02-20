import React from 'react'
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube, FaWikipediaW, FaTiktok, FaSpotify } from 'react-icons/fa6'
import AppleMusic from './appleMusic'

type Props = {}

const Social = (props: Props) => {
    return (
        <div className="flex gap-3 items-center justify-center">
            <FaFacebook size={16} />
            <FaInstagram size={16} />
            <FaXTwitter size={16} />
            <FaYoutube size={16} />
            <FaWikipediaW size={16} />
            <FaTiktok size={16} />
            <AppleMusic />
            <FaSpotify size={16} />
        </div>
    )
}

export default Social