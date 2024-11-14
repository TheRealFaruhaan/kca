import { Link } from "@inertiajs/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ImageLoader = () => (
    <div className="absolute inset-0 bg-gray-200 animate-pulse">
        <div className="h-full w-full flex items-center justify-center">
            <svg className="animate-spin h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>
    </div>
);

export default function GalleryThumbnail({ gallery }) {
    return (
        <div className="relative flex aspect-square ">
            <div className="bg-gradient-to-br from-gray-200 via-slate-100 via-70% to-gray-200 absolute w-full h-full bottom-2 left-2 bg-white rounded-lg ">
            </div>
            <Link
                key={gallery.id}
                href={`/gallery/${gallery.slug}`}
                className="cursor-pointer group relative flex aspect-square items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <LazyLoadImage
                    src={gallery.thumbnail_image_url}
                    alt={gallery.title || 'Gallery Image'}
                    effect="opacity"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    wrapperClassName="absolute inset-0"
                    placeholder={<ImageLoader />}
                    threshold={100}
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    {gallery.title}
                </span>
            </Link>
        </div>
    );
}
