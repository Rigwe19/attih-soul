import Booking from "~/components/booking";
import Button from "~/components/button";
import Footer from "~/components/footer";
import Nav from "~/components/nav";
import type { Route } from "./+types/contact";
import Social from "~/components/social";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Attih Soul Contact" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}
const Contact = () => {
    return (
        <div className="bg-white text-black">
            <div className="h-[774px]" style={{
                backgroundImage: 'url("/images/contact.jpg")',
            }}>
                <Nav home />
            </div>
            <div className="py-6 md:px-24 px-4 flex flex-col gap-20">
                <div className="flex flex-col gap-4">
                    <Social />
                    <h2 className="uppercase font-bold md:text-8xl text-4xl md:leading-28 tracking-[2px] md:tracking-[4.58px] text-center">contact</h2>
                </div>
                <div className="flex flex-col md:gap-20 gap-12">
                    <div className="flex gap-11 flex-col-reverse md:flex-row">
                        <div className="flex flex-col gap-4 w-full max-w-xl">
                            <div className="flex flex-col gap-2 md:gap-6">
                                <label htmlFor="name" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Name</label>
                                <input type="text" className="border border-black py-2 focus-visible:outline-0" />
                            </div>
                            <div className="flex flex-col gap-2 md:gap-6">
                                <label htmlFor="email" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Email</label>
                                <input type="email" className="border border-black py-2 focus-visible:outline-0" />
                            </div>
                            <div className="flex flex-col gap-2 md:gap-6">
                                <label htmlFor="message" className="md:text-xl leading-6 tracking-[2px] tracking-[4.58px]">Message</label>
                                <textarea rows={12} className="border border-black py-2 focus-visible:outline-0" />
                            </div>

                        </div>
                        <img src="/images/contact.png" alt="" />
                    </div>
                    <Button className="border border-black text-black px-12 w-fit self-center -mt-8">Send a Message</Button>
                </div>
            </div>
            <Booking className="bg-white text-black" buttonClassName="border-black text-black" />
            <Footer className="bg-white text-black" buttonClassName="border-black text-black" />
        </div>
    )
}

export default Contact