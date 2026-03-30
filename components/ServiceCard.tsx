"use client";

import { FiCheck } from "react-icons/fi";
import { ReactNode } from "react";

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    features: string[];
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
    return (
        <div className="flex flex-col h-full bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border-2 border-gray-50 hover:border-yellow-300 group transform hover:-translate-y-1">
            {/* Icon Section */}
            <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 text-olive">
                {icon}
            </div>
            
            {/* Header */}
            <h3 className="text-2xl font-bold text-olive mb-3 group-hover:text-yellow-600 transition-colors">
                {title}
            </h3>
            
            {/* Description - line-clamp-3 keeps grid uniform */}
            <p className="text-gray-600 mb-6 text-base leading-relaxed line-clamp-3 flex-1">
                {description}
            </p>
            
            {/* Features List */}
            <div className="pt-5 border-t border-gray-100">
                <ul className="space-y-3">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <div className="mt-1 bg-yellow-100 rounded-full p-0.5">
                                <FiCheck className="text-yellow-600 text-xs" />
                            </div>
                            <span className="text-sm font-semibold">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Optional subtle footer arrow */}
            <div className="mt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-yellow-600 font-bold text-sm flex items-center gap-1">
                    View Service Details →
                </span>
            </div>
        </div>
    );
}