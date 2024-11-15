import React from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';
import { FaPenNib } from 'react-icons/fa';
import { PiFileHtmlLight } from 'react-icons/pi';
import { MdSettingsVoice, MdBusinessCenter } from 'react-icons/md';
import { CiCloudMoon, CiCamera, CiMusicNote1 } from 'react-icons/ci';
import { GoDatabase, GoLightBulb } from 'react-icons/go';
import { IoFitness } from 'react-icons/io5';
import { RiMoneyPoundBoxFill } from 'react-icons/ri';
import { PiEyeglassesBold } from 'react-icons/pi';
import { lazy, Suspense } from 'react';
import LoadingState from '@/Components/LoadingState';
import { Head } from '@inertiajs/react';
import SwiperSlider from '@/Components/SwiperSlider';
import { SwiperSlide } from 'swiper/react';

// Achievement Images
import AchievementImg from '@/Assets/Images/img.svg';
import AchievementImg1 from '@/Assets/Images/img1.png';
import AchievementImg2 from '@/Assets/Images/img2.svg';
import AchievementImg4 from '@/Assets/Images/img4.svg';
import AchievementImg5 from '@/Assets/Images/img5.svg';

// Footer Social Icons
import FacebookIcon from '@/Assets/Images/facebook.svg';
import SportsIcon from '@/Assets/Images/sports.svg';
import LinkedInIcon from '@/Assets/Images/linkedin.svg';
import InstagramIcon from '@/Assets/Images/instagram.svg';
import BeIcon from '@/Assets/Images/be.svg';

// Other Images
import DevLine from '@/Assets/Images/DevLine.svg';

// Components
import Button from '@/Components/Button';
import HeroSection from '@/Components/Sections/HeroSection';
import IconTitleButtonCard from '@/Components/IconTitleButtonCard';
import FullWidthTopTitleEndImage from '@/Components/Sections/FullWidthTopTitleEndImage';
import FullWidthStartImage from '@/Components/Sections/FullWidthStartImage';
import GuestLayout from '@/Layouts/GuestLayout';
import CardGrid from '@/Components/CardGrid';

// Lazy load components that aren't immediately visible
const ImageTagTitleSubtitlePriceCard = lazy(() => import('@/Components/ImageTagTitleSubtitlePriceCard'));
const PhotoTitleSubtitleCard = lazy(() => import('@/Components/PhotoTitleSubtitleCard'));
const TopRoundImageTitleSubtitleQuoteCard = lazy(() => import('@/Components/TopRoundImageTitleSubtitleQuoteCard'));
const FullWidthTopTitleSection = lazy(() => import('@/Components/Sections/FullWidthTopTitleSection'));
const FullWidthStartTitleSection = lazy(() => import('@/Components/Sections/FullWidthStartTitleSection'));



const FocusAreasData = [
    {
        icon: <FaPenNib className="text-2xl" />,
        title: 'Design',
    },
    {
        icon: <PiFileHtmlLight className="text-2xl" />,
        title: 'Development',
    },
    {
        icon: <MdSettingsVoice className="text-2xl" />,
        title: 'Marketing',
    },
    {
        icon: <MdBusinessCenter className="text-2xl" />,
        title: 'Business',
    },
    {
        icon: <CiCloudMoon className="text-2xl" />,
        title: 'Life Style',
    },
    {
        icon: <CiCamera className="text-2xl" />,
        title: 'Photography',
    },
    {
        icon: <CiMusicNote1 className="text-2xl" />,
        title: 'Music',
    },
    {
        icon: <GoDatabase className="text-2xl" />,
        title: 'Data Science',
    },
    {
        icon: <GoLightBulb className="text-2xl" />,
        title: 'Personal',
    },
    {
        icon: <IoFitness className="text-2xl" />,
        title: 'Health',
    },
    {
        icon: <RiMoneyPoundBoxFill className="text-2xl" />,
        title: 'Finance',
    },
    {
        icon: <PiEyeglassesBold className="text-2xl" />,
        title: 'Teaching',
    },
];

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

