import Hero from '~/components/hero';
import About from '~/components/about';
import HorizontalSlider from '~/components/slider';
import Album from '~/components/album';
import VideoComponent from '~/components/video-component';
import VideoSlider from '~/components/videoSlider';
import Booking from '~/components/booking';
import Footer from '~/components/footer';
import { lazy, Suspense } from 'react';
const videos = [
  { title: 'Dreams (Choir Version)', src: 'https://www.youtube.com/watch?v=qc3m-H8oSSs', video: '/videos/dreams.mp4' },
  { title: "Good old Days choir version", src: 'https://www.youtube.com/watch?v=Nw4Ns2mZ0Mg', video: '/videos/good_old_days.mp4' },
  { title: 'Friendzone', src: 'https://www.youtube.com/watch?v=_Qlk9ZaS1MQ', video: '/videos/friendzone.mp4' },
]
export function Welcome() {
  const Nav = lazy(() => import('~/components/nav'));
  // const About = lazy(() => import('~/components/about'));
  // const HorizontalSlider = lazy(() => import('~/components/slider'));
  // const Album = lazy(() => import('~/components/album'));
  // const VideoComponent = lazy(() => import('~/components/video-component'));
  // const VideoSlider = lazy(() => import('~/components/videoSlider'));
  // const Booking = lazy(() => import('~/components/booking'));
  return (
    <>
      {/* Preload Background Image */}
      <link rel="preload" href="/images/background.jpg" as="image" />
      {/* Parallax Background */}
      <div
        className="fixed inset-0 w-full h-full overflow-y-auto bg-center bg-top bg-cover bg-fixed"
        // style={{
        //   backgroundImage: 'url("/images/background.jpg")',
        // }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Nav home={true} />
        </Suspense>
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
