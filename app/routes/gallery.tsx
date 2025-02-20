import Booking from '~/components/booking'
import Footer from '~/components/footer'
import Header from '~/components/header'
import Nav from '~/components/nav'
import GalleryComponent from '~/components/slider'
import type { Route } from './+types/gallery'

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Attih Soul Music gallery" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

const Gallery = () => {
    return (
        <div className="bg-black ">

            <Nav />
            <Header title='Gallery' />
            <GalleryComponent />
            <Booking />
            <Footer />
        </div >
    )
}

export default Gallery