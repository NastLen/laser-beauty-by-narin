/** @type {import('next').NextConfig} */
const nextConfig = {
  // Former template pages that were removed; keep old links and search results working.
  async redirects() {
    return [
      { source: "/services", destination: "/pricing", permanent: true },
      { source: "/benefits", destination: "/", permanent: true },
    ]
  },
}

module.exports = nextConfig
