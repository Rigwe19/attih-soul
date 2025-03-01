import React from 'react'
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube, FaWikipediaW, FaTiktok, FaSpotify } from 'react-icons/fa6'
import AppleMusic from './appleMusic'

type Props = {}

const Social = (props: Props) => {
    return (
        <div className="flex gap-3 items-center justify-center">
            <a href="https://www.facebook.com/attihsoul/" rel="noopener noreferrer" target='_blank'>
                <FaFacebook size={16} />
            </a>
            <a href="https://www.instagram.com/attih_soul/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={16} />
            </a>
            <a href="https://twitter.com/attih_soul" target="_blank" rel="noopener noreferrer">
                <FaXTwitter size={16} />
            </a>
            <a href="https://www.youtube.com/channel/UC26rJ72ZSCYK8MfMt3FsFWg" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={16} />
            </a>
            <a href="https://en.wikipedia.org/wiki/Attih_Soul" target="_blank" rel="noopener noreferrer">
                <FaWikipediaW size={16} />
            </a>
            <a href="https://www.tiktok.com/@attihsoul?_t=8WXSjtt0FWv&_r=1" target="_blank" rel="noopener noreferrer">
                <FaTiktok size={16} />
            </a>
            <a href="https://music.apple.com/es/artist/attih-soul/1436080507" target="_blank" rel="noopener noreferrer">
                <AppleMusic />
            </a>
            <a href="https://open.spotify.com/artist/5kL7MUEVmuucYk2LsJlrLC?si=sFydnJ6kTOORn2h0g188zg" target="_blank" rel="noopener noreferrer">
                <FaSpotify size={16} />
            </a>
        </div>
    )
}

export default Social