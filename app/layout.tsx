import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Baker Tech - Innovative Web Solutions",
    template: "%s | Baker Tech"
  },
  description: "Professional web development services, e-commerce solutions, and digital experiences. Building the future of the web with modern technologies.",
  keywords: ["web development", "e-commerce", "React", "Next.js", "digital solutions"],
  authors: [{ name: "Baker Tech" }],
  creator: "Baker Tech",
  publisher: "Baker Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bakertech.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bakertech.com',
    title: 'Baker Tech - Innovative Web Solutions',
    description: 'Professional web development services and digital experiences.',
    siteName: 'Baker Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baker Tech - Innovative Web Solutions',
    description: 'Professional web development services and digital experiences.',
    creator: '@bakertech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storageKey = 'baker-tech-theme';
                  const savedTheme = localStorage.getItem(storageKey);
                  const root = document.documentElement;
                  
                  // Remove any existing theme classes
                  root.classList.remove('light', 'dark');
                  
                  // Apply saved theme or default to light
                  if (savedTheme === 'dark') {
                    root.classList.add('dark');
                  } else {
                    root.classList.add('light');
                    // Set light as default if nothing is saved
                    if (!savedTheme) {
                      localStorage.setItem(storageKey, 'light');
                    }
                  }
                } catch (e) {
                  // Fallback to light mode if localStorage fails
                  document.documentElement.classList.add('light');
                }
              })();
            `,
          }}
        />
      </head>
            <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
      >
        <ThemeProvider defaultTheme="light" storageKey="baker-tech-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
