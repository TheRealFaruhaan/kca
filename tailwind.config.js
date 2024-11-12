import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                kca: ['LEMON MILK Pro FTR', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                cardBlur: 'rgba(255, 255, 255, 0.8)',
                primaryGreen: '#1a906b',
                primaryColor: '#20B486',
                primaryGray: '#6D737A',
                starColor: '#FFC27A',
                'primary-green': '#20b486',
                'primary-green-hover': '#76ceb2',
                'primary-red': '#9b1c22',
                'red-hover': '#c6242b',
                'primary-gray': '#52565C',
                'primary-orange': '#ffa337',
                'star-color': '#FFB60A',
                'achievement-green': '#1A906B',
                'achievement-red': '#ED4459',
                'achievement-orange': '#FFC27A',
                'achievement-purple': '#6D39E9',
                'footer-bg': '#E7E9EB80',
                'primary-bg': '#cbe5f8',
                'tag-bg': '#cec3b9',
              },
              boxShadow: {
                componentcard: '0px 10px 20px rgba(0, 0, 0, 0.1)',
                subcard: '0px 0px 15px rgba(0, 0, 0, 0.1)',
                pupularCard: '0px 0px 20px rgba(0, 0, 0, 0.2)',
                custom: '0px 0px 13px 0px #c5c5c5',
                'header-shadow': '0px 4px 10px rgba(0, 0, 0, 0.25)',
                input: '-4px -4px 44px 0px #00000014',
                'custom-box-shadow': '0px 3px 12px 0px #4B4B4B14',
                feedback: '1px solid #0000001A',
                card: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
            },
            keyframes: {
                'tilt-in': {
                    '0%': {
                        transform: 'rotateX(-20deg) rotateY(10deg) translateY(40px)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'rotateX(0deg) rotateY(0deg) translateY(0)',
                        opacity: '1'
                    },
                }
            },
            animation: {
                'tilt-in': 'tilt-in 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards'
            }
        },
    },

    plugins: [forms],
};
