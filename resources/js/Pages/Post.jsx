import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

// Footer Social Icons
import FacebookIcon from '@/Assets/Images/facebook.svg';
import SportsIcon from '@/Assets/Images/sports.svg';
import LinkedInIcon from '@/Assets/Images/linkedin.svg';
import InstagramIcon from '@/Assets/Images/instagram.svg';
import BeIcon from '@/Assets/Images/be.svg';
import FullWidthTopTitleSection from '@/Components/Sections/FullWidthTopTitleSection';
import LoadingState from '@/Components/LoadingState';
import { Suspense } from 'react';
import SwiperSlider from '@/Components/SwiperSlider';
import { SwiperSlide } from 'swiper/react';
import ImageCategoryTitleSubtitleDateCard from '@/Components/ImageCategoryTitleSubtitleDateCard';

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

export default function Post({ post, similarPosts }) {
    return (
        <GuestLayout navLinks={NavLinks} footerSocialData={FooterSocialData} footerExternalLinksData={FooterExternalLinksData}>
            <Head title={post.title} />

            <div className="bg-white px-6 py-16 lg:px-8">
                <div className="mx-auto max-w-[1320px] text-base/7 text-gray-700">
                    {/* CONTENT STARTS HERE */}
                    <h1 className="mt-2 text-pretty text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        {post.title}
                    </h1>
                    <figcaption className="mt-4 flex gap-x-2 text-sm/6 text-gray-500 justify-center">
                        <Link href={`/blog/category/${post.category.slug}`}><span className="text-indigo-600 font-semibold">{post.category.name}</span></Link>
                        <span className="mx-2 text-gray-500">•</span>
                        {new Date(post.publication_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </figcaption>
                    <figure className="mt-16">
                        <img
                            alt=""
                            src={post.featured_image_url}
                            className="w-full aspect-video rounded-xl bg-gray-50 object-cover shadow-xl"
                        />
                    </figure>

                    <div className="mt-10 max-w-[1320px]">
                        {post.content}
                    </div>
                    <div className="flex overflow-y-auto justify-start mt-5 space-x-2 text-xs py-5">
                        {post.tags.map((tag, index) => (
                            <Link
                                href={`/blog/tag/${tag.slug}`}
                                key={index}
                                className="bg-tag-bg py-[6px] px-[13px] rounded-md w-fit
                                         transition-all duration-300 ease-in-out
                                         hover:scale-105 hover:z-50 hover:shadow-sm
                                         cursor-pointer"
                            >
                                <p className="transition-colors duration-300 hover:text-white">{tag.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>


            <Suspense fallback={<LoadingState />}>
                <FullWidthTopTitleSection title="Related" titleHighlight="Blog Posts" bgColor="bg-white">
                    <SwiperSlider spaceBetween={5} slidesPerView={4} overflowVisible>
                        {similarPosts?.map((similarPost) => (
                            <SwiperSlide key={similarPost.id}>
                                <ImageCategoryTitleSubtitleDateCard
                                    key={similarPost.id}
                                    img={similarPost.thumbnail_image_url}
                                    category={similarPost.category.name}
                                    title={similarPost.title}
                                    subtitle={similarPost.excerpt}
                                    href={`/blog/${similarPost.slug}`}
                                    titleLines={2}
                                    published_date={new Date(similarPost.publication_date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                />
                            </SwiperSlide>
                        ))}
                    </SwiperSlider>
                </FullWidthTopTitleSection>
            </Suspense>
        </GuestLayout>
    );
}
