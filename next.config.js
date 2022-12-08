/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    poweredByHeader: false,
    optimizeFonts: false,

    env: {
        APP_URL: process.env.REACT_APP_URL,
        APP_ENV: process.env.REACT_APP_ENV,
        APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
    },

    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `https://cinema-back.vercel.app/api/:path*`,
            },
            {
                source: '/uploads/:path*',
                destination: `https://cinema-back-rqi4.vercel.app/:path*`,
            },
        ]
    },
}

module.exports = nextConfig
