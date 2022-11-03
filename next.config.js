/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    poweredByHeader: false,
    optimizeFonts: false,

    env: {
        APP_URL: process.env.REACT_APP_URL,
        APP_ENV: process.env.REACT_APP_ENV,
        API_URL: process.env.REACT_API_URL,
    },

    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `http://localhost:4200/api/:path*`,
            },
            {
                source: '/uploads/:path*',
                destination: `http://localhost:4200/uploads/:path*`,
            },
        ]
    },
}

module.exports = nextConfig
