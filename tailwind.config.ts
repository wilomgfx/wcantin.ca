import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    daisyui: {
        themes: ['dark', 'light'],
    },
    plugins: [daisyui],
}
export default config