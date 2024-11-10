import LogoText from '@/Assets/Images/KCA_LOGO_TEXT.svg';
import Button from '@/Components/Button';
import { Link } from '@inertiajs/react';

export default function FooterSection({ navLinks, footerSocialData, footerExternalLinksData }) {
    return (
        <div>
            <div className="max-w-[1320px] mx-4 xl:mx-auto my-[50px] md:my-[100px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-14 ">
                    <div className="flex gap-4 flex-col">
                        <div>
                            <img
                                src={LogoText}
                                alt="image"
                                width={140}
                                height={140}
                            />
                        </div>
                        <p className="text-2xl font-semibold text-black">Contact us</p>
                        <div className="text-primaryGray">
                            <p><a href="tel:+9609949955">+960 994-9955</a></p>
                            <p>
                                Komandoo Community Alliance <br /> Sh. Komandoo,
                                Republic of Maldives
                            </p>
                        </div>
                        <p className="cursor-pointer"><a href="mailto:info@kca.mv">Email: info@kca.mv</a></p>
                        <div className="flex gap-4 flex-wrap md:flex-nowrap">
                            {footerSocialData.map((item, index) => (
                                <img
                                    key={index}
                                    src={item?.icon_path}
                                    alt="image"
                                    width={48}
                                    height={48}
                                    className="cursor-pointer rounded-md hover:shadow-card"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <p className="text-2xl font-semibold">Explore</p>
                        </div>
                        <div className="space-y-4 text-primaryGray flex flex-col">
                            {navLinks.map((item, index) => (
                                <div key={index}>
                                    <Link as='p' href={item.link} className={`hover:text-primary-red hover:underline cursor-pointer inline-block ${window.location.pathname === item.link ? 'text-primary-red' : ''}`}>
                                        {item.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <p className="text-2xl font-semibold">External Links</p>
                        </div>
                        <div className="space-y-4 text-primaryGray">
                            {footerExternalLinksData.map((item, index) => (
                                <div key={index}>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-primary-red hover:underline cursor-pointer inline-block"
                                    >
                                        {item.name}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <p className="text-2xl font-semibold">Subscribe</p>
                        </div>
                        <div className=" text-primaryGray">
                            <p>
                                Lorem Ipsum has been them an
                                <br /> printer took a galley make book.
                            </p>
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email here"
                                className="bg-footer-bg p-4 xl:w-full rounded-lg focus-within:ring-2 focus-within:ring-primary-red outline-none"
                                required
                            />
                        </div>
                        <div>
                            <Button>Subscribe</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
