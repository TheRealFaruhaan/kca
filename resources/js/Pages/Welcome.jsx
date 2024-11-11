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

// Project Images
import Project1 from '@/Assets/Images/course_img1.png';
import Project2 from '@/Assets/Images/course_img2.png';
import Project3 from '@/Assets/Images/course_img3.png';

// Achievement Images
import AchievementImg from '@/Assets/Images/img.svg';
import AchievementImg1 from '@/Assets/Images/img1.png';
import AchievementImg2 from '@/Assets/Images/img2.svg';
import AchievementImg4 from '@/Assets/Images/img4.svg';
import AchievementImg5 from '@/Assets/Images/img5.svg';

// Team Images
import Team1 from '@/Assets/Images/instructor_1.png';
import Team2 from '@/Assets/Images/instructor_2.png';
import Team3 from '@/Assets/Images/instructor_3.png';
import Team4 from '@/Assets/Images/instructor_4.png';

// Testimonials Images
import TestimonialsImg1 from '@/Assets/Images/feedback_img.png';
import TestimonialsImg2 from '@/Assets/Images/feedback_img1.png';

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
import Slider from '@/Components/Slider';
import IconTitleButtonCard from '@/Components/IconTitleButtonCard';
import PhotoTitleSubtitleCard from '@/Components/PhotoTitleSubtitleCard';
import FullWidthTopTitleEndImage from '@/Components/Sections/FullWidthTopTitleEndImage';
import TopRoundImageTitleSubtitleQuoteCard from '@/Components/TopRoundImageTitleSubtitleQuoteCard';
import FullWidthStartImage from '@/Components/Sections/FullWidthStartImage';
import GuestLayout from '@/Layouts/GuestLayout';
import CardGrid from '@/Components/CardGrid';

// Lazy load components that aren't immediately visible
const ImageTagTitleSubtitlePriceCard = lazy(() => import('@/Components/ImageTagTitleSubtitlePriceCard'));
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
const TeamData = [
    {
        name: 'Jacob Jones',
        role: 'UI-UX Designer',
        img: Team1,
    },
    {
        name: 'Jonny Jones',
        role: 'Web Developer',
        img: Team2,
    },
    {
        name: 'Robot keller',
        role: 'Frontend Developer',
        img: Team3,
    },
    {
        name: 'Jacob Jones',
        role: 'UI-UX Designer',
        img: Team4,
    },
    {
        name: 'Jacob Jones',
        role: 'full stack developer',
        img: Team1,
    },
    {
        name: 'Pin Jones',
        role: 'UI-UX Designer',
        img: Team2,
    },
    {
        name: 'Jacob Jones',
        role: 'Web Designer',
        img: Team3,
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
const NavLinks = [{ name: 'Home', link: '/' }, { name: 'About', link: '/about' }, { name: 'Activities', link: '/activities' }, { name: 'Blog', link: '/blog' }, { name: 'Contact', link: '/contact' }];
const FooterExternalLinksData = [
    { name: 'Komandoo Council', link: 'https://www.facebook.com/komandoocouncil/' },
    { name: 'Ministry of Youth and Sports', link: 'https://youth.gov.mv/' },
];
const TestimonialsData = [
    {
        name: 'Alice Johnson',
        role: 'UI-UX Designer',
        imagePath: TestimonialsImg1,
        description:
            'Alice is a highly creative UI/UX designer with over 5 years of experience in crafting intuitive and engaging user interfaces. She has a deep understanding of user psychology and focuses on delivering exceptional digital experiences. Alice has worked on a wide variety of projects ranging from mobile applications to web platforms.',
    },
    {
        name: 'Michael Smith',
        role: 'Web Developer',
        imagePath: TestimonialsImg2,
        description:
            'Michael is a skilled web developer specializing in front-end and back-end development with a knack for solving complex problems. He has extensive experience in building dynamic websites and web applications using technologies like HTML, CSS, JavaScript, and React.',
    },
    {
        name: 'Sophia Lee',
        role: 'Software Engineer',
        imagePath: TestimonialsImg1,
        description:
            "Sophia is a highly proficient software engineer with expertise in developing scalable software solutions. She has experience working with various programming languages such as Python, Java, and C++. Sophia's focus is on building robust applications that are easy to maintain and optimize for performance.",
    },
    {
        name: 'David Patel',
        role: 'Backend Developer',
        imagePath: TestimonialsImg2,
        description:
            'David is a backend developer with a strong understanding of server-side technologies, database management, and APIs. His expertise includes working with Node.js, Express, and MongoDB, which allows him to build robust and scalable systems. He is passionate about optimizing back-end processes to improve performance and reliability.',
    },
    {
        name: 'Emma Davis',
        role: 'Frontend Developer',
        imagePath: TestimonialsImg1,
        description:
            'Emma is a dedicated frontend developer who excels at turning design concepts into fully functional websites and web applications. She has a strong grasp of modern front-end technologies like React, Vue.js, and Material UI, ensuring that her work is both visually appealing and technically sound.',
    },
    {
        name: 'James Carter',
        role: 'UI-UX Designer',
        imagePath: TestimonialsImg2,
        description:
            'James is an experienced UI/UX designer who combines creativity with technical expertise to create engaging and user-centered designs. His work spans various industries, and he is known for his ability to simplify complex workflows while maintaining aesthetic appeal.',
    },
];

export default function Welcome({ recentActivities }) {
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
                        {recentActivities.map((activity, index) => (
                            <SwiperSlide key={activity.id}>
                                <ImageTagTitleSubtitlePriceCard
                                    img={activity.image_url}
                                    tag={activity.tag}
                                    title={activity.title}
                                    subtitle={activity.subtitle}
                                    price={activity.cost}
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
            <FullWidthTopTitleSection title="Our" titleHighlight="Team" bgColor="bg-[#FFFAF5]">
                <Slider width={280}>
                    {TeamData.map((team, index) => (
                        <PhotoTitleSubtitleCard key={index} photo={team?.img} title={team?.name} subtitle={team?.role} />
                    ))}
                </Slider>
            </FullWidthTopTitleSection>
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
            <FullWidthTopTitleSection title="Notable" titleHighlight="Testimonials" bgColor="bg-white" underlineLeftClasses="left-24 md:left-44">
                <Slider width={600} isUpdateWidth={true}>
                    {TestimonialsData.map((item, index) => (
                        <TopRoundImageTitleSubtitleQuoteCard key={index} img={item?.imagePath} title={item?.name} subtitle={item?.role} quote={item?.description} />
                    ))}
                </Slider>
            </FullWidthTopTitleSection>
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
