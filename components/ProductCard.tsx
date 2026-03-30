"use client";

import { FiCheck, FiArrowRight } from "react-icons/fi";
import { ReactNode } from "react";

export default function ProductCard({
    name,
    category,
    image,
    description,
    benefits,
}: {
    name: string;
    category: string;
    image: ReactNode;
    description: string;
    benefits: string[];
}) {
    return (
        <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-yellow-300 group transform hover:-translate-y-2">
            {/* Image/Icon Header */}
            <div className="w-full h-32 sm:h-44 bg-gradient-to-br from-olive/5 via-yellow-50 to-yellow-100 flex items-center justify-center text-6xl group-hover:from-olive/10 group-hover:to-yellow-200 transition-all duration-500">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {image}
                </div>
            </div>

            {/* Content Body */}
            <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="mb-3">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white bg-olive px-3 py-1 rounded-full">
                        {category}
                    </span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-olive mb-2 group-hover:text-yellow-600 transition-colors">
                    {name}
                </h3>
                
                {/* line-clamp-3 ensures descriptions don't break the grid layout */}
                <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed line-clamp-3 flex-1">
                    {description}
                </p>
                
                <ul className="space-y-2 py-4 border-t border-gray-100">
                    {benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700 text-xs sm:text-sm">
                            <FiCheck className="text-yellow-500 mt-1 flex-shrink-0" />
                            <span className="font-medium">{benefit}</span>
                        </li>
                    ))}
                </ul>

                {/* Added Action Button */}
                <button className="mt-2 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-50 text-olive font-bold text-sm border border-gray-200 group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-all">
                    View Details
                    <FiArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>
            </div>
        </div>
    );
}