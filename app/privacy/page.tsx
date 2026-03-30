import React from "react";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-[60vh] flex items-start justify-center py-20 px-4">
            <div className="max-w-4xl">
                <h1 className="text-3xl font-extrabold text-olive mb-6">Privacy Policy</h1>

                <p className="text-sm text-olive/90 mb-4 leading-relaxed">
                    Quickshelf is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use
                    it, and the choices you have. By using our services, you agree to the collection and use of information in accordance
                    with this policy.
                </p>

                <h2 className="text-xl font-bold mt-6 mb-2">Information We Collect</h2>
                <p className="text-sm text-olive/90 mb-3">
                    We collect information you provide directly (account details, contact requests) and data collected automatically (usage,
                    cookies) to operate and improve our services.
                </p>

                <h2 className="text-xl font-bold mt-4 mb-2">How We Use Information</h2>
                <p className="text-sm text-olive/90 mb-3">
                    We use data to provide, maintain, and improve our products, communicate with you, personalize experiences, and ensure
                    security. We do not sell personal data.
                </p>

                <h2 className="text-xl font-bold mt-4 mb-2">Cookies and Tracking</h2>
                <p className="text-sm text-olive/90 mb-3">
                    We use cookies and similar technologies for analytics, preferences, and essential site functionality. You can control
                    cookies through your browser settings.
                </p>

                <h2 className="text-xl font-bold mt-4 mb-2">Data Retention & Security</h2>
                <p className="text-sm text-olive/90 mb-3">
                    We retain data as necessary to provide services and comply with legal obligations. We implement reasonable security
                    measures to protect data, though no method is completely secure.
                </p>

                <h2 className="text-xl font-bold mt-4 mb-2">Contact Us</h2>
                <p className="text-sm text-olive/90">
                    If you have questions about this policy or your personal data, please contact us via the Contact page.
                </p>
            </div>
        </main>
    );
}
