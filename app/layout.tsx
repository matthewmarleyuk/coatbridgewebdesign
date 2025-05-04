import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Script from 'next/script';
import { EMAILJS_PUBLIC_KEY } from '@/lib/emailjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Coatbridge Web Design - Web Design Agency',
  description: 'Crafting digital experiences that elevate your brand with modern web design solutions',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <meta name="google-site-verification" content="YOLFZo22nFdvB0CAhSQWuXDR_XosCI3Z22LEZ2tnMZA" />
        <Script id="local-business-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebDesign",
              "name": "Coatbridge Web Design",
              "alternateName": "Coatbridge Web Design Agency",
              "url": "http://coatbridgewebdesign.co.uk/",
              "logo": "http://coatbridgewebdesign.co.uk/logo.png",
              "image": "http://coatbridgewebdesign.co.uk/building.jpg",
              "description": "Coatbridge Web Design is a professional web design agency offering custom websites, e-commerce solutions, and digital marketing services to businesses across Scotland.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Atrium Business Centre, North Caldeen Rd",
                "addressLocality": "Coatbridge",
                "postalCode": "ML5 4EF",
                "addressCountry": "UK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "55.865514",
                "longitude": "-3.991383"
              },
              "telephone": "07478707581",
              "email": "info@coatbridgewebdesign.com",
              "priceRange": "££",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "17:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/coatbridgewebdesign",
                "https://twitter.com/coatbridgeweb",
                "https://www.instagram.com/coatbridgewebdesign",
                "https://www.linkedin.com/company/coatbridge-web-design"
              ],
              "foundingDate": "2010",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Matthew Marley"
                }
              ],
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "15"
              },
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "55.865514",
                  "longitude": "-3.991383"
                },
                "geoRadius": "100000"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates", 
                  "latitude": "55.865514",
                  "longitude": "-3.991383"
                },
                "geoRadius": "100000"
              },
              "makesOffer": [
                {
                  "@type": "Offer",
                  "name": "Web Design",
                  "description": "Custom website design services tailored to your brand and business goals."
                },
                {
                  "@type": "Offer",
                  "name": "Web Development",
                  "description": "Professional website development using the latest technologies and frameworks."
                },
                {
                  "@type": "Offer",
                  "name": "E-Commerce Solutions",
                  "description": "Custom online store development with secure payment processing and inventory management."
                },
                {
                  "@type": "Offer",
                  "name": "Landing Page Design",
                  "description": "High-converting landing pages for marketing campaigns and product launches."
                },
                {
                  "@type": "Offer",
                  "name": "Website Maintenance",
                  "description": "Ongoing website maintenance, updates, and technical support."
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Design Services",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "Web Design",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Business Website Design"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "E-Commerce Website Design"
                        }
                      }
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Web Development",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Custom Web Application Development"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Website Maintenance"
                        }
                      }
                    ]
                  }
                ]
              }
            }
          `}
        </Script>
        {/* Load EmailJS library first */}
        <Script id="emailjs-sdk" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" strategy="beforeInteractive" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
        {/* Initialize EmailJS after the library is loaded */}
        <Script id="emailjs-init" strategy="afterInteractive">
          {`
            (function() {
              emailjs.init("${EMAILJS_PUBLIC_KEY}");
            })();
          `}
        </Script>
      </body>
    </html>
  );
}