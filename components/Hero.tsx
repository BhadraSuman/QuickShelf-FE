"use client";
import Image from "next/image";

import { FiStar, FiArrowRight } from "react-icons/fi";
import dashboard from "@/public/images/dashboard.png";

export default function Hero() {
    return (
        <section className="w-full min-h-screen bg-gradient-to-br from-white to-olive/5 flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            {/* Background Accents */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-yellow-100/50 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-olive/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Side: Content */}
                <div className="space-y-8 text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 bg-yellow-100 text-olive px-5 py-2 rounded-full text-sm font-bold border border-yellow-300">
                        <FiStar className="text-yellow-600" />
                        <span>The Future of Retail is Here</span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl sm:text-6xl font-black text-olive leading-tight tracking-tight">
                            Empower Your Store <br />
                            <span className="text-yellow-600 italic">Digitally.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Quickshelf integrates smart inventory management with Electronic Shelf Labels (ESL) to maximize your store's
                            profitability and customer experience.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a
                            href="/contact"
                            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg bg-yellow-400 text-olive shadow-lg hover:bg-yellow-500 hover:text-olive transition-all"
                        >
                            Start Free Trial
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/about"
                            className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-olive text-olive hover:bg-olive hover:text-white transition-all"
                        >
                            See How It Works
                        </a>
                    </div>

                    {/* Stats integrated closer to content */}
                    <div className="flex justify-center lg:justify-start gap-8 pt-8 border-t border-gray-200">
                        <div>
                            <div className="text-3xl font-black text-olive">500+</div>
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Retailers</div>
                        </div>
                        <div className="border-l border-gray-300 pl-8">
                            <div className="text-3xl font-black text-olive">5000+</div>
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Locations</div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Visual Centerpiece */}
                <div className="relative flex justify-center">
                    {/* Placeholder for Product Mockup or ESL Image */}
                    <div className="w-full max-w-lg aspect-square bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative flex items-center justify-center group">
                        {/* <div className="absolute inset-0 bg-olive/5 group-hover:bg-transparent transition-colors"></div>
                         <div className="text-center p-8">
                            <div className="text-olive/20 text-8xl mb-4">🛒</div>
                            <p className="text-gray-400 font-medium italic">[Insert high-quality mockup of your Software Dashboard or ESL Hardware here]</p>
                         </div> */}
                        <Image
                            src={dashboard}
                            alt="Software Dashboard Mockup"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            priority
                        />
                        {/* Floating Decorative Badge */}
                        <div className="absolute bottom-6 right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-bounce">
                            <p className="text-xs font-bold text-gray-500 uppercase">Real-time Updates</p>
                            <p className="text-xl font-black text-olive">100ms Latency</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
