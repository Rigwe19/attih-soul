import { useEffect, useRef, useState } from "react"

type Props = {
    file: {
        src: string;
        video: string;
        title: string;
    }
}

const VideoComponent = ({ file }: Props) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [videoSrc, setVideoSrc] = useState<string|undefined>(undefined);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                        observer.disconnect()
                    }
                })
            },
            { threshold: 0.1 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current)
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            setVideoSrc(file.video)
        }
    }, [isVisible, file.src]);
    const handlePlay = (status: 'play' | 'pause') => {
        if (status === 'play') {
            videoRef.current?.play()
        } else {
            videoRef.current?.pause()
        }
    }
    const handleMobile = () => {
        videoRef.current?.play()
        setTimeout(() => {
            videoRef.current?.pause()
        }, 5000);
    }


    return (
        <button className="relative w-full mb-4" onTouchStart={handleMobile} onMouseEnter={() => handlePlay('play')} onMouseLeave={() => handlePlay('pause')}>
            <video className="w-full" ref={videoRef} loop src={videoSrc} playsInline></video>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 max-w-48 w-full gap-2 flex flex-col">
                <p className="font-open font-bold text-lg leading-6 tracking-[1.9px] text-center">{file.title}</p>
                <a target="_blank" href={file.src}
                    className="w-full py-2.5 border border-white hover:bg-white/10 font-bold text-xs leading-4 tracking-[1.9px] text-center">Watch Here</a>

            </div>
        </button>
    )
}

export default VideoComponent