import Booking from '~/components/booking'
import Footer from '~/components/footer'
import Header from '~/components/header'
import Nav from '~/components/nav'
import VideoComponent from '~/components/video'
import VideoComponents from '~/components/video-component'
import type { Route } from './+types/video'

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Attih Soul Videos" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

const videos = [
    { title: 'Dreams Choir version', src: 'https://youtu.be/qc3m-H8oSSs?si=DWb1WWv0dHeSZT4Z', video: '/videos/dreams.mp4' },
    { title: "Good old Days choir version", src: 'https://www.youtube.com/watch?v=Nw4Ns2mZ0Mg', video: '/videos/good_old_days.mp4' },
    { title: 'Friendzone', src: 'https://youtu.be/_Qlk9ZaS1MQ', video: '/videos/friendzone.mp4' },
    { title: "Someday I'll Find You", src: 'https://youtu.be/Hn1s1kh-3pc', video: '/videos/someday.mp4' },
    // { title: "Someday I'll Find You", src: 'https://youtu.be/O3vWnrgl_oI?si=WkSjd3UQpfh4x5-7', video: '/videos/someday.mp4' },
]
const Video = () => {
    return (
        <div className="bg-black ">

            <Nav />
            <Header title='Video' />
            {/* <VideoComponents /> */}
            {videos.map(video => <VideoComponents key={video.src} file={video} />)}
            <Booking />
            <Footer />
        </div >
    )
}

export default Video