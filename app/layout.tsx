import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quickshelf.online"),
  title: {
    default: "QuickShelf | Smart Electronic Shelf Labels (ESL) & Inventory",
    template: "%s | QuickShelf",
  },
  description: "Transform your retail store with QuickShelf. Automated price updates, real-time inventory sync, and industry-leading ESL technology.",
  keywords: ["ESL", "Electronic Shelf Labels", "Retail Automation", "Inventory Management", "Smart Store"],
  authors: [{ name: "Suman Bhadra" }],
  creator: "Suman Bhadra",
  
  // OpenGraph (Facebook, LinkedIn, Discord)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quickshelf.online",
    siteName: "QuickShelf",
    title: "QuickShelf | The Future of Retail Digitization",
    description: "Manage your store prices in milliseconds with our smart ESL solutions.",
    images: [
      {
        url: "/og-main.png", // Put this in your public folder
        width: 1200,
        height: 630,
        alt: "QuickShelf Dashboard and ESL Hardware",
      },
    ],
  },

  // Twitter/X Card
  twitter: {
    card: "summary_large_image",
    title: "QuickShelf | Smart Retail Solutions",
    description: "Digitize your shelves and automate inventory with QuickShelf.",
    images: ["/og-main.png"], 
    creator: "@your_twitter_handle",
  },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col bg-white text-olive">
                {/* Navigation */}
                <Navigation />

                {/* Main Content */}
                <div className="flex-1 w-full">{children}</div>

                {/* Footer */}
                <footer className="w-full bg-gradient-to-r from-olive via-olive/95 to-olive text-white ">
                    <div className="px-4 sm:px-6 lg:px-8 py-16">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                                {/* Company Info */}
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black">Quickshelf</h3>
                                    <p className="text-white/80 text-sm leading-relaxed">
                                        Transforming retail through innovative technology solutions and customer-centric services.
                                    </p>
                                </div>

                                {/* Product Links */}
                                <div className="space-y-4">
                                    <h4 className="font-bold text-lg">Products</h4>
                                    <ul className="space-y-2.5 text-sm text-white/80">
                                        <li>
                                            <a href="#" className="hover:text-yellow-300 transition">
                                                Store Management
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-yellow-300 transition">
                                                Inventory System
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-yellow-300 transition">
                                                POS Solutions
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-yellow-300 transition">
                                                ESL Technology
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Company Links */}
                                <div className="space-y-4">
                                    <h4 className="font-bold text-lg">Company</h4>
                                    <ul className="space-y-2.5 text-sm text-white/80">
                                        <li>
                                            <a href="/about" className="hover:text-yellow-300 transition">
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-yellow-300 transition">
                                                Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-yellow-300 transition">
                                                Careers
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-yellow-300 transition">
                                                Partners
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Support Links */}
                                <div className="space-y-4">
                                    <h4 className="font-bold text-lg">Support</h4>
                                    <ul className="space-y-2.5 text-sm text-white/80">
                                        <li>
                                            <a href="/contact" className="hover:text-yellow-300 transition">
                                                Contact Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-yellow-300 transition">
                                                Help Center
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-yellow-300 transition">
                                                Documentation
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-yellow-300 transition">
                                                API Docs
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Bottom Footer */}
                            <div className="border-t-2 border-white/20 pt-10 mt-10">
                                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-white/70 font-semibold">
                                    <p>&copy; {new Date().getFullYear()} Quickshelf. All rights reserved.</p>
                                    <div className="flex gap-8">
                                        <a href="/privacy" className="hover:text-yellow-300 transition">
                                            Privacy Policy
                                        </a>
                                        <a href="/terms" className="hover:text-yellow-300 transition">
                                            Terms of Service
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
