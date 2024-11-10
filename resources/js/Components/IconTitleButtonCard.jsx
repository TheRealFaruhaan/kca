import { HiArrowUpRight } from 'react-icons/hi2';

export default function IconTitleButtonCard({ Icon, item }) {
    return (
        <div
            className="min-w-[264px] shadow-custom-box-shadow border border-transparent hover:border-primary-red py-4 px-6 flex items-center justify-between cursor-pointer rounded-lg"
        >
            <div className="flex items-center gap-4">
                {item?.icon}
                <p className="font-[500] text-[20px]">{item?.title}</p>
            </div>
            <div className="p-[10px] shadow-custom-box-shadow cursor-pointer hover:bg-primary-red hover:text-white text-primary-red rounded-lg transition duration-300 ease-in-out">
                <Icon />
            </div>
        </div>

    );
}