export default function Welcome({ recentActivities, teamMembers, testimonials }) {
    return (
        <GuestLayout title="Welcome" navLinks={NavLinks} footerSocialData={FooterSocialData} footerExternalLinksData={FooterExternalLinksData}>
            <Head title="Welcome" />
            <HeroSection />
            <Suspense fallback={<LoadingState />}>
                <FullWidthStartTitleSection
                    titleLn1="Most"
                    titleLn2="Recent"
                    titleLn3="Activities"
                    subtitle="Check out our most recent activities"
                    bgColor="bg-primary-bg"
                >
                    <SwiperSlider spaceBetween={5} slidesPerView={4}>
                        {recentActivities
                            .sort((a, b) => new Date(b.start_date) - new Date(a.start_date))
                            .map((activity, index) => (
                                <SwiperSlide key={activity.id}>
                                    <ImageTagTitleSubtitlePriceCard
                                        img={activity.thumbnail_url}
                                        tag={activity.tag}
                                        title={activity.title}
                                        subtitle={activity.subtitle}
                                        price={activity.cost}
                                        href={`/activities/${activity.slug}`}
                                    />
                                </SwiperSlide>
                            ))}
                    </SwiperSlider>
                </FullWidthStartTitleSection>
            </Suspense>
            <FullWidthTopTitleSection title="Current" titleHighlight="Focus Areas" subtitle="The focus areas for our current activities." bgColor="bg-white" underlineWidth={180} underlineLeftClasses="left-16 md:left-40">
                <CardGrid>
                    {FocusAreasData.map((item, index) => (
                        <IconTitleButtonCard key={index} Icon={HiArrowUpRight} item={item} />
                    ))}
                </CardGrid>
            </FullWidthTopTitleSection>

            <Suspense fallback={<LoadingState />}>
                <FullWidthTopTitleSection title="Our" titleHighlight="Team" bgColor="bg-[#FFFAF5]">
                    <SwiperSlider spaceBetween={10} slidesPerView={4} overflowVisible>
                        {teamMembers.map((member, index) => (
                            <SwiperSlide key={index}>
                                <PhotoTitleSubtitleCard photo={member?.thumbnail_image_url} title={member?.name} subtitle={member?.role} />
                            </SwiperSlide>
                        ))}
                    </SwiperSlider>
                </FullWidthTopTitleSection>
            </Suspense>

            <FullWidthTopTitleEndImage title="Our" titleHighlight="Achievements" img={AchievementImg1} bgColor="bg-white">
                <div className="flex  flex-col gap-6 sm:gap-[50px] flex-wrap">
                    <div className="flex items-center gap-2 sm:gap-6">
                        <div>
                            <img
                                src={AchievementImg2}
                                alt="image"
                                height={64}
                                width={64}
                                className="h-16 w-16"
                            />
                        </div>
                        <div>
                            <p className="font-semibold sm:text-2xl">300</p>
                            <p className="font-normal text-lg text-primaryGray">
                                Projects Completed
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-6">
                        <div>
                            <img
                                src={AchievementImg}
                                alt="image"
                                height={64}
                                width={64}
                                className="h-16 w-16"
                            />
                        </div>
                        <div>
                            <p className="font-semibold sm:text-2xl">$100,000+</p>
                            <p className="font-normal text-lg text-primaryGray">Spent on the Community</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 sm:gap-[50px]">
                    <div className="flex items-center gap-2 sm:gap-6">
                        <div>
                            <img
                                src={AchievementImg4}
                                alt="image"
                                height={64}
                                width={64}
                                className="h-16 w-16"
                            />
                        </div>
                        <div>
                            <p className="font-semibold sm:text-2xl">20,000+</p>
                            <p className="font-normal text-lg text-primaryGray">Courses Conducted</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-6">
                        <div>
                            <img
                                src={AchievementImg5}
                                alt="image"
                                height={64}
                                width={64}
                                className="h-16 w-16"
                            />
                        </div>
                        <div>
                            <p className="font-semibold sm:text-2xl">1,00,000+</p>
                            <p className="font-normal text-lg text-primaryGray">
                                People Engaged
                            </p>
                        </div>
                    </div>
                </div>
            </FullWidthTopTitleEndImage>

            <Suspense fallback={<LoadingState />}>
                <FullWidthTopTitleSection title="Notable" titleHighlight="Testimonials" bgColor="bg-white" underlineLeftClasses="left-24 md:left-44">
                    <SwiperSlider spaceBetween={10} slidesPerView={2} overflowVisible freeMode>
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <TopRoundImageTitleSubtitleQuoteCard img={testimonial?.thumbnail_image_url} title={testimonial?.name} subtitle={testimonial?.role} quote={testimonial?.quote} />
                            </SwiperSlide>
                        ))}
                    </SwiperSlider>
                </FullWidthTopTitleSection>
            </Suspense>

            <FullWidthStartImage img={DevLine} bgColor="bg-primary-bg">
                <div className="flex flex-col gap-3 md:gap-6">
                    <div className="text-black text-2xl md:text-3xl lg:text-[40px]  font-semibold leading-[38px]">
                        <p>
                            <span className="text-primary-red">
                                Donate
                            </span>{' '}
                            to{' '}
                        </p>
                        <p>our cause today</p>
                    </div>
                    <div>
                        <p className="text-[#06241B] sm:text-lg md:text-2xl font-normal">
                            Start contributing to the community by donating.
                        </p>
                    </div>
                </div>
                <div>
                    <Button>Donate $</Button>
                </div>
            </FullWidthStartImage>
        </GuestLayout>
    );
}
