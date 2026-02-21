import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Kinki Sultra Sinergi (KSS) - Jembatan Karier Indonesia-Jepang',
  description: 'KSS adalah Kantor Sanding Organisasi (SO) di Jepang yang membantu tenaga kerja Indonesia meraih karier yang aman, legal, dan berkelanjutan di Jepang.',
  keywords: 'tenaga kerja indonesia jepang, magang jepang, tokutei ginou, kerja di jepang, SO jepang',
  openGraph: {
    title: 'Kinki Sultra Sinergi (KSS) - Jembatan Karier Indonesia-Jepang',
    description: 'Mitra profesional tenaga kerja Indonesia di Jepang. Transparan, Legal, Terpercaya.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
