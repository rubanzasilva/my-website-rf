// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: 'Silver Rubanza - Data Scientist & Machine Learning Engineer',
  description:
    'Portfolio website of Silver Rubanza - Data Scientist, Machine Learning Engineer, and Software Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
