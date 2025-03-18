// app/layout.tsx
import '@/styles/index.css';
import Navbar from '@/components/navbar';

export const metadata = {
  title: "Team DNA(NextJs)", // 기본 타이틀
  description: "Welcome to Team DNA(Vanilla)",
  keywords: "Next.js, SEO, React, Web",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}