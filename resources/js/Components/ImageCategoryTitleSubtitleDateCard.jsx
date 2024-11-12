import { Link } from "@inertiajs/react";
import { HiArrowUpRight } from "react-icons/hi2";

export default function ImageCategoryTitleSubtitleDateCard({ img, category, title, subtitle, published_date, href = '#', titleLines = 1, subtitleLines = 2 }) {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }
    return (
        <div className={classNames([
            `bg-white max-w-full rounded-2xl shadow-custom-box-shadow hover:shadow-card select-none`,
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
                    <div>
                        <p className={`text-[#363A3D] font-medium sm:text-xl line-clamp-${titleLines}`}>
                            {title}
                        </p>
                    </div>
                    <div className="flex items-center gap-[11px]">
                        <div>
                            <p className={`text-[#52565C] line-clamp-${subtitleLines}`}>{subtitle}</p>
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
                    <Link href={href}>
                        <HiArrowUpRight />
                    </Link>
                </div>
            </div>
        </div>
    );
}
