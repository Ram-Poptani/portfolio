import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://rampoptani.dev";
const title = "Ram Poptani | Software Developer";
const description =
  "Full Stack Java Developer with 2.5+ years of experience building scalable microservices and REST APIs using Java and Spring Boot.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Java Developer",
    "Spring Boot",
    "Full Stack",
    "React",
    "Portfolio",
    "Ram Poptani",
  ],
  authors: [{ name: "Ram Poptani" }],
  creator: "Ram Poptani",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title,
    description,
    siteName: title,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ram Poptani — Full Stack Java Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var mode = localStorage.getItem('theme');
                  if (mode === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
