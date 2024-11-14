import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from 'react';

// Footer Social Icons
import FacebookIcon from '@/Assets/Images/facebook.svg';
import SportsIcon from '@/Assets/Images/sports.svg';
import LinkedInIcon from '@/Assets/Images/linkedin.svg';
import InstagramIcon from '@/Assets/Images/instagram.svg';
import BeIcon from '@/Assets/Images/be.svg';
import FullWidthTopTitleSection from '@/Components/Sections/FullWidthTopTitleSection';
import GalleryThumbnail from '@/Components/GalleryThumbnail';

const FooterSocialData = [
    {
        name: 'Facebook',
        icon_path: FacebookIcon,
    },
    {
        name: 'Sports',
        icon_path: SportsIcon,
    },
    {
        name: 'LinkedIn',
        icon_path: LinkedInIcon,
    },
    {
        name: 'Instagram',
        icon_path: InstagramIcon,
    },
    {
        name: 'Be',
        icon_path: BeIcon,
    },
];
const NavLinks = [{ name: 'Home', link: '/' }, { name: 'About', link: '/about' }, { name: 'Activities', link: '/activities' }, { name: 'Blog', link: '/blog' }, { name: 'Gallery', link: '/gallery' }, { name: 'Contact', link: '/contact' }];

const FooterExternalLinksData = [
    { name: 'Komandoo Council', link: 'https://www.facebook.com/komandoocouncil/' },
    { name: 'Ministry of Youth and Sports', link: 'https://youth.gov.mv/' },
];

const ImageLoader = () => (
    <div className="absolute inset-0 bg-gray-200 animate-pulse">
        <div className="h-full w-full flex items-center justify-center">
            <svg className="animate-spin h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>
    </div>
);

export default function Galleries({ galleries }) {
    const [index, setIndex] = useState(-1);

    const slides = galleries.map(gallery => ({
        src: gallery.featured_image_url,
        title: gallery.title,
        description: gallery.description,
        thumbnail: gallery.thumbnail_image_url,
    }));


    return (
        <GuestLayout navLinks={NavLinks} footerSocialData={FooterSocialData} footerExternalLinksData={FooterExternalLinksData}>
            <Head title="Galleries" />

            <FullWidthTopTitleSection title="Our" titleHighlight="Galleries">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6 xl:gap-8">
                    {galleries.map((gallery, idx) => (
                        <GalleryThumbnail key={idx} gallery={gallery} />
                    ))}
                </div>
            </FullWidthTopTitleSection>

            <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Zoom, Thumbnails]}
                animation={{ fade: 300 }}
                carousel={{
                    finite: true,
                    preload: 2,
                }}
                render={{
                    slide: ({ slide }) => {
                        return (
                            <>
                                <LazyLoadImage
                                    src={slide.src}
                                    alt={slide.title}
                                    effect="opacity"
                                    style={{ objectFit: "contain", height: "100%" }}
                                    placeholder={<ImageLoader />}
                                    threshold={100}
                                    wrapperClassName="h-full"
                                />
                                {slide.title && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                                        <h3 className="text-lg font-semibold">{slide.title}</h3>
                                        {slide.description && (
                                            <p className="text-sm mt-1">{slide.description}</p>
                                        )}
                                    </div>
                                )}
                            </>
                        );
                    },
                }}
                thumbnails={{
                    position: "bottom",
                    width: 120,
                    height: 80,
                    border: 2,
                    borderRadius: 4,
                    padding: 4,
                    gap: 16,
                }}
                zoom={{
                    maxZoomPixelRatio: 3,
                    zoomInMultiplier: 2,
                    doubleTapDelay: 300,
                    doubleClickDelay: 300,
                    doubleClickMaxStops: 2,
                    keyboardMoveDistance: 50,
                    wheelZoomDistanceFactor: 100,
                    pinchZoomDistanceFactor: 100,
                    scrollToZoom: true,
                }}
            />
        </GuestLayout>
    );
}
