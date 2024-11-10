import React, { useEffect, useRef, useState } from 'react';

export default function Slider({ children, width, isUpdateWidth = false }) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemWidth, setItemWidth] = useState(width);
    const carouselRef = useRef(null);
    const touchStartRef = useRef(null);
    const touchEndRef = useRef(null);
    const mouseStartRef = useRef(null);
    const totalItems = React.Children.count(children);
    const duplicatedChildren = [
        ...React.Children.toArray(children),
        ...React.Children.toArray(children),
    ];
    useEffect(() => {
        const updateItemWidth = () => {
            setItemWidth(width);
            if (isUpdateWidth) {
                if (window.innerWidth < 768) {
                    setItemWidth(300);
                } else if (window.innerWidth < 1024) {
                    setItemWidth(500);
                } else {
                    setItemWidth(600);
                }
            }
        };
        updateItemWidth();
        window.addEventListener('resize', updateItemWidth);
        return () => {
            window.removeEventListener('resize', updateItemWidth);
        };
    }, []);
    const handlePrevClick = () => {
        if (currentIndex === 0) {
            setCurrentIndex(totalItems - 1);
            setScrollPosition((totalItems - 1) * itemWidth);
        } else {
            setCurrentIndex((prevIndex) => prevIndex - 1);
            setScrollPosition((prevPosition) => prevPosition - itemWidth);
        }
    };
    const handleNextClick = () => {
        if (currentIndex === totalItems - 1) {
            setCurrentIndex(0);
            setScrollPosition(0);
        } else {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            setScrollPosition((prevPosition) => prevPosition + itemWidth);
        }
    };
    const handleDotClick = (index) => {
        setCurrentIndex(index);
        setScrollPosition(index * itemWidth);
    };
    const handleTouchStart = (e) => {
        touchStartRef.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e) => {
        touchEndRef.current = e.changedTouches[0].clientX;
        handleSwipe();
    };
    const handleSwipe = () => {
        if (touchStartRef.current !== null && touchEndRef.current !== null) {
            const diff = touchStartRef.current - touchEndRef.current;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    handleNextClick();
                } else {
                    handlePrevClick();
                }
            }
            touchStartRef.current = null;
            touchEndRef.current = null;
        }
    };
    const handleMouseDown = (e) => {
        mouseStartRef.current = e.clientX;
    };
    const handleMouseUp = (e) => {
        if (mouseStartRef.current !== null) {
            const diff = mouseStartRef.current - e.clientX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    handleNextClick();
                } else {
                    handlePrevClick();
                }
            }
            mouseStartRef.current = null;
        }
    };
    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: 'smooth',
            });
        }
    }, [scrollPosition]);
    return (
        <div>
            <div className="w-screen 2xl:max-w-[1320px] mx-auto overflow-hidden relative">
                <div
                    ref={carouselRef}
                    className="flex space-x-4 overflow-x-hidden overflow-y-hidden py-4"
                    style={{ scrollSnapType: 'x mandatory' }}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                >
                    {duplicatedChildren.map((child, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 "
                            style={{ width: `screen` }}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center mt-4 2xl:mr-28">
                {/* gap-0 md:gap-52  */}
                <div className="flex gap-2">
                    {Array.from({ length: totalItems }).map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-primary-red' : 'bg-gray-300'
                                }`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
                <div>
                    {/* <div className='hidden md:block'>
                        <button
                            onClick={handlePrevClick}
                            className="prev-arrow text-black p-[10px] rounded-lg z-20 hover:bg-#365CCE hover:text-white shadow-input bg-white ml-4 transition duration-300 ease-in-out"
                        >
                            <SlArrowLeft />
                        </button>
                        <button
                            onClick={handleNextClick}
                            className="next-arrow text-black p-[10px] rounded-lg z-20 hover:bg-#365CCE hover:text-white shadow-input bg-white ml-2 transition duration-300 ease-in-out"
                        >
                            <SlArrowRight />
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
