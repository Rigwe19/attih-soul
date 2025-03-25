import Booking from '~/components/booking'
import Button from '~/components/button'
import Footer from '~/components/footer'
import Header from '~/components/header'
import Nav from '~/components/nav'
import type { Route } from './+types/live'


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Attih Soul Upcoming Live" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

const Live = () => {
    const lives = [{
        time: '20h45',
        date: 'Mar 05',
        event: 'Greta',
        location: 'Sant Cugat'
    },{
        time: '20h',
        date: 'Mar 06',
        event: 'Jacqueline',
        location: 'Barcelona'
    },{
        time: '21h30',
        date: 'Mar 05',
        event: 'the Mix Bar',
        location: 'Castelldefels'
    },{
        time: '14h',
        date: 'Mar 08',
        event: 'Private Event',
        location: 'Seville'
    },{
        time: '14h',
        date: 'Mar 09',
        event: 'Private Event',
        location: 'Seville'
    },{
        // time: '20h45',
        date: 'Mar 16',
        event: 'String Project',
        location: 'Valencia'
    },{
        // time: '20h45',
        date: 'Mar 17',
        event: 'String Project',
        location: 'Valencia'
    },{
        // time: '20h45',
        date: 'Mar 18',
        event: 'String Project',
        location: 'Valencia'
    },

    ]
    return (
        <div className="fixed inset-0 w-full h-full overflow-y-auto bg-center bg-top bg-cover bg-fixed" style={{
            backgroundImage: 'url("/images/live.webp")',
        }}>
            <Nav home />
            <Header title='Live' />
            <div className="w-full flex flex-col md:px-12 px-4 my-12 gap-12">
                {lives.map((live, index) => <div key={index} className="flex justify-between items-center">
                    <div className="flex gap-3 uppercase">
                        <div className="border-2 border-[#1A1818] flex flex-col md:h-[138px] w-[124px] items-center">
                            <div className="bg-[#303030] px-6 h-7 w-full text-center">{live?.time}</div>
                            <div className="h-full justify-center items-center md:w-[76px] w-[35px] flex md:text-2xl text-sm py-4 md:leading-7 tracking-[4.93px] text-center">{live.date}</div>
                        </div>
                        <div className="flex flex-col gap-3 uppercase justify-center md:leading-6 tracking-[4.93] text-xs md:text-lg">
                            <p className="font-semibold">{live.event}</p>
                            <p className="">{live.location}</p>
                        </div>
                    </div>
                    {/* <Button className="bg-transparent border border-white text-white uppercase not-md:text-xs md:w-[120pz] md:h-12">Book Tickets</Button> */}
                </div>)}
            </div>
            <Booking />
            <Footer />
        </div >
    )
}

export default Live