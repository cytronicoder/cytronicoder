/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
      {
        protocol: "https",
        hostname: "slack.cytronicoder.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/lastresort",
        destination:
          "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2LvKIUK1KhA6zDzI0FhMjmG-668ctN3TsISLeHiKKf_Zv20-M9sCdnrqcjZ6upBIUkbzDlx7JN",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
