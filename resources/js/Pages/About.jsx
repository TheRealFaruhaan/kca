import { Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

// Footer Social Icons
import FacebookIcon from '@/Assets/Images/facebook.svg';
import SportsIcon from '@/Assets/Images/sports.svg';
import LinkedInIcon from '@/Assets/Images/linkedin.svg';
import InstagramIcon from '@/Assets/Images/instagram.svg';
import BeIcon from '@/Assets/Images/be.svg';
import FullWidthTopTitleSection from '@/Components/Sections/FullWidthTopTitleSection';

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

export default function About() {
    return (
        <GuestLayout navLinks={NavLinks} footerSocialData={FooterSocialData} footerExternalLinksData={FooterExternalLinksData}>
            <Head title="About" />

            <FullWidthTopTitleSection title="About" titleHighlight="Us" subtitle="About Komandoo Community Alliance" >
                <div className="flex flex-col gap-8 text-justify w-full xl:w-auto">
                    <p>
                        Komandoo Community Alliance is a non-profit organization dedicated to fostering sustainable development and enhancing the quality of life for the people of Komandoo. Founded with a vision of creating lasting positive change, we work tirelessly to address the diverse needs of our community through collaborative initiatives and innovative solutions.
                    </p>

                    <p>
                        Our mission extends beyond immediate assistance; we strive to build a foundation for long-term growth and prosperity. Through strategic partnerships with local government bodies, businesses, and community leaders, we implement projects that span various sectors including education, healthcare, environmental conservation, and economic development.
                    </p>

                    <p>
                        At the heart of our organization lies a deep commitment to community engagement and participatory development. We believe that sustainable change comes from within the community itself, which is why we actively involve local residents in our decision-making processes and project implementations. This approach ensures that our initiatives are not only relevant but also deeply rooted in the community's needs and aspirations.
                    </p>

                    <p>
                        Over the years, we have successfully launched numerous initiatives that have made tangible differences in people's lives. From establishing educational programs that empower youth with essential skills to implementing environmental projects that protect our island's natural resources, our work touches every aspect of community life. We take pride in our ability to bring together diverse stakeholders and create synergies that benefit the entire community.
                    </p>

                    <p>
                        Looking ahead, Komandoo Community Alliance remains committed to its founding principles while adapting to meet emerging challenges. We continue to explore innovative approaches to community development, always keeping the welfare of Komandoo's residents at the forefront of our efforts. Through dedication, collaboration, and unwavering commitment to our mission, we work towards building a brighter, more sustainable future for generations to come.
                    </p>
                </div>
            </FullWidthTopTitleSection>
        </GuestLayout>
    );
}
