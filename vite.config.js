import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react({
            jsxImportSource: '@emotion/react',
            babel: {
                plugins: [
                    'babel-plugin-macros',
                    '@emotion/babel-plugin'
                ]
            }
        }),
        svgr({
            exportAsDefault: true,
            svgrOptions: {
                ref: true,
                titleProp: true,
            },
        }),
    ],
    optimizeDeps: {
        include: ['@emotion/styled', 'twin.macro']
    },
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
});
