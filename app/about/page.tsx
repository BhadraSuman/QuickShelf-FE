"use client";

import { FaHandshake, FaAward } from "react-icons/fa";
import { FiTarget, FiStar, FiBook, FiZap, FiPackage, FiPlus, FiTag, FiFileText } from "react-icons/fi";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-olive">
            {/* Hero Section */}
            <section className="w-full bg-gradient-to-br from-white to-olive/10 px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-olive mb-6">About Quickshelf</h1>
                    <p className="text-lg sm:text-xl text-gray-700">
                        The retail-tech brand of <strong>Uddipta Tech Solutions</strong>, dedicated to digitizing the modern storefront.
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
                                To empower retail businesses with affordable, cutting-edge ESL (Electronic Shelf Label) technology and software 
                                support that streamlines inventory and pricing. We believe local retailers should have access to the same 
                                high-tech tools as global giants.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h2 className="flex items-center gap-3 text-3xl sm:text-4xl font-bold text-olive mb-6">
                                <FiStar className="text-2xl text-yellow-500" /> Our Vision
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                To be the backbone of retail digital transformation in India, starting from our roots in Jharkhand and 
                                expanding globally through innovative hardware-software integration.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Heritage */}
            <section className="w-full bg-olive/5 px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-l-4 border-yellow-500 mb-12">
                        <h3 className="flex items-center gap-3 text-2xl font-bold text-olive mb-3">
                            <FiBook className="text-2xl" /> The Brand & The Company
                        </h3>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            <strong>Quickshelf</strong> is the specialized retail brand operated by <strong>Uddipta Tech Solutions</strong>. 
                            While Quickshelf focuses on the customer experience and retail interfaces, Uddipta Tech Solutions handles the 
                            underlying software engineering, electronic component manufacturing, and technical consultancy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                            <h3 className="flex items-center gap-3 text-xl font-bold text-olive mb-3">
                                <FiZap className="text-xl" /> Manufacturing
                            </h3>
                            <p className="text-gray-700 text-base">
                                We don't just provide software; we manufacture bare printed circuit boards and interface cards to power 
                                our ESL ecosystems.
                            </p>
                        </div>
                        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                            <h3 className="flex items-center gap-3 text-xl font-bold text-olive mb-3">
                                <FaHandshake className="text-xl" /> Reliability
                            </h3>
                            <p className="text-gray-700 text-base">
                                As a registered Micro-Enterprise, we adhere to strict standards of professional service and government-backed 
                                accountability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* MSME / Udyam Certification Section */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 bg-white">
                <div className="max-w-4xl mx-auto border border-gray-200 rounded-2xl p-8 text-center bg-gray-50">
                    <div className="flex justify-center mb-4">
                        <div className="p-4 bg-yellow-100 rounded-full text-yellow-600">
                            <FaAward size={40} />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-olive mb-2">Registered Micro Enterprise</h2>
                    <p className="text-gray-600 mb-6 italic">Ministry of Micro, Small & Medium Enterprises, Govt. of India</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-semibold">Legal Entity</p>
                            <p className="text-olive font-bold">UDDIPTA TECH SOLUTIONS</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-semibold">Udyam Reg. No.</p>
                            <p className="text-olive font-bold font-mono">UDYAM-JH-12-0011570</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-semibold">Location</p>
                            <p className="text-olive font-bold text-sm">Jamtara, Jharkhand, India</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-semibold">Activity</p>
                            <p className="text-olive font-bold text-sm">Manufacturing & Services</p>
                        </div>
                    </div>
                    
                    <div className="mt-8">
                        <button 
                            onClick={() => window.open('https://udyamregistration.gov.in', '_blank')}
                            className="inline-flex items-center gap-2 px-6 py-2 bg-olive text-white rounded-lg hover:bg-olive/90 transition text-sm"
                        >
                            <FiFileText /> Verify MSME Status
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-olive">Ready to Transform Your Retail Business?</h2>
                    <p className="text-gray-700 text-base sm:text-lg">
                        Reach out to <strong>Uddipta Tech Solutions</strong> for custom software or Quickshelf ESL products.
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