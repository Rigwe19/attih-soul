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
        { name: "description", content: "List to Atiih soul musics" },
    ];
}
const lists = [
    {
        title: 'Dreams',
        links: {
            apple: 'https://music.apple.com/ng/album/dreams/1716933890?i=1716933901',
            youtube: 'https://music.youtube.com/watch?v=G8ebX3nYrTw&si=hussTtwTOWjLSGgU',
            spotify: 'https://open.spotify.com/track/6ATpyqPWAIOhT77VtFW9Se?si=0d19ff21016e4654',
            tidal: 'https://tidal.com/browse/track/329149788',
            deezer: 'https://dzr.page.link/Xc8vZaHSqk53F2Bn8',
        },
        image: '/images/music/dreams.webp'
    },
    {
        title: 'Say You Love Me',
        links: {
            apple: 'https://music.apple.com/ng/album/say-you-love-me/1716933890?i=1716933899',
            youtube: 'https://music.youtube.com/watch?v=bywkzo0Pj00&si=ceZ4NIV8xaHRNRqG',
            spotify: 'https://open.spotify.com/track/79WzSS7w3ilsABYGwChDwM?si=7bf7ea3b43f84b0f',
            tidal: 'https://tidal.com/browse/track/329149786',
            deezer: 'https://dzr.page.link/XyD3dj9xdcD8QjQt7',
        },
        image: '/images/music/say_you_love_me.webp'
    },
    {
        title: 'Wetin',
        links: {
            apple: 'https://music.apple.com/ng/album/wetin/1716933890?i=1716933900',
            youtube: 'https://music.youtube.com/watch?v=XJ5arguVbuY&si=uSzjcSvO8XgbpGXV',
            spotify: 'https://open.spotify.com/track/5nG8uOebo8NtmjDJjzJoki?si=d7cdf8d88f884128',
            tidal: 'https://tidal.com/browse/track/329149787',
            deezer: 'https://dzr.page.link/wkTto7Jia7EHbmge8',
        },
        image: '/images/music/wetin.webp'
    },
    {
        title: "Someday I'll Find You",
        links: {
            apple: 'https://music.apple.com/ng/album/dreams/1716933890?i=1716933901',
            youtube: 'https://music.youtube.com/watch?v=4XyIzxrs9HA',
            spotify: 'https://open.spotify.com/track/3t3BYzSY3uHGgjnhoEOwBx?si=90d83fdac9ba4e8c',
            tidal: 'https://tidal.com/browse/track/329149784',
            deezer: 'https://dzr.page.link/LSZyjWJCghqNH7SD6',
        },
        image: '/images/music/someday_i_will_find_you.webp'
    },
    {
        title: 'Friendzone',
        links: {
            apple: 'https://music.apple.com/ng/album/friendzone/1716933890?i=1716933898',
            youtube: 'https://music.youtube.com/watch?v=gH6JYFb892o&si=H2kpcq-xMQtGZUQq ',
            spotify: 'https://open.spotify.com/track/1LkqQQH6ZayO1iITZDv6U9?si=ee0578b825c7494e',
            tidal: 'https://tidal.com/browse/track/329149785',
            deezer: 'https://dzr.page.link/cQszsmMT2LsfZwYw6',
        },
        image: '/images/music/friendzone.webp'
    },
    {
        title: 'Kiss Ya',
        links: {
            apple: 'https://music.apple.com/ng/album/kiss-ya/1716933890?i=1716933895',
            youtube: 'https://music.youtube.com/watch?v=Upkuo9nk-LY&si=LAb56fKsP4BAsqXM',
            spotify: 'https://open.spotify.com/track/1AwyPRM4dRQR6V5ZvQJ0uR?si=7cf4622763a04f7d',
            tidal: 'https://tidal.com/browse/track/329149782',
            deezer: 'https://dzr.page.link/NsRvrajiGd4n6kT38',
        },
        image: '/images/music/kiss_ya.webp'
    },
    {
        title: 'In The Music',
        links: {
            apple: 'https://music.apple.com/ng/album/in-the-music/1716933890?i=1716933894',
            youtube: 'https://music.youtube.com/watch?v=loRBAyZJ1Nc&si=bvdKH0kBwHnRMK8Y',
            spotify: 'https://open.spotify.com/track/7Gaaqyq4OOK0c0uRE47bx1?si=102041ffa3644929',
            tidal: 'https://tidal.com/browse/track/329149781',
            deezer: 'https://dzr.page.link/HSLBmXP8LFC2bY9U8',
        },
        image: '/images/music/in_the_music.webp'
    },
    {
        title: 'Down On My Knees',
        links: {
            apple: 'https://music.apple.com/ng/album/down-on-my-knees/1716933890?i=1716933892',
            youtube: 'https://music.youtube.com/watch?v=s09N4-SVvB8&si=L-a00zNAeg2NGMyZ',
            spotify: 'https://open.spotify.com/track/1wHoxLdLUH0Scwvti24eiQ?si=b2e80c88e3154721',
            tidal: 'https://tidal.com/browse/track/329149779',
            deezer: 'https://dzr.page.link/fVTDPESw7TMP6c4u9',
        },
        image: '/images/music/down_on_knees.webp'
    },
    {
        title: 'Say Something',
        links: {
            apple: 'https://music.apple.com/ng/album/say-something/1689607305?i=1689607607',
            youtube: 'https://music.youtube.com/watch?v=MA_8ncekEg4&si=_i2meRZppy1zLTHM',
            spotify: 'https://open.spotify.com/track/6PXJaJqERJMjJIGl0UqZJe?si=f80e529cc6d34790',
            tidal: 'https://tidal.com/browse/track/296798577',
            deezer: 'https://dzr.page.link/8dG4CkvntL3rcUV46',
        },
        image: '/images/music/say_something.webp'
    },
    {
        title: 'Karma',
        links: {
            apple: 'https://music.apple.com/ng/album/karma/1495830198?i=1495830202',
            youtube: 'https://music.youtube.com/watch?v=1Mvk_9DKL98&si=D8qSYFr_MbBL1V4p',
            spotify: 'https://open.spotify.com/track/5iOEByrnsFtwbEe7rz2Pq7?si=3a1da16442b74d78',
            tidal: 'https://tidal.com/browse/video/298879475',
            deezer: 'https://dzr.page.link/Q6DSnWbNw57z35qQ7',
        },
        image: '/images/music/karma.webp'
    },
]
const Music = () => {
    return (
        <div className="bg-black ">

            <Nav />
            <Header title='Music' />
            {lists.map(item => <MusicListen key={item.title} title={item.title} links={item.links} image={item.image} />)}
            <div className="w-full flex flex-col md:px-24 px-2 mb-12">
                <p className="md:my-24 my-6 text-center text-white md:text-[40px] uppercase tracking-[1.9px] md:tracking-[4.58px] leading-[46.9px]">LATEST RELEASE</p>
                <div className="flex flex-col md:gap-[98px] gap-4">
                    <img src="/images/music/good_old_days.webp" alt="" />
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
