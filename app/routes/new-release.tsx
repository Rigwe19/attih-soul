import React from 'react'
import Header from '~/components/header'
import Nav from '~/components/nav'
import type { Route } from './+types/new-release';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Attih Soul New Release" },
        { name: "description", content: "Listen to Attih Soul latest release" },
    ];
}
const lists = [
    {
        title: 'Dreams (Choir Version)',
        links: {
            apple: 'https://music.apple.com/ng/album/dreams-choir-version-single/1787324116',
            youtube: 'https://music.youtube.com/watch?v=F0W3g_ez5sE&si=_ECOtI3j1OKx35_8',
            spotify: 'https://open.spotify.com/track/6ATpyqPWAIOhT77VtFW9Se?si=0d19ff21016e4654',
            tidal: 'https://tidal.com/browse/track/407592114',
            deezer: 'https://dzr.page.link/GRhjH97jQZXi7giC7',
        },
        image: 'https://i3.ytimg.com/vi/6rtJPEJjJqU/maxresdefault.jpg'
    },
    {
        title: 'Good Old Days (Choir Version)',
        links: {
            apple: 'https://music.apple.com/ng/album/good-old-days-choir-version/1782173208?i=1782173419',
            youtube: 'https://music.youtube.com/watch?v=vYKLt5Z0LL8&si=P9Piyw-258WBOwFW',
            spotify: 'https://open.spotify.com/track/1SoQI51cEuRA9i0P5KxiHs?si=68b1dbabe44345ee',
            tidal: 'https://tidal.com/browse/track/401903826',
            deezer: 'https://dzr.page.link/Z54qSrdYkhqh9TGg6',
        },
        image: 'https://i3.ytimg.com/vi/Nw4Ns2mZ0Mg/maxresdefault.jpg'
    },
    {
        title: 'So Sick',
        links: {
            apple: 'https://music.apple.com/ng/album/so-sick-single/1749193719',
            youtube: 'https://music.youtube.com/watch?v=q2Axlp8__u0&si=BvuwMkn_Ax_M9-rj',
            spotify: 'https://open.spotify.com/track/0qa8ymmkZ3JdUO7LSp37sL?si=272b56bda04e4daa',
            tidal: 'https://tidal.com/browse/track/365671707',
            deezer: 'https://dzr.page.link/wToCemEk9EJGxpVA6',
        },
        image: 'https://i3.ytimg.com/vi/q2Axlp8__u0/maxresdefault.jpg'
    },
    {
        title: "More Than Words (Acoustic)",
        links: {
            apple: 'https://music.apple.com/ng/album/more-than-words-acoustic-single/1746761346',
            youtube: 'https://music.youtube.com/watch?v=0K46VVqrhrU&si=UQRs5_wjM13QMFXL',
            spotify: 'https://open.spotify.com/track/1u5CrIiEYsPxQJwb5rI3iM?si=40fbca25fcc84ab0',
            tidal: 'https://tidal.com/browse/track/363019108',
        },
        image: 'https://i3.ytimg.com/vi/0K46VVqrhrU/maxresdefault.jpg'
    },
]
const NewRelease = () => {
    return (
        <div>
            <Nav />
            <Header title='New Release' />
            <div className="w-full flex flex-col md:px-40 px-4 my-12 gap-12 items-center">
                {lists.map(list => <div key={list.title} className="w-full flex flex-col gap-4 md:gap-12">
                    <img src={list.image} alt="" />
                    <div className="flex flex-col gap-2 w-full items-center">
                        <p className="font-bold text-lg uppercase">{list.title}</p>
                        <div className="flex gap-5">
                    <a href={list.links.apple} target="_blank" className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#951828" d="M23.994 6.124a9.2 9.2 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5 5 0 0 0-1.877-.726a10.5 10.5 0 0 0-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986q-.227.014-.455.026c-.747.043-1.49.123-2.193.4c-1.336.53-2.3 1.452-2.865 2.78c-.192.448-.292.925-.363 1.408a11 11 0 0 0-.1 1.18c0 .032-.007.062-.01.093v12.223l.027.424c.05.815.154 1.624.497 2.373c.65 1.42 1.738 2.353 3.234 2.801c.42.127.856.187 1.293.228c.555.053 1.11.06 1.667.06h11.03a13 13 0 0 0 1.57-.1c.822-.106 1.596-.35 2.295-.81a5.05 5.05 0 0 0 1.88-2.207c.186-.42.293-.87.37-1.324c.113-.675.138-1.358.137-2.04c-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206c-.29.59-.76.962-1.388 1.14q-.524.15-1.07.173c-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 0 1 1.038-2.022c.323-.16.67-.25 1.018-.324c.378-.082.758-.153 1.134-.24c.274-.063.457-.23.51-.516a1 1 0 0 0 .02-.193q0-2.723-.002-5.443a.7.7 0 0 0-.026-.185c-.04-.15-.15-.243-.304-.234c-.16.01-.318.035-.475.066q-1.14.226-2.28.456l-2.325.47l-1.374.278l-.048.013c-.277.077-.377.203-.39.49q-.002.063 0 .13c-.002 2.602 0 5.204-.003 7.805c0 .42-.047.836-.215 1.227c-.278.64-.77 1.04-1.434 1.233q-.526.152-1.075.172c-.96.036-1.755-.6-1.92-1.544c-.14-.812.23-1.685 1.154-2.075c.357-.15.73-.232 1.108-.31c.287-.06.575-.116.86-.177q.574-.126.6-.714v-.15l.002-8.882c0-.123.013-.25.042-.37c.07-.285.273-.448.546-.518c.255-.066.515-.112.774-.165q1.1-.224 2.2-.444l2.27-.46l2.01-.403c.22-.043.442-.088.663-.106c.31-.025.523.17.554.482q.012.11.012.223q.003 2.866 0 5.732z" /></svg>
                    </a>
                    <a href={list.links.youtube} target="_blank" className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ED0A0A" d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12s12-5.376 12-12S18.624 0 12 0m0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104s-3.18 7.104-7.104 7.104m0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772M9.684 15.54V8.46L15.816 12z" /></svg>
                    </a>
                    <a href={list.links.spotify} target="_blank" className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#1ed760" d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128c70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644c-30.053-18.357-67.885-22.515-112.44-12.335a7.98 7.98 0 0 1-9.552-6.007a7.97 7.97 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276c3.76 2.308 4.952 7.215 2.644 10.975m15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289c-34.406-21.148-86.853-27.273-127.548-14.92c-5.278 1.594-10.852-1.38-12.454-6.649c-1.59-5.278 1.386-10.842 6.655-12.446c46.485-14.106 104.275-7.273 143.787 17.007c4.692 2.89 6.175 9.034 3.286 13.72zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978c-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405c-3.362 5.69-10.73 7.565-16.4 4.187z" /></svg>
                    </a>
                    <a href={list.links.tidal} target="_blank" className="">
                        <div className="bg-white rounded-sm flex justify-center items-center h-8 w-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40.43" height="27" viewBox="0 0 256 171"><path fill="#0a0b09" d="m128.004 85.339l42.664 42.67l-42.664 42.667l-42.669-42.667zM42.667.002L85.335 42.67L42.667 85.34L0 42.67zm170.666 0L256 42.67l-42.667 42.67l-42.666-42.67l-42.663 42.669l-42.669-42.67L128.004 0l42.663 42.665z" /></svg>
                        </div>
                    </a>
                    {list.links.deezer && <a href={list.links.deezer} target="_blank" className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#9747FF" d="M18.774 5.051c.185-1.072.457-1.747.757-1.748c.561 0 1.015 2.341 1.015 5.228s-.455 5.229-1.016 5.229c-.23 0-.443-.4-.614-1.064c-.27 2.439-.831 4.115-1.48 4.115c-.5 0-.953-1.007-1.256-2.594c-.207 3.018-.727 5.161-1.334 5.161c-.381 0-.73-.848-.987-2.231C13.55 20 12.834 22 12 22s-1.551-2-1.86-4.853c-.255 1.383-.6 2.231-.986 2.231c-.609 0-1.128-2.142-1.335-5.161c-.3 1.587-.752 2.594-1.256 2.594c-.649 0-1.21-1.676-1.481-4.115c-.169.668-.382 1.064-.613 1.064c-.562 0-1.017-2.34-1.017-5.229S3.908 3.3 4.471 3.3c.3 0 .57.676.758 1.748C5.527 3.2 6.014 2 6.564 2c.653 0 1.219 1.7 1.487 4.168c.262-1.8.658-2.941 1.1-2.941c.624 0 1.154 2.252 1.351 5.393C10.874 7.01 11.41 6 12 6s1.128 1.011 1.5 2.62c.2-3.141.727-5.393 1.351-5.393c.444 0 .84 1.145 1.1 2.941C16.219 3.7 16.785 2 17.439 2c.547 0 1.035 1.2 1.335 3.051m-16.2 5.3C2.258 10.355 2 9.31 2 8.017s.258-2.337.576-2.337s.578 1.044.578 2.337s-.254 2.338-.578 2.338zm18.848 0c-.32 0-.577-1.045-.577-2.338s.257-2.337.577-2.337S22 6.724 22 8.017s-.258 2.338-.576 2.338z" /></svg>
                    </a>}
                </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default NewRelease