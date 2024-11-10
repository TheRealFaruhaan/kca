import React from 'react';

import { FiSearch } from 'react-icons/fi';

import Star from '@/Assets/Images/Star.svg';
import Img from '@/Assets/Images/img.png';
import Img2 from '@/Assets/Images/img2.png';
import VectorImg from '@/Assets/Images/Vector_img.svg';
import BottomVector from '@/Assets/Images/bottom_vector.svg';
import Sparkle from '@/Assets/Images/sparkle.svg';
import StarFour from '@/Assets/Images/StarFour.svg';

export default function HeroSection() {
    return (
        <div className="max-w-[1320px] mx-auto">
            <div className="my-[50px] md:my-[70px] lg:my-[100px] flex flex-col xl:flex-row justify-center items-center xl:gap-24 2xl:gap-40 mx-4 xl:mx-0">
                <div className="flex flex-col gap-6 relative text-center lg:text-left">
                    <div>
                        <p className="text-base sm:text-lg md:text-xl xl:text-2xl font-semibold text-primary-red uppercase">
                            COLLABORATION CREATES OPPORTUNITIES
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 relative">
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold">
                            Our aim is to <span className="text-primary-red">collaborate</span> with
                        </p>
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold">
                            the <span className="text-primary-red">community</span> and create
                        </p>
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold">
                            opportunities for sustainable
                        </p>
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold">
                            development
                        </p>
                        <img
                            src={BottomVector}
                            alt="image bottom vector"
                            width={120}
                            height={50}
                            className="absolute top-8 lg:top-9 left-40 lg:left-72 w-1/4 md:w-1/4"
                        />
                        <img
                            src={BottomVector}
                            alt="image bottom vector"
                            width={120}
                            height={50}
                            className="absolute top-[70px] md:top-[82px] left-24 w-1/4 md:w-1/4"
                        />
                    </div>
                    <div className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mx-auto lg:mx-0 text-sm">
                        <p className="text-primaryGray">
                            With the help of the local council and local population.
                        </p>
                    </div>
                    <div className="w-full max-w-[400px] xl:max-w-[520px] bg-gray-50 shadow-input px-4 md:px-6 py-3 md:py-6 flex justify-between items-center mx-auto lg:mx-0 focus-within:ring-2 focus-within:ring-#365CCE rounded-lg">
                        <input
                            type="text"
                            placeholder="What do you want to find?"
                            className="bg-transparent text-sm w-full focus:outline-none"
                        />
                        <FiSearch />
                    </div>
                    <div className="absolute top-[-30px] sm:top-[-50px] lg:left-[-30px] sm:left-[-50px]">
                        <img
                            src={Sparkle}
                            alt="sparkle image"
                            width={36}
                            height={36}
                        />
                    </div>
                    <div className="invisible lg:visible size-3 absolute bg-[#6D39E9] rounded-full top-8 right-24 md:right-32 lg:right-44"></div>
                </div>
                <div className="relative mt-10">
                    <div className="flex justify-center lg:justify-start">
                        <img
                            src={Img}
                            alt="image 1"
                            className="h-[200px] sm:h-[300px] md:h-[418px] z-10"
                        />
                        <img
                            src={Img2}
                            alt="image 2"
                            className="h-[200px] sm:h-[300px] md:h-[418px] ml-[-50px] sm:ml-[-60px] md:ml-[-50px] z-20"
                        />
                    </div>
                    <div className="absolute left-0 top-[-20px] md:left-[-30px]">
                        <img
                            src={StarFour}
                            alt="star image"
                            width={36}
                            height={36}
                        />
                    </div>
                    <div className="hidden xl:block size-3 absolute bg-[#FFC27A] rounded-full top-[-50px] sm:top-[-80px] right-28 md:right-32 lg:right-40 z-50"></div>
                    <div className="block absolute right-[-25px] sm:right-[-66px] md:right-[-60px] lg:right-[-55px] top-10 md:top-16 lg:top-24">
                        <img
                            src={VectorImg}
                            alt="vector image"
                            width={80}
                            height={80}
                        />
                    </div>
                    <div className="size-3 absolute bg-[#6D39E9] rounded-full bottom-[-30px] sm:bottom-[-50px] left-28 md:left-44 lg:left-52"></div>
                    <div className="flex justify-center">
                        <div
                            className="relative md:absolute md:right-[-60px] md:bottom-[47px]
                        z-[100] flex items-center gap-3 shadow-input
                        md:bg-white p-2 lg:p-4 md:p-5 rounded-md cursor-pointer"
                        >
                            <div className="p-[10px] bg-[#E9F8F3] rounded-lg">
                                <img
                                    src={Star}
                                    alt="star image"
                                    width={19}
                                    height={19}
                                />
                            </div>
                            <div>
                                <p>Trusted</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
