/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        deviceSizes: [640,750,828,1080,1200,1920,2048,3840],
        domains: ['firebasestorage.googleapis.com'],
        unoptimized: true
    },

}

module.exports =  nextConfig
