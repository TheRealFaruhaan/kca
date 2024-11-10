import React, { useState } from 'react';

// Menu Icons
import CloseMenu from '@/Assets/Images/close_menu.svg';
import OpenMenu from '@/Assets/Images/open-menu.svg';
import Logo from '@/Assets/Images/KCA_LOGO_HORIZONTAL.svg';
import { Link } from '@inertiajs/react';
export default function HeaderSection({ navLinks }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="md:border-b-2 mx-4">
            <nav className="max-w-[1320px] lg:mx-auto flex items-center justify-between py-5 cursor-pointer">
                <div>
                    <Link as='img' href="/"
                        src={Logo}
                        alt="image"
                        width={208}
                        height={40}
                    />
                </div>
                <div className="hidden md:flex">
                    <div className="items-center space-x-12 flex">
                        <ul className="flex gap-2 lg:gap-8 text-base text-primaryGray font-medium ">
                            {navLinks.map((item, index) => (
                                <Link as='li'
                                    href={item.link}
                                    key={index}
                                    className={`cursor-pointer hover:text-#365CCE hover:underline ${window.location.pathname === item.link ? 'text-primary-red' : ''}`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* <div className="hidden md:block">
                    <div className="flex items-center gap-2 lg:gap-6 ">
                        <div className="flex items-center gap-2 font-medium hover:text-#365CCE cursor-pointer hover:underline">
                            <CiLock className="text-2xl" />
                            <p className="text-primaryGray hover:text-#365CCE">Login</p>
                        </div>
                        <Button />
                    </div>
                </div> */}
                <div className="md:hidden block cursor-pointer" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <img src={CloseMenu} alt="close menu" />
                    ) : (
                        <img src={OpenMenu} alt="close menu" />
                    )}
                </div>
                {isMenuOpen && (
                    <ul
                        className="flex flex-col bg-primary-red text-white gap-6 text-[16px] font-normal items-center mt-10 py-5 md:hidden
                   z-50 absolute top-7 left-0 w-full transition duration-1000 ease-in-out"
                    >
                        <div className="space-y-2">
                            {navLinks.map((item, index) => (
                                <Link as='p' href={item.link} key={index} className="cursor-pointer  hover:underline">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        {/* <div className="flex flex-col text-white items-center gap-2 lg:gap-6 ">
                            <div className="flex items-center gap-2 font-medium cursor-pointer hover:underline">
                                <CiLock className="text-2xl" />
                                <p>Login</p>
                            </div>
                            <div className="border-2 border-white text-white px-2 lg:px-6 py-3 font-medium rounded-lg cursor-pointer hover:underline">
                                Sign up for Free
                            </div>
                        </div> */}
                    </ul>
                )}
            </nav>
        </header>
    );
};
