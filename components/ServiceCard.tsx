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
        <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-5 border-2 border-transparent hover:border-yellow-300 group">
            <div className="text-5xl mb-3 transform group-hover:scale-105 transition-transform duration-300">{icon}</div>
            <h3 className="text-2xl font-bold text-olive mb-2 group-hover:text-yellow-600 transition-colors">{title}</h3>
            <p className="text-gray-700 mb-3 text-base leading-relaxed">{description}</p>
            <ul className="space-y-2">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <FiCheck className="text-yellow-500" />
                        <span className="text-sm font-medium">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
