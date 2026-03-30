"use client";

import { FaHandshake } from "react-icons/fa";
import { FiTarget, FiStar, FiBook, FiZap, FiPackage, FiPlus, FiTag } from "react-icons/fi";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-olive">
            {/* Hero Section */}
            <section className="w-full bg-gradient-to-br from-white to-olive/10 px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-olive mb-6">About Quickshelf</h1>
                    <p className="text-lg sm:text-xl text-gray-700">
                        Transforming retail through innovative technology and customer-centric solutions
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                        <div className="space-y-4">
                            <h2 className="flex items-center gap-3 text-3xl sm:text-4xl font-bold text-olive mb-6">
                                <FiTarget className="text-2xl" /> Our Mission
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                To empower retail businesses of all sizes with cutting-edge technology solutions that streamline operations,
                                reduce costs, and enhance customer experiences. We believe that every retailer deserves access to
                                enterprise-level tools without breaking the bank.
                            </p>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                Quickshelf is committed to bridging the digital divide in retail, making it easy for traditional stores to
                                compete in today's fast-paced e-commerce driven market.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h2 className="flex items-center gap-3 text-3xl sm:text-4xl font-bold text-olive mb-6">
                                <FiStar className="text-2xl text-yellow-500" /> Our Vision
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                To become the leading retail technology platform globally, trusted by thousands of stores across industries.
                                We envision a future where physical retail is fully integrated with digital ecosystems, delivering seamless
                                customer experiences.
                            </p>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                Our vision is to create an ecosystem where technology empowers retailers to focus on what matters most:
                                serving customers and growing their business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company History & Values */}
            <section className="w-full bg-olive/5 px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-olive mb-12 text-center">Our Story & Core Values</h2>
                    <div className="space-y-8">
                        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-l-4 border-yellow-500">
                            <h3 className="flex items-center gap-3 text-2xl font-bold text-olive mb-3">
                                <FiBook className="text-2xl" /> Our Journey
                            </h3>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                Founded in 2018 by a group of retail technology veterans, Quickshelf was born from frustration. The founders
                                saw independent retailers struggling with outdated systems, poor integrations, and high costs. They decided
                                to build something better.
                            </p>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-3">
                                Today, Quickshelf serves retailers across retail, grocery, fashion, and specialty segments. We process
                                millions of transactions daily and manage inventory for thousands of locations worldwide.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                                <h3 className="flex items-center gap-3 text-xl font-bold text-olive mb-3">
                                    <FaHandshake className="text-xl" /> Integrity
                                </h3>
                                <p className="text-gray-700 text-base">
                                    We believe in honest communication, transparent pricing, and doing what's right for our customers, even
                                    when it's challenging.
                                </p>
                            </div>
                            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                                <h3 className="flex items-center gap-3 text-xl font-bold text-olive mb-3">
                                    <FiZap className="text-xl" /> Innovation
                                </h3>
                                <p className="text-gray-700 text-base">
                                    Continuous improvement is our DNA. We stay ahead of industry trends and constantly evolve our solutions.
                                </p>
                            </div>
                            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                                <h3 className="flex items-center gap-3 text-xl font-bold text-olive mb-3">
                                    <FiTarget className="text-xl" /> Customer Focus
                                </h3>
                                <p className="text-gray-700 text-base">
                                    Every feature, update, and decision is driven by customer feedback and real-world retail challenges.
                                </p>
                            </div>
                            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                                <h3 className="flex items-center gap-3 text-xl font-bold text-olive mb-3">
                                    <FiZap className="text-xl text-yellow-500" /> Excellence
                                </h3>
                                <p className="text-gray-700 text-base">
                                    We strive for excellence in product quality, customer service, and technical support, setting high
                                    standards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Offerings */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-olive mb-12 text-center">What We Offer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="text-6xl">
                                <FiPackage className="inline text-6xl text-olive" />
                            </div>
                            <h3 className="text-2xl font-bold text-olive">Integrated Solutions</h3>
                            <p className="text-gray-700">
                                Comprehensive suite of store management, inventory, staff, and customer engagement tools.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="text-6xl">
                                <FiPlus className="inline text-6xl text-olive" />
                            </div>
                            <h3 className="text-2xl font-bold text-olive">API Ecosystem</h3>
                            <p className="text-gray-700">
                                Seamless integrations with existing POS systems, e-commerce platforms, and third-party services.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="text-6xl">
                                <FiTag className="inline text-6xl text-olive" />
                            </div>
                            <h3 className="text-2xl font-bold text-olive">ESL Technology</h3>
                            <p className="text-gray-700">
                                Electronic shelf labels for dynamic pricing, promotions, and real-time information updates.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="w-full bg-gradient-to-r from-olive to-olive/80 text-white px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">Our Impact</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div className="space-y-3">
                            <div className="text-4xl sm:text-5xl font-bold">500+</div>
                            <p className="text-lg text-white/90">Retail Partners</p>
                        </div>
                        <div className="space-y-3">
                            <div className="text-4xl sm:text-5xl font-bold">5000+</div>
                            <p className="text-lg text-white/90">Store Locations</p>
                        </div>
                        <div className="space-y-3">
                            <div className="text-4xl sm:text-5xl font-bold">100M+</div>
                            <p className="text-lg text-white/90">Daily Transactions</p>
                        </div>
                        <div className="space-y-3">
                            <div className="text-4xl sm:text-5xl font-bold">50+</div>
                            <p className="text-lg text-white/90">Countries</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team & Support */}
            <section className="w-full bg-olive/5 px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-olive">Behind Every Solution Is a Dedicated Team</h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Our team consists of retail experts, software engineers, customer success specialists, and industry veterans. We're
                        passionate about solving real-world retail challenges and committed to the success of every customer.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-5xl mb-3">👨‍💻</div>
                            <h3 className="text-xl font-bold text-olive mb-2">100+ Engineers</h3>
                            <p className="text-gray-700">Building robust, scalable solutions</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-5xl mb-3">🎯</div>
                            <h3 className="text-xl font-bold text-olive mb-2">Retail Specialists</h3>
                            <p className="text-gray-700">Deep domain expertise driving innovation</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-5xl mb-3">🤝</div>
                            <h3 className="text-xl font-bold text-olive mb-2">24/7 Support</h3>
                            <p className="text-gray-700">Always ready to help you succeed</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-olive">Ready to Transform Your Retail Business?</h2>
                    <p className="text-gray-700 text-base sm:text-lg">
                        Get in touch with us to learn how Quickshelf can help your business thrive
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-yellow-300 to-yellow-500 text-olive shadow-lg hover:from-yellow-400 hover:to-yellow-600 hover:text-white transition"
                    >
                        Contact Us Today
                    </a>
                </div>
            </section>
        </main>
    );
}
