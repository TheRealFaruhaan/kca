import { HiArrowUpRight } from "react-icons/hi2";

export default function ImageCategoryTitleSubtitleDateCard({ img, category, title, subtitle, published_date }) {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }
    return (
        <div className={classNames([
            `bg-white max-w-full rounded-2xl shadow-custom-box-shadow  hover:shadow-card select-none`,
            // 'sm:max-w-280px',
        ])}>
            <div className="p-4">
                <div className="relative">
                    <img
                        src={img}
                        alt="image"
                        className="rounded-lg w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute z-10 top-0 left-0 bg-tag-bg py-[6px] px-[13px] rounded-md m-[6px]">
                        <p>{category}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[18px] mt-4">
                    <p className="text-[#363A3D] font-medium sm:text-xl overflow-hidden">
                        {title.slice(0, 23)}...
                    </p>{' '}
                    <div className="flex items-center gap-[11px]">
                        <div>
                            <p className="text-[#52565C] line-clamp-2">{subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between items-center border-t border-b-gray-300 p-4">
                <div>
                    <div className="flex flex-col">
                        <p className="text-xs text-gray-500">{published_date}</p>
                    </div>
                </div>
                <div className="p-[10px] shadow-custom-box-shadow cursor-pointer hover:bg-primary-red hover:text-white rounded-lg transition duration-300 ease-in-out">
                    <HiArrowUpRight />
                </div>
            </div>
        </div>
    );
}
