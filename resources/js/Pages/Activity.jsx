import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

// Footer Social Icons
import FacebookIcon from '@/Assets/Images/facebook.svg';
import SportsIcon from '@/Assets/Images/sports.svg';
import LinkedInIcon from '@/Assets/Images/linkedin.svg';
import InstagramIcon from '@/Assets/Images/instagram.svg';
import BeIcon from '@/Assets/Images/be.svg';
import FullWidthTopTitleSection from '@/Components/Sections/FullWidthTopTitleSection';
import { Suspense } from 'react';
import LoadingState from '@/Components/LoadingState';
import SwiperSlider from '@/Components/SwiperSlider';
import { SwiperSlide } from 'swiper/react';
import PhotoTitleSubtitleCard from '@/Components/PhotoTitleSubtitleCard';
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

export default function Activity({ activity }) {
    return (
        <GuestLayout navLinks={NavLinks} footerSocialData={FooterSocialData} footerExternalLinksData={FooterExternalLinksData}>
            <Head title={activity.title} />

            <FullWidthTopTitleSection title={activity.title} subtitle={activity.subtitle} >
                <div className="flex flex-col gap-8 text-justify w-full xl:w-auto">
                    <p>
                        {activity.content}
                    </p>

                    {/* Sponsors section */}
                    {activity.entities && activity.entities.length > 0 && (
                        <FullWidthTopTitleSection titleHighlight="Sponsors" subtitle="The following are the sponsors of this activity" isSubSection={true} underlineLeftClasses='left-0 md:left-0'>
                            <div className="flex overflow-x-auto gap-6 pb-4">
                                {activity.entities.map((entity, index) => (
                                    <Link
                                        key={entity.id}
                                        href={entity.website_url || (entity.social_media && Object.values(entity.social_media)[0]) || '#'}
                                        className="flex flex-col items-center flex-shrink-0 relative"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {entity.thumbnail_logo_url ? (
                                            <img
                                                src={entity.thumbnail_logo_url}
                                                alt={`${entity.name} logo`}
                                                className="h-24 w-auto object-contain mb-2"
                                            />
                                        ) : (
                                            <div className="h-24 w-48 flex items-center justify-center text-center font-semibold text-gray-700">
                                                {entity.name}
                                            </div>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </FullWidthTopTitleSection>
                    )}

                    {/* Timeline section */}
                    <FullWidthTopTitleSection titleHighlight="Timeline" subtitle="Events from this activity" isSubSection={true} underlineLeftClasses='left-0 md:left-0'>

                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute left-16 h-full w-0.5 bg-gray-200"></div>

                            {/* Timeline events */}
                            {activity.events
                                ?.sort((a, b) => new Date(b.event_date) - new Date(a.event_date))
                                .map((event, index) => (
                                    <div key={index} className="mb-6 relative flex">
                                        {/* Date on the left */}
                                        <div className="w-16 pt-4 text-right text-sm text-gray-600 pr-4">
                                            {new Date(event.event_date).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </div>

                                        {/* Timeline dot */}
                                        <div className="absolute left-16 -ml-2 w-4 h-4 mt-5 rounded-full bg-primary-red"></div>

                                        {/* Event content */}
                                        <div className="ml-5 bg-white p-4 rounded-lg shadow flex-1">
                                            <h3 className="font-semibold text-lg">{event.title}</h3>
                                            <p className="mt-2">{event.description}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </FullWidthTopTitleSection>

                    {/* Gallery section */}
                    {activity.galleries && activity.galleries.length > 0 && (
                        <Suspense fallback={<LoadingState />}>
                            <FullWidthTopTitleSection titleHighlight="Gallery" subtitle="Photos related to this activity" width="w-full" isSubSection={true} underlineLeftClasses='left-0 md:left-0'>
                                <SwiperSlider spaceBetween={10} slidesPerView={4} overflowVisible>
                                    {activity.galleries.map((gallery, index) => (
                                        <SwiperSlide key={index}>
                                            <GalleryThumbnail gallery={gallery} />
                                        </SwiperSlide>
                                    ))}
                                </SwiperSlider>
                            </FullWidthTopTitleSection>
                        </Suspense>
                    )}
                </div>
            </FullWidthTopTitleSection>
        </GuestLayout>
    );
}
