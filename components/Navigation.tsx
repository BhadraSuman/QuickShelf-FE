"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiZap } from "react-icons/fi";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const lastScrollY = useRef(0);
    const pathname = usePathname();

    // 1. Scroll-to-Hide Logic
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            const delta = currentY - lastScrollY.current;

            if (Math.abs(delta) < 10) return; // Increased threshold slightly

            if (currentY > lastScrollY.current && currentY > 100) {
                setShowNav(false); // Scrolling Down
            } else {
                setShowNav(true); // Scrolling Up
            }
            lastScrollY.current = currentY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 2. Body Scroll Lock (Better for Mobile UX)
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact", isButton: true },
    ];

    return (
        <>
            <nav
                className={`sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm border-b border-olive/10 transition-all duration-300 ${
                    showNav || isOpen ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="px-4 sm:px-6 lg:px-8 py-4">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 bg-olive rounded-xl flex items-center justify-center shadow-md group-hover:bg-yellow-500 transition-colors">
                                <FiZap className="text-white text-xl" />
                            </div>
                            <span className="text-2xl font-black text-olive tracking-tighter uppercase">
                                Quickshelf
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <ul className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={
                                            link.isButton
                                                ? "px-6 py-2.5 rounded-xl bg-yellow-400 text-olive font-bold hover:bg-yellow-500 hover:text-olive shadow-md transition-all"
                                                : `font-bold transition-colors hover:text-yellow ${
                                                      pathname === link.href ? "text-yellow-600" : "text-olive"
                                                  }`
                                        }
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-olive hover:bg-gray-100 rounded-lg transition-all"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <div
                className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${
                    isOpen ? "visible" : "invisible opacity-0"
                }`}
            >
                {/* Backdrop */}
                <div 
                    className="absolute inset-0 bg-olive/20 backdrop-blur-sm" 
                    onClick={() => setIsOpen(false)}
                />

                {/* Sidebar Panel */}
                <div
                    className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-500 ease-out p-6 ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <div className="flex justify-between items-center mb-10">
                        <span className="font-black text-olive text-xl tracking-tighter">MENU</span>
                        <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-50 rounded-lg">
                            <FiX size={24} className="text-olive" />
                        </button>
                    </div>

                    <ul className="space-y-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block p-4 rounded-xl font-bold text-lg transition-all ${
                                        pathname === link.href 
                                        ? "bg-yellow-50 text-yellow-600" 
                                        : "text-olive hover:bg-gray-50"
                                    } ${link.isButton ? "bg-yellow-400 !text-olive text-center mt-4" : ""}`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Branding in Sidebar */}
                    <div className="absolute bottom-10 left-6 right-6 text-center">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                            Built by Uddipta Tech Solutions
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}