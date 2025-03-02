import Booking from '~/components/booking'
import Footer from '~/components/footer'
import Header from '~/components/header'
import Nav from '~/components/nav'
import type { Route } from './+types/services'

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Attih Soul Services" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

const Services = () => {
    return (
        <div className="bg-black ">

            <Nav />
            <Header title='Services' />
            <div className="w-full flex flex-col md:px-12 px-4 my-12 gap-12">
                <div className="flex gap-[47px] items-center flex-col md:flex-row">
                    <img src="/images/services/song_writing.jpg" className='w-full md:w-2/3' alt="song writing" />
                    <div className="flex flex-col uppercase gap-5 max-w-sm">
                        <h2 className="font-bold md:text-5xl text-xl leading-5">song WRITING</h2>
                        <p className="leading-6 tracking-[4.93px] text-xs md:text-base">Freelance songwriting for artists, projects, documentaries, movies etc.</p>
                    </div>
                </div>
                <div className="flex gap-[47px] md:items-center flex-col md:flex-row">
                    <img src="/images/services/music.jpg" className='w-full md:w-2/3' alt="song writing" />
                    <div className="flex flex-col uppercase gap-5 max-w-sm">
                        <h2 className="font-bold md:text-5xl text-xl md:leading-16 leading-5">MUSIC FOR CONCERTS AND EVENTS</h2>
                        <ul className="leading-6 tracking-[4.93px] list-disc list-inside text-xs md:text-base">
                            <li>Concerts</li>
                            <li>Weddings</li>
                            <li>Parties</li>
                            <li>Private Events</li>
                            <li>Corporate Events</li>
                            <li className='list-none ml-4'>etc.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-[47px] md:items-center flex-col md:flex-row">
                    <img src="/images/services/vocal.jpg" className='w-full md:w-2/3' alt="song writing" />
                    <div className="flex flex-col uppercase gap-5 max-w-sm">
                        <h2 className="font-bold md:text-5xl text-xl leading-7 md:leading-16">Vocal Coaching and Arrangement</h2>
                        <ul className="leading-6 tracking-[4.93px] list-disc list-inside text-xs md:text-base">
                            <li className="mb-2">Voice classes for amateur, intermediate and advanced singers</li>
                            <li className="">Vocal arrangement (harmonies, in-studio vocal directing) for recording artists</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Booking />
            <Footer />
        </div >
    )
}

export default Services