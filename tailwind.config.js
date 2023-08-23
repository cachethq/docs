const defaultTheme = require('tailwindcss/defaultTheme')
import tailwindConfig from '@hempworks/pilgrim/tailwind.config'

const primary = {
    '50': '#e6f7ed',
    '100': '#c1edce',
    '200': '#9be3b1',
    '300': '#74d994',
    '400': '#4dce76',
    '500': '#04c147', // Base Color
    '600': '#03ad40',
    '700': '#038f34',
    '800': '#027227',
    '900': '#01561a'
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [
        tailwindConfig,
    ],

    content: [
        ...tailwindConfig.content,
        './.vitepress/theme/**/*.{vue,js,ts,jsx,tsx}',
        './src/**/*.{md,svg}',
    ],

    theme: {
        extend: {
            colors: { primary },
        },
    },
}