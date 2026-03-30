export default function ProductCard({
    name,
    category,
    image,
    description,
    benefits,
}: {
    name: string;
    category: string;
    image: string;
    description: string;
    benefits: string[];
}) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-yellow-300 group transform hover:-translate-y-2">
            <div className="w-full h-24 sm:h-40 bg-gradient-to-br from-olive/10 via-yellow-50 to-yellow-100 flex items-center justify-center text-6xl group-hover:from-olive/20 group-hover:to-yellow-200 transition-all duration-300">
                {image}
            </div>
            <div className="p-4 sm:p-6 flex flex-col l">
                <div className="mb-3">
                    <span className="text-xs sm:text-sm font-bold text-white bg-olive px-3 py-1 rounded-full">{category}</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-olive mb-1 group-hover:text-yellow-600 transition-colors">{name}</h3>
                <p className="text-gray-700 text-sm sm:text-base mb-3 leading-relaxed flex-1">{description}</p>
                <ul className="space-y-1.5 pt-3 border-t border-gray-200">
                    {benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700 text-xs sm:text-sm">
                            <span className="text-yellow-500 font-bold mt-0.5">●</span>
                            <span className="font-medium">{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
