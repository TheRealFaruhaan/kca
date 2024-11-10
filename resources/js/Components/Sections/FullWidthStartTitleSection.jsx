import BottomVector from '@/Assets/Images/bottom_vector.svg';

export default function FullWidthStartTitleSection({ titleLn1, titleLn2, titleLn3, children, bgColor = 'bg-white', underlineWidth = 120, underlineLeftClasses = 'left-[90px] lg:left-0' }) {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }
    return (
        <div className={bgColor}>
            <div className="py-[50px] md:py-[100px]  mx-4 ">
                <div className="overflow-hidden max-w-[1320px] lg:mx-auto">
                    <div className="relative flex flex-col lg:flex-row items-center gap-10">
                        <div className="text-2xl md:text-3xl lg:text-[40px] font-semibold flex lg:flex-col gap-2 relative">
                            <p>{titleLn1}</p>
                            <p className="text-primary-red">{titleLn2}</p>
                            <p className="text-primary-red">{titleLn3}</p>
                            <img
                                src={BottomVector}
                                alt="image bottom vector"
                                width={underlineWidth}
                                height={50}
                                className={classNames('absolute top-[30px] lg:top-[77px]', underlineLeftClasses)}
                            />
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
