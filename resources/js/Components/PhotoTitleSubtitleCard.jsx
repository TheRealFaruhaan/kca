export default function PhotoTitleSubtitleCard({ photo, title, subtitle }) {
    return (
        <div className="bg-white max-w-full sm:max-w-[280px] rounded-2xl shadow-input backdrop-blur-[100px] hover:shadow-card select-none">
            <div className="p-4">
                <div>
                    <img
                        src={photo}
                        alt="image"
                        className="rounded-lg w-full aspect-square object-cover"
                    />
                </div>
                <div className="text-center mt-4">
                    <p className="text-[#1B1D1F] text-xl">{title}</p>
                    <p className="text-primaryGray text-base mt-[6px]">{subtitle}</p>
                </div>
            </div>
        </div>
    );
}
