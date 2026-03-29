export default function Hero() {
    return (
        <section className="w-full min-h-screen bg-white flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-olive/10 rounded-full blur-3xl opacity-50"></div>

            <div className="max-w-4xl text-center space-y-8 relative z-10">
                {/* Badge */}
                <div className="inline-block bg-yellow-100 text-olive px-6 py-2.5 rounded-full text-sm font-bold border-2 border-yellow-300">
                    ⭐ Transform Retail with Quickshelf
                </div>

                {/* Main Heading */}
                <div className="space-y-6">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-olive leading-tight tracking-tight">
                        Empower Your Store
                    </h1>
                    <h2 className="text-4xl sm:text-5xl md:text-5xl font-black text-olive leading-tight">with Modern Retail Solutions</h2>
                    <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Complete store management, inventory tracking, staff scheduling, and customer engagement in one platform
                    </p>
                </div>

                {/* Description Box */}
                <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 sm:p-10 max-w-3xl mx-auto shadow-xl">
                    <p className="text-lg sm:text-xl text-gray-800 leading-relaxed font-medium">
                        Quickshelf is the all-in-one retail solution trusted by hundreds of stores. From inventory management to electronic
                        shelf labels, we help you compete in the digital era while maximizing profitability.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                    <a
                        href="/contact"
                        className="px-10 py-4 rounded-2xl font-bold text-lg bg-yellow-400 text-olive shadow-xl hover:shadow-2xl hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
                    >
                        Start Free Trial
                    </a>
                    <a
                        href="/about"
                        className="px-10 py-4 rounded-2xl font-bold text-lg border-2 border-olive text-olive bg-white hover:bg-olive hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                        Learn More
                    </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 sm:gap-12 mt-16 pt-12 border-t-4 border-gray-300">
                    <div className="text-center">
                        <div className="text-4xl sm:text-5xl font-black text-olive mb-2">500+</div>
                        <div className="text-base text-gray-600 font-semibold">Active Retailers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl sm:text-5xl font-black text-olive mb-2">5000+</div>
                        <div className="text-base text-gray-600 font-semibold">Store Locations</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl sm:text-5xl font-black text-olive mb-2">24/7</div>
                        <div className="text-base text-gray-600 font-semibold">Expert Support</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
