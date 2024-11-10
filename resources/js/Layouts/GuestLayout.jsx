import HeaderSection from '@/Components/Sections/HeaderSection';
import FooterSection from '@/Components/Sections/FooterSection';
import { Head } from '@inertiajs/react';

export default function GuestLayout({ children, navLinks, footerSocialData, footerExternalLinksData }) {

    return (
        <div className="min-h-screen bg-light">
            <HeaderSection navLinks={navLinks} />
            {children}
            <FooterSection navLinks={navLinks} footerSocialData={footerSocialData} footerExternalLinksData={footerExternalLinksData} />
        </div>
    );
}
