/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8090/api/:path*', // Proxy to Pocketbase server
      },
    ]
  },
}


// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: 'http://localhost:8090/api/:path*', // Proxy to Pocketbase server
//       },
//     ]
//   },
// }
