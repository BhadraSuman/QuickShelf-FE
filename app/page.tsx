"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import {
    FiPackage, FiBarChart2, FiUsers, FiZap, FiPlus, FiTrendingUp,
    FiSettings, FiTag, FiCreditCard, FiSmartphone, FiGift,
    FiLock, FiPhone, FiGlobe, FiDollarSign, FiRefreshCw,
} from "react-icons/fi";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const CarouselDots = ({ api }: { api: any }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    useEffect(() => {
        if (!api) return;
        const onSelect = () => {
            setSelectedIndex(api.selectedScrollSnap());
        };
        const onInit = () => {
            setScrollSnaps(api.scrollSnapList());
        }
        onInit();
        onSelect();
        api.on('select', onSelect);
        api.on('reInit', onInit);
        api.on('reInit', onSelect);
        return () => {
            api.off('select', onSelect);
            api.off('reInit', onInit);
            api.off('reInit', onSelect);
        }
    }, [api]);

    if (scrollSnaps.length <= 1) return null;

    return (
        <div className="flex justify-center gap-2 mt-8 md:hidden">
            {scrollSnaps.map((_, index) => (
                <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                        index === selectedIndex ? 'bg-olive w-6' : 'bg-gray-300 w-2'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    );
};

export default function Home() {
    const [servicesRef, servicesApi] = useEmblaCarousel({
        align: 'start',
        breakpoints: {
            '(min-width: 768px)': { active: false }
        }
    }, [Autoplay({ delay: 2000, stopOnInteraction: false })]);

    const [productsRef, productsApi] = useEmblaCarousel({
        align: 'start',
        breakpoints: {
            '(min-width: 768px)': { active: false }
        }
    }, [Autoplay({ delay: 2000, stopOnInteraction: false })]);

    const [whyUsRef, whyUsApi] = useEmblaCarousel({
        align: 'start',
        breakpoints: {
            '(min-width: 768px)': { active: false }
        }
    }, [Autoplay({ delay: 2000, stopOnInteraction: false })]);

    const services = [
        {
            icon: <FiPackage />,
            title: "Store Management",
            description: "Centralized platform for managing store operations, sales, and customer data.",
            features: ["Real-time sales tracking", "Multi-store management", "Customer analytics", "Quick reconciliation"],
        },
        {
            icon: <FiBarChart2 />,
            title: "Inventory Management",
            description: "Automated inventory tracking, stock optimization, and supply chain integration.",
            features: ["Real-time stock levels", "Automated reordering", "Barcode scanning", "Wastage reduction"],
        },
        {
            icon: <FiUsers />,
            title: "Staff Management",
            description: "Streamlined workforce management, scheduling, and performance tracking.",
            features: ["Shift scheduling", "Performance tracking", "Payroll integration", "Training modules"],
        },
        {
            icon: <FiZap />,
            title: "Electronic Shelf Labels",
            description: "Dynamic pricing and product information display with wireless ESL technology.",
            features: ["Real-time price updates", "Energy efficient", "Multi-language support", "Promotion management"],
        },
        {
            icon: <FiPlus />,
            title: "API Integration",
            description: "Seamlessly connect Quickshelf with your existing retail systems and third-party platforms.",
            features: ["RESTful APIs", "Legacy system compatibility", "Real-time sync", "Custom integrations"],
        },
        {
            icon: <FiTrendingUp />,
            title: "Analytics & Insights",
            description: "Advanced reporting and business intelligence to drive decision-making.",
            features: ["Sales analytics", "Customer behavior insights", "Trend analysis", "Custom reports"],
        },
    ];

    const products = [
        {
            name: "Quickshelf Core",
            category: "Software",
            image: <FiSettings />,
            description: "Complete store management platform for inventory, sales, and customer management.",
            benefits: ["Cloud-based", "User-friendly interface", "Mobile app support", "24/7 support"],
        },
        {
            name: "Smart ESL System",
            category: "Hardware",
            image: <FiTag />,
            description: "Electronic shelf labels with dynamic pricing and promotional capabilities.",
            benefits: ["2.4GHz wireless", "5-year battery life", "High visibility display", "Temperature stable"],
        },
        {
            name: "POS Integration",
            category: "Software",
            image: <FiCreditCard />,
            description: "Unified point-of-sale system with flexible payment options and customer data capture.",
            benefits: ["Multi-payment support", "Offline mode", "Receipt customization", "Fast transactions"],
        },
        {
            name: "Mobile Staff App",
            category: "Software",
            image: <FiSmartphone />,
            description: "Mobile application for staff to manage tasks, check schedules, and access store info.",
            benefits: ["iOS & Android", "Offline functionality", "Real-time notifications", "Task management"],
        },
        {
            name: "Data Analytics Suite",
            category: "Software",
            image: <FiBarChart2 />,
            description: "Comprehensive analytics and business intelligence tools for retail insights.",
            benefits: ["Predictive analytics", "Custom dashboards", "Data export options", "Real-time reporting"],
        },
        {
            name: "Customer Loyalty Platform",
            category: "Software",
            image: <FiGift />,
            description: "Loyalty program management with targeted promotions and customer engagement.",
            benefits: ["Personalized offers", "Points system", "Customer segmentation", "Reward redemption"],
        },
    ];

    const whyUs = [
        { icon: <FiZap  />, title: "Fast Implementation", text: "Get up and running in days, not months. Our streamlined onboarding ensures minimal disruption." },
        { icon: <FiLock />, title: "Security & Compliance", text: "Enterprise-grade security with data encryption and regular audits to meet retail standards." },
        { icon: <FiPhone />, title: "24/7 Support", text: "A dedicated support team available round the clock to assist with any technical or operational questions." },
        { icon: <FiGlobe />, title: "Global Scalability", text: "Designed to scale from single stores to multi-location enterprises across various regions." },
        { icon: <FiDollarSign />, title: "Cost Effective", text: "ROI-focused solutions that reduce operational overhead while increasing your overall revenue." },
        { icon: <FiRefreshCw />, title: "Continuous Updates", text: "Regular feature updates driven by the latest retail trends and direct customer feedback." },
    ];

    return (
        <main className="min-h-screen bg-white">
            <Hero />

            {/* Services Section */}
            <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-24">
                        <div className="inline-block bg-olive/10 text-olive px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold mb-5 border border-olive/20 uppercase tracking-widest">
                            Core Solutions
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-olive mb-6 leading-tight">
                            Our Complete Solutions
                        </h2>
                        <div className="w-20 h-1.5 bg-yellow-400 mx-auto mb-8 rounded-full"></div>
                        <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                            Comprehensive software and hardware solutions designed for modern retail operations.
                        </p>
                    </div>
                    {/* py-6 and -my-6 prevent shadows and hover scales from getting clipped on mobile */}
                    <div className="overflow-hidden md:overflow-visible -mx-4 px-4 sm:-mx-6 sm:px-6 py-6 -my-6 md:mx-0 md:px-0 md:py-0 md:my-0" ref={servicesRef}>
                        <div className="flex select-none touch-pan-y md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
                            {services.map((service, idx) => (
                                <div key={idx} className="flex-[0_0_85%] min-w-0 md:flex-none">
                                    <ServiceCard {...service} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <CarouselDots api={servicesApi} />
                </div>
            </section>

            {/* Products Section */}
            <section className="w-full bg-gray-50 px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-24">
                        <div className="inline-block bg-yellow-100 text-olive px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold mb-5 border border-yellow-300 uppercase tracking-widest">
                            Product Lineup
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-olive mb-6 leading-tight">Products & Services</h2>
                        <div className="w-20 h-1.5 bg-olive mx-auto mb-8 rounded-full"></div>
                        <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                            Explore our complete product lineup tailored for retail excellence.
                        </p>
                    </div>
                    <div className="overflow-hidden md:overflow-visible -mx-4 px-4 sm:-mx-6 sm:px-6 py-6 -my-6 md:mx-0 md:px-0 md:py-0 md:my-0" ref={productsRef}>
                        <div className="flex select-none touch-pan-y md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
                            {products.map((product, idx) => (
                                <div key={idx} className="flex-[0_0_85%] min-w-0 md:flex-none">
                                    <ProductCard {...product} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <CarouselDots api={productsApi} />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-24">
                        <div className="inline-block bg-olive/10 text-olive px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold mb-5 border border-olive/20 uppercase tracking-widest">
                            Why Us
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-olive mb-6 leading-tight">Why Choose Quickshelf</h2>
                        <div className="w-20 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
                    </div>
                    <div className="overflow-hidden md:overflow-visible -mx-4 px-4 sm:-mx-6 sm:px-6 py-6 -my-6 md:mx-0 md:px-0 md:py-0 md:my-0" ref={whyUsRef}>
                        <div className="flex select-none touch-pan-y md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
                            {whyUs.map((benefit, idx) => (
                                <div key={idx} className="flex-[0_0_85%] min-w-0 md:flex-none">
                                    <div className="flex flex-col h-full bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="text-4xl sm:text-5xl text-olive group-hover:scale-110 transition-transform">
                                                {benefit.icon}
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-olive">{benefit.title}</h3>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            {benefit.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <CarouselDots api={whyUsApi} />
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full bg-olive text-white px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-screen blur-[120px] opacity-20"></div>
                <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">Transform Your Retail Business Today</h2>
                    <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                        Join hundreds of retailers already using Quickshelf to streamline operations and boost profitability.
                    </p>
                    <div className="pt-6">
                        <a
                            href="/contact"
                            className="inline-block px-12 py-5 rounded-2xl font-bold bg-yellow-400 text-olive hover:text-olive shadow-xl hover:shadow-2xl hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 text-lg"
                        >
                            Start Your Free Trial
                        </a>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="w-full bg-gray-50 px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-black text-olive">Stay Updated with Quickshelf</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Subscribe to our newsletter for the latest retail insights and exclusive offers.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="email-newsletter" className="sr-only">Email Address</label>
                        <input
                            id="email-newsletter"
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="w-full sm:w-80 px-6 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all"
                        />
                        <button
                            type="submit"
                            className="px-10 py-4 rounded-xl font-bold bg-olive text-white shadow-lg hover:bg-olive/90 transition-all active:scale-95"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}