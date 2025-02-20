import Booking from '~/components/booking';
import Footer from '~/components/footer';
import Header from '~/components/header';
import Nav from '~/components/nav';
import type { Route } from './+types/about'

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Attih Soul About" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

const About = () => {
    return (
        <div className="bg-black ">

            <Nav />
            <Header title='About' />
            <div className="w-full flex flex-col md:px-40 px-4 my-12 gap-12 items-center">
                <div className="max-w-4xl w-full flex flex-col tracking-[4.58px] text-center">
                    <h1 className="font-bold md:text-8xl text-4xl md:leading-28 leading-12">ATTIH SOUL</h1>
                    <p className="font-medium md:text-xl text-sm leading-6">Singer, Songwriter, Guitarist, Vocal coach and Recording artist</p>
                </div>
                <div className="font-medium md:text-2xl md:leading-7 text-[#B8B8B8] md:tracking-[4.58px] tracking-[2px] text-justify flex flex-col gap-4 md:gap-12">
                    <p className="">
                        Attih Soul is a Nigerian-born singer, songwriter, vocal coach, and acoustic guitarist whose captivating voice and soulful melodies have earned him recognition across continents. Currently based in the vibrant city of Barcelona, Spain, Attih’s artistry transcends cultural and musical boundaries, blending African roots with universal sounds to create timeless music.
                    </p>
                    <h3 className="font-semibold text-white">Early Life and Education</h3>
                    <p>
                        Born and raised in Nigeria, Attih’s journey into music began early, drawing inspiration from his cultural heritage and a deep passion for storytelling through sound. Despite his love for music, he pursued academic excellence, earning a Bachelor’s degree in Medical Biochemistry. He later advanced his academic career with a double Master’s degree in Talent Management and Leadership, equipping him with a unique blend of scientific precision and strategic vision.
                    </p>
                    <h3 className="font-semibold text-white">Musical Journey</h3>
                    <p>
                        With over 12 years of experience as a singer and stage performer, Attih has refined his craft, perfecting the art of engaging and mesmerizing his audience. His performances are known for their emotional depth and technical brilliance, leaving listeners spellbound with every note. From intimate acoustic sessions to grand stage appearances, Attih’s music resonates with people of all backgrounds.
                    </p>
                    <h3 className="font-semibold text-white">Artistry and Style </h3>
                    <p>
                        Attih Soul’s music is a rich fusion of genres, incorporating elements of soul, acoustic, and Afrocentric rhythms. His lyrics, often profound and evocative, reflect themes of love, hope, resilience, and self-discovery. Armed with his acoustic guitar, he creates a stripped-back, authentic sound that connects deeply with his audience.
                    </p>
                </div>
            </div>
            <div className="bg-white w-full flex text-[#1E1E1E] justify-center items-center">
                <div className="w-full max-w-4xl flex flex-col gap-7 text-center tracking-[5.37px] py-24">
                    <h4 className="font-medium text-xl md:leading-6">ATTIH SOUL</h4>
                    <p className="md:text-[85px] text-4xl md:leading-28 font-bold">The Voice that Transcends Borders, the Melody that Captures Hearts.</p>
                </div>
            </div>
            <Booking />
            <Footer />
        </div >
    )
}

export default About