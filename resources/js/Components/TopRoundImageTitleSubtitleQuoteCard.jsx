import QuoteIcon from '@/Assets/Images/quote_icon.svg';

export default function TopRoundImageTitleSubtitleQuoteCard({ img, title, subtitle, quote }) {
    return (
        <div className=" relative shadow-custom-box-shadow hover:shadow-card p-5 w-[90vw] md:w-[500px] lg:w-[600px] rounded-[30px] select-none">
            <div className="flex gap-[10px] items-center">
                <div className="h-16 w-16 rounded-full overflow-hidden ">
                    <img src={img} alt="image" height={64} width={64} />
                </div>
                <div>
                    <p className="md:text-2xl font-semibold">{title}</p>
                    <p className="text-xs md:text-base font-normal">{subtitle}</p>
                </div>
            </div>
            <div className="mt-[23px]">
                <p>{quote}</p>
            </div>
            <img
                src={QuoteIcon}
                alt="image"
                height={31}
                width={44}
                className="h-6 w-8 md:h-8 md:w-11 absolute top-3 right-8 "
            />
        </div>
    );
}
