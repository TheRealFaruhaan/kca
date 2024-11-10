import BottomVector from '@/Assets/Images/bottom_vector.svg';

export default function FullWidthTopTitleSection({ title, titleHighlight, subtitle, children, bgColor = 'bg-white', underlineWidth = 180, underlineLeftClasses = 'left-8 md:left-16' }) {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }
    return (
        <div className={classNames(bgColor)}>
            <div className="mx-4">
                <div className="relative max-w-[1320px] lg:mx-auto py-[50px] md:py-[100px] overflow-hidden">
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
                            <p className="text-primaryGray text-md my-4 text-center xl:text-left">
                                {subtitle}
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full mt-[50px] flex flex-col gap-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
