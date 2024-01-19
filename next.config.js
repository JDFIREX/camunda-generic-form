/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    reactStrictMode: true,
    experimental: {
        optimizePackageImports: [
            "@radix-ui/react-checkbox",
            "@radix-ui/react-icons",
            "@radix-ui/react-label",
            "@radix-ui/react-popover",
            "@radix-ui/react-radio-group",
            "@radix-ui/react-scroll-area",
            "@radix-ui/react-select",
            "@radix-ui/react-separator",
            "@radix-ui/react-slot",
            "@radix-ui/react-switch",
            "@radix-ui/react-toggle",
            "@radix-ui/react-toggle-group"
        ],
    },
    transpilePackages: [
        "@radix-ui/react-checkbox",
        "@radix-ui/react-icons",
        "@radix-ui/react-label",
        "@radix-ui/react-popover",
        "@radix-ui/react-radio-group",
        "@radix-ui/react-scroll-area",
        "@radix-ui/react-select",
        "@radix-ui/react-separator",
        "@radix-ui/react-slot",
        "@radix-ui/react-switch",
        "@radix-ui/react-toggle",
        "@radix-ui/react-toggle-group"
    ],
    redirects: async () => [
        {
            source: '/',
            destination: '/obsluga-i-kontakty',
            permanent: true,
        },
    ],
}

module.exports = nextConfig
