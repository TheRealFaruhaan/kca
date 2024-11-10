import BottomVector from '@/Assets/Images/bottom_vector.svg';
import Sparkle from '@/Assets/Images/sparkle.svg';
import StarFour from '@/Assets/Images/StarFour.svg';

export default function FullWidthTopTitleEndImage({ title, titleHighlight, children, img, bgColor = 'bg-white', underlineWidth = 180, underlineLeftClasses = 'left-10 md:left-28' }) {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }
    return (
        <div className={classNames(bgColor)}>
            <div className='max-w-[1320px] mx-4 xl:mx-auto py-[50px] md:py-[100px]'>
                <div className="flex xl:block flex-col justify-center items-center">
                    <div className="text-2xl md:text-3xl lg:text-[40px] font-semibold flex gap-2 relative">
                        <p>{title}</p>
                        <p className="text-primary-red">{titleHighlight}</p>
                        <img
                            src={BottomVector}
                            alt="image bottom vector"
                            width={underlineWidth}
                            height={50}
                            className={classNames('absolute top-[24px] md:top-[35px]', underlineLeftClasses)}
                        />
                    </div>
                    <div>
                        <p className="text-primaryGray text-md mt-4 text-center md:text-left">
                            Various versions have evolved over the years, sometimes by accident,
                        </p>
                    </div>
                </div>
                <div className="flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-[241px] ">
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 md:gap-10 lg:gap-[100px] xl:gap-[244px]">
                        {children}
                    </div>
                    <div className="relative">
                        <img
                            src={img}
                            alt="image"
                            height={222}
                            width={332}
                            className="sm:h-[250px] md:h-auto w-[250px] md:w-[332px]"
                        />
                        <img
                            src={Sparkle}
                            alt="image"
                            height={60}
                            width={60}
                            className="absolute bottom-10 left-[-35px]"
                        />
                        <img
                            src={StarFour}
                            alt="image"
                            height={24}
                            width={24}
                            className="absolute top-9 right-[-10px] "
                        />
                        <div className="w-2 h-2 bg-primary-green rounded-full absolute left-20 bottom-[-19px]"></div>
                        <div className="w-3 h-3 bg-achievement-green rounded-full absolute top-5 right-24"></div>
                        <div className="w-[18px] h-[18px] bg-achievement-red rounded-full absolute top-28 right-10"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
