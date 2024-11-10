export default function FullWidthStartImage({ bgColor = "bg-white", img, children }) {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }
    return (
        <div className={classNames(bgColor)}>
            <div className="max-w-[1320px] mx-4 xl:mx-auto py-[50px] md:py-[100px] ">
                <div className="flex flex-col items-center justify-center md:justify-start md:flex-row gap-5 md:gap-10 lg:gap-20">
                    <div className="relative">
                        <img
                            src={img}
                            width={610}
                            height={404}
                            alt="image"
                        />
                    </div>
                    <div className="flex flex-col gap-5 md:gap-10">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
