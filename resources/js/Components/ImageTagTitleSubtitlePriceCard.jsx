import { HiArrowUpRight } from "react-icons/hi2";

export default function ImageTagTitleSubtitlePriceCard({ img, tag, title, subtitle, price }) {
    return (
        <div className="bg-white max-w-[250px] sm:max-w-[280px] rounded-2xl shadow-custom-box-shadow  hover:shadow-card select-none">
            <div className="p-4">
                <div className="relative">
                    <img
                        src={img}
                        alt="image"
                        width={280}
                        height={207}
                        className="rounded-lg"
                    />
                    <div className="absolute z-10 top-0 left-0 bg-tag-bg py-[6px] px-[13px] rounded-md m-[6px]">
                        <p>{tag}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[18px] mt-4">
                    <p className="text-[#363A3D] font-medium sm:text-xl overflow-hidden">
                        {title.slice(0, 23)}...
                    </p>{' '}
                    <div className="flex items-center gap-[11px]">
                        <div>
                            <p className="text-[#52565C]  ">{subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between items-center border-t border-b-gray-300 p-4">
                <div>
                    <p className="sm:text-2xl font-semibold">${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>
                <div className="p-[10px] shadow-custom-box-shadow cursor-pointer hover:bg-primary-red hover:text-white rounded-lg transition duration-300 ease-in-out">
                    <HiArrowUpRight />
                </div>
            </div>
        </div>
    );
}
