import Booking from '~/components/booking';
import Footer from '~/components/footer';
import Header from '~/components/header';
import Nav from '~/components/nav';
import type { Route } from './+types/merch';
import Product from '~/components/product';

type Props = {}
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Attih Soul Music gallery" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}
const Merch = (props: Props) => {
    return (
        <div className="bg-black ">

            <Nav />
            <Header title='Merch' />
            <div className="md:px-24 px-4 flex flex-col md:gap-12 gap-4">
                {[0, 1, 2, 3, 4].map(index => <Product key={index} />)}
            </div>

            <Booking />
            <Footer />
        </div >
    )
}

export default Merch