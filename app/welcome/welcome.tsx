import Hero from '~/components/hero';
import About from '~/components/about';
import Nav from '~/components/nav';
import HorizontalSlider from '~/components/slider';
import Album from '~/components/album';
import VideoComponent from '~/components/video-component';
import VideoSlider from '~/components/videoSlider';
import Booking from '~/components/booking';
import Footer from '~/components/footer';
const videos = [
  { title: 'Wetin', src: 'https://www.youtube.com/embed/sSnRPaDlRVw', video: '/videos/wetin.mp4' },
  { title: 'Friendzone', src: 'https://www.youtube.com/embed/_Qlk9ZaS1MQ', video: '/videos/friendzone.mp4' },
  { title: "Someday I'll Find You", src: 'https://www.youtube.com/embed/Hn1s1kh-3pc', video: '/videos/someday.mp4' },
]
export function Welcome() {
  return (
    <>
      {/* Parallax Background */}
      <div
        className="fixed inset-0 w-full h-full overflow-y-auto bg-center bg-top bg-cover bg-fixed"
        style={{
          // transform: `translateY(${offset * 0.5}px)`,
          backgroundImage: 'url("/images/background.jpg")',
          // backgroundPosition: 'center top',
        }}
      >
        <Nav home={true} />
        <Hero />
        <div className="flex flex-col bg-[#000000C9]">
          <About />
          <HorizontalSlider />
          <Album />
          {videos.map(video => <VideoComponent key={video.src} file={video} />)}
          <VideoSlider />
          <Booking />
          <Footer />
        </div>

      </div>
    </>
  );

}
