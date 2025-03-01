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
        title: 'Say You Love Me',
        href: 'https://music.apple.com/ng/album/say-you-love-me/1716933890?i=1716933899',
        image: '/images/music/say_you_love_me.jpg'
    },
    {
        title: 'Wetin',
        href: 'https://music.apple.com/ng/album/wetin/1716933890?i=1716933900',
        image: '/images/music/wetin.jpg'
    },
    {
        title: "Someday I'll Find You",
        href: 'https://music.apple.com/ng/album/dreams/1716933890?i=1716933901',
        image: '/images/music/someday_i_will_find_you.jpg'
    },
    {
        title: 'Friendzone',
        href: 'https://music.apple.com/ng/album/friendzone/1716933890?i=1716933898',
        image: '/images/music/friendzone.jpg'
    },
    {
        title: 'Kiss Ya',
        href: 'https://music.apple.com/ng/album/kiss-ya/1716933890?i=1716933895',
        image: '/images/music/kiss_ya.jpg'
    },
    {
        title: 'In The Music',
        href: 'https://music.apple.com/ng/album/in-the-music/1716933890?i=1716933894',
        image: '/images/music/in_the_music.jpg'
    },
    {
        title: 'Down On My Knees',
        href: 'https://music.apple.com/ng/album/down-on-my-knees/1716933890?i=1716933892',
        image: '/images/music/down_on_knees.jpg'
    },
    {
        title: 'Say Something',
        href: 'https://music.apple.com/ng/album/say-something/1689607305?i=1689607607',
        image: '/images/music/say_something.jpg'
    },
    {
        title: 'Karma',
        href: 'https://music.apple.com/ng/album/karma/1495830198?i=1495830202',
        image: '/images/music/karma.jpg'
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

                        <a href="https://music.apple.com/ng/album/good-old-days-choir-version/1782173208?i=1782173419" target="_blank" className="border bg-transparent text-white not-md:h-auto not-md:p-1 not-md:w-5/6 w-40 flex justify-center py-2">Listen</a>
                    </div>
                </div>
            </div>

            <Booking />
            <Footer />
        </div >
    )
}

export default Music    
