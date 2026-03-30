"use client";

import { useEffect, useRef, useState } from "react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const lastScrollY = useRef(0);
    const touchStartY = useRef<number | null>(null);

    useEffect(() => {
        lastScrollY.current = typeof window !== "undefined" ? window.scrollY : 0;

        const handleScroll = () => {
            const currentY = window.scrollY;
            const delta = currentY - lastScrollY.current;

            // small threshold to avoid jitter
            if (Math.abs(delta) < 5) return;

            // If the mobile sidebar is open and the user scrolls up, close it first.
            // This prevents the sidebar from moving with the header animation.
            if (isOpen && delta < 0) {
                setIsOpen(false);
                setShowNav(true);
                lastScrollY.current = currentY;
                return;
            }

            if (currentY > lastScrollY.current && currentY > 50) {
                // scrolling down -> hide
                setShowNav(false);
            } else {
                // scrolling up -> show
                setShowNav(true);
            }

            lastScrollY.current = currentY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpen]);

    const visible = showNav || isOpen;

    return (
        <>
            <nav
                className={`sticky top-0 z-50 w-full bg-white shadow-lg border-b-2 border-olive/10 transform transition-transform duration-300 ${
                    visible ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="px-4 sm:px-6 lg:px-8 py-4 md:py-5">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        {/* Logo */}
                        <a href="/" className="flex items-center gap-3">
                            <div className="w-11 h-11 bg-gradient-to-br from-olive-dark via-yellow-200 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-black text-2xl">⚡</span>
                            </div>
                            <span className="text-2xl sm:text-3xl font-black text-olive-600 tracking-tight">Quickshelf</span>
                        </a>

                        {/* Desktop Menu */}
                        <ul className="hidden sm:flex gap-10 text-base sm:text-lg font-bold">
                            <li>
                                <a href="/" className="text-olive hover:text-yellow-500 transition-colors duration-300 relative group">
                                    Home
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 rounded-full group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-olive hover:text-yellow-500 transition-colors duration-300 relative group">
                                    About
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 rounded-full group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="px-6 py-2 rounded-lg  bg-olive text-white font-bold shadow-md hover:shadow-lg hover:bg-olive/80 hover:text-white transition-all"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>

                        {/* Mobile Menu Button */}
                        <div className="sm:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 text-olive hover:bg-yellow-100 rounded-lg transition-all duration-300"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar Menu - rendered outside nav so nav transforms don't affect it */}
            {isOpen && (
                <>
                    {/* Backdrop (closes on pointer down for immediate response) */}
                    <div
                        className="fixed inset-0 bg-black/40 z-40 sm:hidden"
                        onClick={() => setIsOpen(false)}
                        onPointerDown={() => setIsOpen(false)}
                    ></div>

                    {/* Sidebar */}
                    <div
                        className="fixed top-0 right-0 h-screen w-64 bg-white shadow-2xl z-50 sm:hidden animate-slide-in"
                        onWheel={(e) => {
                            // mouse wheel or trackpad: if scrolling up (negative deltaY), close immediately
                            if (e.deltaY < 0) {
                                setIsOpen(false);
                            }
                        }}
                        onTouchStart={(e) => {
                            touchStartY.current = e.touches?.[0]?.clientY ?? null;
                        }}
                        onTouchMove={(e) => {
                            const start = touchStartY.current;
                            const current = e.touches?.[0]?.clientY ?? null;
                            if (start != null && current != null) {
                                const delta = current - start;
                                // negative delta means finger moved up -> close
                                if (delta < -5) {
                                    setIsOpen(false);
                                }
                            }
                        }}
                        onTouchEnd={() => {
                            touchStartY.current = null;
                        }}
                    >
                        {/* Close Button */}
                        <div className="flex justify-end p-4 border-b-2 border-olive/10">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-olive hover:bg-yellow-100 rounded-lg transition-all"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Menu Items */}
                        <ul className="flex flex-col p-4 space-y-4">
                            <li>
                                <a
                                    href="/"
                                    className="block text-olive text-lg font-bold hover:text-yellow-500 transition-colors duration-300 py-3 px-4 hover:bg-yellow-50 rounded-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="block text-olive text-lg font-bold hover:text-yellow-500 transition-colors duration-300 py-3 px-4 hover:bg-yellow-50 rounded-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="block px-4 py-3 rounded-lg bg-yellow-400 text-olive font-bold text-center hover:bg-yellow-500 transition-all"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </>
    );
}
