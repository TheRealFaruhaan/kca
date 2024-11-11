import { Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

// Footer Social Icons
import FacebookIcon from '@/Assets/Images/facebook.svg';
import SportsIcon from '@/Assets/Images/sports.svg';
import LinkedInIcon from '@/Assets/Images/linkedin.svg';
import InstagramIcon from '@/Assets/Images/instagram.svg';
import BeIcon from '@/Assets/Images/be.svg';
import FullWidthTopTitleSection from '@/Components/Sections/FullWidthTopTitleSection';
import CardGrid from '@/Components/CardGrid';
import ImageTagTitleSubtitlePriceCard from '@/Components/ImageTagTitleSubtitlePriceCard';

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

export default function Activities({ activities }) {

    return (
        <GuestLayout navLinks={NavLinks} footerSocialData={FooterSocialData} footerExternalLinksData={FooterExternalLinksData}>
            <Head title="Activities" />

            <FullWidthTopTitleSection title="Our" titleHighlight="Activities" subtitle="The activities that Komandoo Community Alliance has been involved in" >
                <CardGrid>
                    {activities.map((activity, index) => (
                        <ImageTagTitleSubtitlePriceCard
                            key={index}
                            img={activity.image_url}
                            tag={activity.tag}
                            title={activity.title}
                            subtitle={activity.subtitle}
                            price={activity.cost}
                        />
                    ))}
                </CardGrid>
            </FullWidthTopTitleSection>
        </GuestLayout>
    );
}
