"use client";

import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setSubmitted(true);
        setTimeout(() => {
            setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <main className="min-h-screen bg-white text-olive">
            {/* Hero Section */}
            <section className="w-full bg-gradient-to-br from-white to-olive/10 px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-olive mb-6">Get In Touch</h1>
                    <p className="text-lg sm:text-xl text-gray-700">
                        Have questions? We'd love to hear from you. Our team is ready to help.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-olive mb-8">Contact Information</h2>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="text-3xl shrink-0">📧</div>
                                    <div>
                                        <h3 className="font-bold text-olive mb-1">Email</h3>
                                        <p className="text-gray-700">contact@quickshelf.com</p>
                                        <p className="text-gray-700">support@quickshelf.com</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="text-3xl shrink-0">📞</div>
                                    <div>
                                        <h3 className="font-bold text-olive mb-1">Phone</h3>
                                        <p className="text-gray-700">+1 (800) QUICKSHELF</p>
                                        <p className="text-gray-700">+1 (855) 784-2527</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="text-3xl shrink-0">📍</div>
                                    <div>
                                        <h3 className="font-bold text-olive mb-1">Headquarters</h3>
                                        <p className="text-gray-700">123 Retail Avenue</p>
                                        <p className="text-gray-700">Commerce City, CA 90001</p>
                                        <p className="text-gray-700">United States</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="text-3xl shrink-0">🕐</div>
                                    <div>
                                        <h3 className="font-bold text-olive mb-1">Business Hours</h3>
                                        <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                        <p className="text-gray-700">Saturday - Sunday: 10:00 AM - 4:00 PM</p>
                                        <p className="text-gray-700">Support: 24/7 Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-8 border-t border-gray-200">
                            <h3 className="font-bold text-olive mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                <a href="#" className="text-2xl hover:text-yellow-500 transition">
                                    📱
                                </a>
                                <a href="#" className="text-2xl hover:text-yellow-500 transition">
                                    🐦
                                </a>
                                <a href="#" className="text-2xl hover:text-yellow-500 transition">
                                    💼
                                </a>
                                <a href="#" className="text-2xl hover:text-yellow-500 transition">
                                    📺
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-linear-to-br from-yellow-50 to-olive/5 rounded-lg shadow-lg p-6 sm:p-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-olive mb-6">Send us a Message</h2>

                            {submitted && (
                                <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg text-green-700">
                                    ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-olive mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-olive focus:border-transparent"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-olive mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-olive focus:border-transparent"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-olive mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-olive focus:border-transparent"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-olive mb-2">Company/Store Name</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-olive focus:border-transparent"
                                            placeholder="Your Store Name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-olive mb-2">Subject *</label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-olive focus:border-transparent"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="demo">Request a Demo</option>
                                        <option value="pricing">Pricing Information</option>
                                        <option value="support">Technical Support</option>
                                        <option value="partnership">Partnership Inquiry</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-olive mb-2">Message *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-olive focus:border-transparent resize-none"
                                        placeholder="Tell us how we can help you..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 rounded-lg font-semibold bg-linear-to-r from-yellow-300 to-yellow-500 text-olive shadow-lg hover:shadow-xl hover:from-yellow-400 hover:to-yellow-600 transition transform hover:scale-105"
                                >
                                    Send Message
                                </button>

                                <p className="text-xs sm:text-sm text-gray-600 text-center">
                                    We respect your privacy. We'll only use your information to respond to your inquiry.
                                </p>
                            </form>
                        </div>

                        {/* FAQ Box */}
                        <div className="mt-8 p-6 bg-olive/5 rounded-lg border border-olive/20">
                            <h3 className="font-bold text-olive mb-4">Quick Questions?</h3>
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li>
                                    <strong>Demo:</strong> Schedule a free demo to see Quickshelf in action
                                </li>
                                <li>
                                    <strong>Implementation:</strong> Average setup time is 48-72 hours
                                </li>
                                <li>
                                    <strong>Support:</strong> 24/7 technical support included with all plans
                                </li>
                                <li>
                                    <strong>Integration:</strong> API documentation available for developers
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
