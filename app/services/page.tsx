import { FiCpu, FiRefreshCw, FiBarChart2, FiLayers, FiCheckCircle, FiSettings } from "react-icons/fi";
import Image from "next/image";

export const metadata = {
  title: "Services & Solutions | Smart ESL Systems",
  description: "Explore QuickShelf's comprehensive retail digitization services, from E-ink label deployment to real-time inventory analytics.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Smart ESL Deployment",
      icon: <FiCpu className="w-8 h-8 text-yellow-600" />,
      description: "We provide state-of-the-art E-ink labels with 10-year battery life and multi-color displays (Black, White, Red, Yellow).",
      features: ["Bluetooth 5.4 LE Technology", "Sub-1s Update Speed", "Water & Dust Resistant"]
    },
    {
      title: "Dynamic Pricing Engine",
      icon: <FiRefreshCw className="w-8 h-8 text-yellow-600" />,
      description: "Automate your pricing strategy based on demand, expiration dates, or competitor moves across your entire store network.",
      features: ["Omnichannel Sync", "Scheduled Updates", "Bulk Price Changes"]
    },
    {
      title: "Inventory Intelligence",
      icon: <FiLayers className="w-8 h-8 text-yellow-600" />,
      description: "Our tags do more than show prices. They track stock levels and alert staff when a shelf needs refilling.",
      features: ["Out-of-stock Alerts", "Stock-level Visualization", "Direct POS Integration"]
    },
    {
      title: "Retail Analytics",
      icon: <FiBarChart2 className="w-8 h-8 text-yellow-600" />,
      description: "Gain deep insights into customer behavior and shelf performance with our cloud-based analytics dashboard.",
      features: ["Heatmapping Data", "Price Elasticity Reports", "ROI Tracking"]
    }
  ];

  return (
    <main className="bg-white">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-b from-olive/5 to-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-olive mb-6">
            Comprehensive Retail <span className="text-yellow-600">Digitization.</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Beyond just digital tags—QuickShelf provides a full-stack ecosystem to automate operations, reduce waste, and increase margins.
          </p>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all group">
              <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-olive mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <FiCheckCircle className="text-olive" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Integration Section */}
      <section className="py-20 bg-olive text-white px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Seamless Infrastructure Integration</h2>
            <p className="text-olive-100 mb-8 text-lg">
              QuickShelf is designed to work with your existing tech stack. Whether you use Shopify, SAP, or a custom POS, our API-first approach ensures a smooth transition.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 font-bold">POS Integration</div>
              <div className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 font-bold">Cloud API</div>
              <div className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 font-bold">On-site Support</div>
            </div>
          </div>
          <div className="relative h-[400px] bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
             {/* Placeholder for an architecture diagram */}
             <div className="text-center p-6">
                <FiSettings className="w-20 h-20 text-yellow-400 animate-spin-slow mx-auto mb-4" />
                <p className="text-xl font-bold italic text-white/50">Architecture Diagram Coming Soon</p>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-olive mb-6">Ready to automate your shelves?</h2>
          <p className="text-gray-600 mb-8">Get a customized quote and a technical walkthrough of our hardware and software.</p>
          <a href="/contact" className="inline-block bg-yellow-400 text-olive px-10 py-4 rounded-xl font-black text-lg hover:bg-yellow-500 transition-all">
            Book a Technical Demo
          </a>
        </div>
      </section>
    </main>
  );
}