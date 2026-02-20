import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://ram-poptani.vercel.app";
const title = "Ram Poptani — Full Stack Java Developer | Portfolio";
const description =
  "Ram Poptani is a Full Stack Java Developer with 2.5+ years of experience at Ernst & Young (EY), building scalable microservices, REST APIs, and event-driven systems using Java, Spring Boot, Apache Kafka, React.js, and Azure. Based in Mumbai, India.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Ram Poptani",
  },
  description,
  keywords: [
    "Ram Poptani",
    "Ram Poptani developer",
    "Ram Poptani portfolio",
    "Ram Poptani software engineer",
    "Full Stack Java Developer",
    "Java Developer Mumbai",
    "Spring Boot Developer",
    "Backend Engineer India",
    "React Developer",
    "Ernst Young Developer",
    "EY Developer",
    "Software Developer Portfolio",
    "Microservices Developer",
    "REST API Developer",
    "Apache Kafka",
    "Node.js Developer",
  ],
  authors: [{ name: "Ram Poptani", url: siteUrl }],
  creator: "Ram Poptani",
  publisher: "Ram Poptani",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "Ram Poptani — Full Stack Java Developer",
    description,
    siteName: "Ram Poptani | Portfolio",
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Ram Poptani — Full Stack Java Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ram Poptani — Full Stack Java Developer",
    description,
    images: [`${siteUrl}/opengraph-image`],
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
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
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
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": `${siteUrl}/#person`,
                  name: "Ram Poptani",
                  url: siteUrl,
                  jobTitle: "Full Stack Java Developer",
                  description:
                    "Full Stack Java Developer with 2.5+ years of experience building scalable microservices and REST APIs using Java and Spring Boot at Ernst & Young (EY).",
                  email: "ram.poptani.work@gmail.com",
                  telephone: "+919518317113",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Mumbai",
                    addressCountry: "IN",
                  },
                  alumniOf: [
                    {
                      "@type": "CollegeOrUniversity",
                      name: "Vivekanand Education Society's Institute of Technology",
                    },
                  ],
                  worksFor: {
                    "@type": "Organization",
                    name: "Ernst & Young LLP",
                    url: "https://www.ey.com",
                  },
                  knowsAbout: [
                    "Java",
                    "Spring Boot",
                    "Microservices",
                    "REST APIs",
                    "Apache Kafka",
                    "React.js",
                    "Node.js",
                    "TypeScript",
                    "Docker",
                    "Azure",
                    "PostgreSQL",
                    "Redis",
                  ],
                  sameAs: [
                    "https://www.linkedin.com/in/ram-poptani-302/",
                    "https://github.com/Ram-Poptani",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  url: siteUrl,
                  name: "Ram Poptani — Portfolio",
                  description:
                    "Portfolio of Ram Poptani, a Full Stack Java Developer at Ernst & Young (EY), Mumbai.",
                  publisher: { "@id": `${siteUrl}/#person` },
                },
                {
                  "@type": "WebPage",
                  "@id": `${siteUrl}/#webpage`,
                  url: siteUrl,
                  name: "Ram Poptani — Full Stack Java Developer | Portfolio",
                  description:
                    "Ram Poptani is a Full Stack Java Developer with 2.5+ years of experience building scalable microservices and REST APIs.",
                  isPartOf: { "@id": `${siteUrl}/#website` },
                  about: { "@id": `${siteUrl}/#person` },
                },
              ],
            }),
          }}
        />
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
