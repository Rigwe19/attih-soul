import React from 'react'

type Props = {
    src: string;
    title: string
}

const Video = ({ src, title }: Props) => {
    return (
        <div className="w-full aspect-video mb-2">
            <iframe
                className="w-full h-full border-0"
                src={src}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading='lazy'
            />
        </div>
    )
}

export default Video