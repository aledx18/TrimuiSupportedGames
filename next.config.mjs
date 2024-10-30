/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: true
  },
  images: {
    domains: [
      'tailwindui.com',
      'media.rawg.io',
      'api.lorem.space',
      'res.cloudinary.com'
    ]
  }
}

export default nextConfig
