"use client";

import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import {
    FiPackage,
    FiBarChart2,
    FiUsers,
    FiZap,
    FiPlus,
    FiTrendingUp,
    FiSettings,
    FiTag,
    FiCreditCard,
    FiSmartphone,
    FiGift,
    FiLock,
    FiPhone,
    FiGlobe,
    FiDollarSign,
    FiRefreshCw,
} from "react-icons/fi";

export default function Home() {
    const services = [
        {
            icon: <FiPackage className="text-4xl text-yellow-500" />,
            title: "Store Management",
            description: "Centralized platform for managing store operations, sales, and customer data.",
            features: ["Real-time sales tracking", "Multi-store management", "Customer analytics", "Quick reconciliation"],
        },
        {
            icon: <FiBarChart2 className="text-4xl text-yellow-500" />,
            title: "Inventory Management",
            description: "Automated inventory tracking, stock optimization, and supply chain integration.",
            features: ["Real-time stock levels", "Automated reordering", "Barcode scanning", "Wastage reduction"],
        },
        {
            icon: <FiUsers className="text-4xl text-yellow-500" />,
            title: "Staff Management",
            description: "Streamlined workforce management, scheduling, and performance tracking.",
            features: ["Shift scheduling", "Performance tracking", "Payroll integration", "Training modules"],
        },
        {
            icon: <FiZap className="text-4xl text-yellow-500" />,
            title: "Electronic Shelf Labels",
            description: "Dynamic pricing and product information display with wireless ESL technology.",
            features: ["Real-time price updates", "Energy efficient", "Multi-language support", "Promotion management"],
        },
        {
            icon: <FiPlus className="text-4xl text-yellow-500" />,
            title: "API Integration",
            description: "Seamlessly connect Quickshelf with your existing retail systems and third-party platforms.",
            features: ["RESTful APIs", "Legacy system compatibility", "Real-time sync", "Custom integrations"],
        },
        {
            icon: <FiTrendingUp className="text-4xl text-yellow-500" />,
            title: "Analytics & Insights",
            description: "Advanced reporting and business intelligence to drive decision-making.",
            features: ["Sales analytics", "Customer behavior insights", "Trend analysis", "Custom reports"],
        },
    ];

    const products = [
        {
            name: "Quickshelf Core",
            category: "Software",
            image: <FiSettings className="text-6xl text-olive" />,
            description: "Complete store management platform for inventory, sales, and customer management.",
            benefits: ["Cloud-based", "User-friendly interface", "Mobile app support", "24/7 support"],
        },
        {
            name: "Smart ESL System",
            category: "Hardware",
            image: <FiTag className="text-6xl text-olive" />,
            description: "Electronic shelf labels with dynamic pricing and promotional capabilities.",
            benefits: ["2.4GHz wireless", "5-year battery life", "High visibility display", "Temperature stable"],
        },
        {
            name: "POS Integration",
            category: "Software",
            image: <FiCreditCard className="text-6xl text-olive" />,
            description: "Unified point-of-sale system with flexible payment options and customer data capture.",
            benefits: ["Multi-payment support", "Offline mode", "Receipt customization", "Fast transactions"],
        },
        {
            name: "Mobile Staff App",
            category: "Software",
            image: <FiSmartphone className="text-6xl text-olive" />,
            description: "Mobile application for staff to manage tasks, check schedules, and access store info.",
            benefits: ["iOS & Android", "Offline functionality", "Real-time notifications", "Task management"],
        },
        {
            name: "Data Analytics Suite",
            category: "Software",
            image: <FiBarChart2 className="text-6xl text-olive" />,
            description: "Comprehensive analytics and business intelligence tools for retail insights.",
            benefits: ["Predictive analytics", "Custom dashboards", "Data export options", "Real-time reporting"],
        },
        {
            name: "Customer Loyalty Platform",
            category: "Software",
            image: <FiGift className="text-6xl text-olive" />,
            description: "Loyalty program management with targeted promotions and customer engagement.",
            benefits: ["Personalized offers", "Points system", "Customer segmentation", "Reward redemption"],
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            <Hero />

            {/* Services Section */}
            <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-24">
                        <div className="inline-block bg-olive/10 text-olive px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold mb-5 border border-olive/20">
                            CORE SOLUTIONS
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-olive mb-6 leading-tight">
                            Our Complete Solutions
                        </h2>
                        <div className="w-20 h-1.5 bg-olive mx-auto mb-8 rounded-full"></div>
                        <p className="text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                            Comprehensive software and hardware solutions designed for modern retail operations
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {services.map((service, idx) => (
                            <ServiceCard key={idx} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="w-full bg-gray-50 px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-24">
                        <div className="inline-block bg-yellow-100 text-olive px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold mb-5 border border-yellow-300">
                            PRODUCT LINEUP
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-olive mb-6 leading-tight">Products & Services</h2>
                        <div className="w-20 h-1.5 bg-olive mx-auto mb-8 rounded-full"></div>
                        <p className="text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                            Explore our complete product lineup tailored for retail excellence
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {products.map((product, idx) => (
                            <ProductCard key={idx} {...product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16 md:mb-24">
                        <div className="inline-block bg-olive/10 text-olive px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold mb-5 border border-olive/20">
                            WHY US
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-olive mb-6 leading-tight">Why Choose Quickshelf</h2>
                        <div className="w-20 h-1.5 bg-olive mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="bg-white rounded-2xl p-8 border-2 border-olive/20 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
                            <div className="text-5xl mb-4">
                                <FiZap className="inline text-5xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-olive mb-3">Fast Implementation</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Get up and running in days, not months. Our streamlined onboarding ensures minimal disruption to your
                                business.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 border-2 border-olive/20 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
                            <div className="text-5xl mb-4">
                                <FiLock className="inline text-5xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-olive mb-3">Security & Compliance</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Enterprise-grade security with data encryption, compliance with retail standards, and regular security
                                audits.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 border-2 border-olive/20 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
                            <div className="text-5xl mb-4">
                                <FiPhone className="inline text-5xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-olive mb-3">24/7 Support</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Dedicated support team available round the clock to assist with any issues or questions.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 border-2 border-olive/20 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
                            <div className="text-5xl mb-4">
                                <FiGlobe className="inline text-5xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-olive mb-3">Global Scalability</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Designed to scale from single stores to multi-location enterprises across regions and countries.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 border-2 border-olive/20 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
                            <div className="text-5xl mb-4">
                                <FiDollarSign className="inline text-5xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-olive mb-3">Cost Effective</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Flexible pricing models with ROI-focused solutions that reduce operational costs and increase revenue.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 border-2 border-olive/20 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
                            <div className="text-5xl mb-4">
                                <FiRefreshCw className="inline text-5xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-olive mb-3">Continuous Updates</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Regular feature updates and improvements based on latest retail trends and customer feedback.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full bg-olive text-white px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-screen blur-3xl opacity-20"></div>
                <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">Transform Your Retail Business Today</h2>
                    <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                        Join hundreds of retailers already using Quickshelf to streamline operations and boost profitability
                    </p>
                    <div className="pt-6">
                        <a
                            href="/contact"
                            className="inline-block px-12 py-4 rounded-2xl font-bold bg-yellow-400 text-olive shadow-xl hover:shadow-2xl hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 text-lg"
                        >
                            Start Your Free Trial
                        </a>
                    </div>
                </div>
            </section>

            {/*Newsletter Section*/}
            <section className="w-full bg-gray-50 px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-black text-olive">Stay Updated with Quickshelf</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Subscribe to our newsletter for the latest retail insights, product updates, and exclusive offers.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:w-auto px-6 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all duration-300"
                        />
                        <button
                            type="submit"
                            className="px-8 py-3 rounded-lg font-bold bg-yellow-400 text-olive shadow-xl hover:shadow-2xl hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 text-lg"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
