import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // ✅ API 프록시 설정
      {
        source: "/api/v1/:path*",   // '/api/v1/'로 시작하는 요청을 외부 API로 전달
        destination: "https://api.kodegen.kr/api/v1/:path*",
      },
      // ✅ Storybook 프록시 설정
      {
        source: "/storybook/:path*", // '/storybook/'로 시작하는 요청을 Storybook으로 전달
        destination: "http://localhost:6006/:path*",
      },
    ];
  },
};

export default nextConfig;