import Booking from '~/components/booking';
import Button from '~/components/button';
import Footer from '~/components/footer';
import Header from '~/components/header';
import MusicListen from '~/components/music-listen';
import Nav from '~/components/nav';
import type { Route } from './+types/music';


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Attih Soul Music" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}
const lists = [
    {
        title: 'Dreams',
        href: 'https://music.apple.com/ng/album/dreams/1716933890?i=1716933901',
        image: '/images/music/dreams.jpg'
    },
    {
        title: 'say you love me',
        href: 'https://music.apple.com/ng/album/say-you-love-me/1716933890?i=1716933899',
        image: '/images/music/say_you_love_me.jpg'
    },
    {
        title: 'wetin',
        href: 'https://music.apple.com/ng/album/wetin/1716933890?i=1716933900',
        image: '/images/music/wetin.jpg'
    },
    {
        title: 'SOMEDAY I WILL FIND YOU',
        href: 'https://music.apple.com/ng/album/dreams/1716933890?i=1716933901',
        image: '/images/music/someday_i_will_find_you.jpg'
    },
    {
        title: 'friendzone',
        href: 'https://music.apple.com/ng/album/dreams/1716933890?i=1716933901',
        image: '/images/music/friendzone.jpg'
    },
    {
        title: 'kiss ya',
        href: 'https://music.apple.com/ng/album/dreams/1716933890?i=1716933901',
        image: '/images/music/kiss_ya.jpg'
    },
    {
        title: 'in the music',
        href: 'https://music.apple.com/ng/album/dreams/1716933890?i=1716933901',
        image: '/images/music/in_the_music.jpg'
    },
    {
        title: 'down on my knees',
        href: 'https://music.apple.com/ng/album/dreams/1716933890?i=1716933901',
        image: '/images/music/down_on_my_knees.jpg'
    },
    {
        title: 'say something',
        href: 'https://music.apple.com/ng/album/dreams/1716933890?i=1716933901',
        image: '/images/music/say_something.jpg'
    },
]
const Music = () => {
    return (
        <div className="bg-black ">

            <Nav />
            <Header title='Music' />
            {lists.map(item => <MusicListen key={item.title} title={item.title} href={item.href} image={item.image} />)}
            <div className="w-full flex flex-col md:px-24 px-2 mb-12">
                <p className="md:my-24 my-6 text-center text-white md:text-[40px] uppercase tracking-[1.9px] md:tracking-[4.58px] leading-[46.9px]">LATEST RELEASE</p>
                <div className="flex flex-col md:gap-[98px] gap-4">
                    <img src="/images/music/good_old_days.jpg" alt="" />
                    <div className="flex justify-center items-center flex-col grow  gap-2.5">
                        <p className="font-open font-bold text-center md:text-lg text-xs uppercase tracking-[1.9px] leading-[24px]">GOOD OLD DAYS (Choir Version)</p>

                        <Button className="border bg-transparent text-white not-md:h-auto not-md:p-1 not-md:w-5/6 w-40">Listen</Button>
                    </div>
                </div>
            </div>

            <Booking />
            <Footer />
        </div >
    )
}

export default Music    
