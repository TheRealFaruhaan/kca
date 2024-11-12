import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

// Footer Social Icons
import FacebookIcon from '@/Assets/Images/facebook.svg';
import SportsIcon from '@/Assets/Images/sports.svg';
import LinkedInIcon from '@/Assets/Images/linkedin.svg';
import InstagramIcon from '@/Assets/Images/instagram.svg';
import BeIcon from '@/Assets/Images/be.svg';
import FullWidthTopTitleSection from '@/Components/Sections/FullWidthTopTitleSection';
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
const NavLinks = [{ name: 'Home', link: '/' }, { name: 'About', link: '/about' }, { name: 'Activities', link: '/activities' }, { name: 'Blog', link: '/blog' }, { name: 'Contact', link: '/contact' }];
const FooterExternalLinksData = [
    { name: 'Komandoo Council', link: 'https://www.facebook.com/komandoocouncil/' },
    { name: 'Ministry of Youth and Sports', link: 'https://youth.gov.mv/' },
];

export default function Blog({ posts, category, tag }) {
    return (
        <GuestLayout navLinks={NavLinks} footerSocialData={FooterSocialData} footerExternalLinksData={FooterExternalLinksData}>
            <Head title="Blog" />

            <FullWidthTopTitleSection title="Blog" titleHighlight={category ? `Posts: ${category}` : tag ? `Posts: ${tag}` : "Posts"} subtitle="Latest News and Updates">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {posts.data.map((item, index) => (
                        <ImageCategoryTitleSubtitleDateCard
                            key={index}
                            img={item.featured_image_url}
                            category={item.category.name}
                            title={item.title}
                            subtitle={item.excerpt}
                            href={`/blog/${item.slug}`}
                            titleLines={3}
                            published_date={new Date(item.publication_date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        />
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-8 flex justify-center gap-2">
                    {posts.links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url}
                            className={`px-4 py-2 rounded ${link.active ? 'bg-primary-red text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} ${!link.url && 'opacity-50 cursor-not-allowed'}`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ))}
                </div>
            </FullWidthTopTitleSection>
        </GuestLayout>
    );
}
