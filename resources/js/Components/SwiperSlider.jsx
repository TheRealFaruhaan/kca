import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function SwiperSlider({ children, spaceBetween = 30, slidesPerView = 3, freeMode = false, overflowVisible = false, pagination = { clickable: true }, width = 'w-full' }) {
    const [currentSlidesPerView, setCurrentSlidesPerView] = useState(slidesPerView);

    useEffect(() => {
        // Initial check
        handleResize();

        // Add resize listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleResize = () => {
        const width = window.innerWidth;
        if (width < 640) { // mobile breakpoint
            setCurrentSlidesPerView(1);
        } else if (width < 1024) { // tablet breakpoint
            setCurrentSlidesPerView(2);
        } else {
            setCurrentSlidesPerView(slidesPerView);
        }
    };

    return (
        <Swiper
            slidesPerView={currentSlidesPerView}
            spaceBetween={spaceBetween}
            freeMode={freeMode}
            pagination={pagination}
            modules={[FreeMode, Pagination]}
            className={`${width} ${overflowVisible ? '!overflow-visible' : ''}`}
            breakpoints={{
                // when window width is >= 640px (sm)
                640: {
                    slidesPerView: 2,
                },
                // when window width is >= 1024px (lg)
                1024: {
                    slidesPerView: slidesPerView,
                },
            }}
        >
            {children}
        </Swiper>
    );
};
