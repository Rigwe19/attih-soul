import { useRef } from "react"

type Props = {
    file: {
        src: string;
        video: string;
        title: string;
    }
}

const VideoComponent = ({ file }: Props) => {
    const video = useRef<HTMLVideoElement>(null)
    const handlePlay = (status: 'play' | 'pause') => {
        if (status === 'play') {
            video.current?.play()
        } else {
            video.current?.pause()
        }
    }
    const handleMobile = () => {
      video.current?.play()
      setTimeout(() => {
        video.current?.pause()
      }, 5000);
    }
    

    return (
        <button className="relative w-full mb-4" onTouchStart={handleMobile} onMouseEnter={() => handlePlay('play')} onMouseLeave={() => handlePlay('pause')}>
            <video className="w-full" ref={video} loop src={file.video}></video>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 max-w-48 w-full gap-2 flex flex-col">
                <p className="font-open font-bold text-lg leading-6 tracking-[1.9px] text-center">{file.title}</p>
                <a target="_blank" href={file.src}
                    className="w-full py-2.5 border border-white hover:bg-white/10 font-bold text-xs leading-4 tracking-[1.9px] text-center">Watch Here</a>

            </div>
        </button>
    )
}

export default VideoComponent