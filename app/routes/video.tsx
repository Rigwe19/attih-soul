import Booking from '~/components/booking'
import Footer from '~/components/footer'
import Header from '~/components/header'
import Nav from '~/components/nav'
import VideoComponent from '~/components/video'


const videos = [
    { title: 'Wetin', src: 'https://www.youtube.com/embed/sSnRPaDlRVw' },
    { title: 'Friendzone', src: 'https://www.youtube.com/embed/_Qlk9ZaS1MQ' },
    { title: "Someday I'll Find You", src: 'https://www.youtube.com/embed/Hn1s1kh-3pc' },
]
const Video = () => {
    return (
        <div className="bg-black ">

            <Nav />
            <Header title='Video' />
            {videos.map(video => <VideoComponent key={video.src} src={video.src} title={video.title} />)}
            <Booking />
            <Footer />
        </div >
    )
}

export default Video