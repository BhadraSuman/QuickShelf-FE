import React from "react";

export default function TermsPage() {
    return (
        <main className="min-h-[60vh] flex items-start justify-center py-20 px-4">
            <div className="max-w-4xl">
                <h1 className="text-3xl font-extrabold text-olive mb-6">Terms of Service</h1>

                <p className="text-sm text-olive/90 mb-4 leading-relaxed">
                    These Terms of Service govern your use of Quickshelf's website and services. By accessing or using our services, you
                    agree to be bound by these terms.
                </p>

                <h2 className="text-xl font-bold mt-6 mb-2">Use of Services</h2>
                <p className="text-sm text-olive/90 mb-3">
                    You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for any
                    activity that occurs under your account.
                </p>

                <h2 className="text-xl font-bold mt-4 mb-2">Intellectual Property</h2>
                <p className="text-sm text-olive/90 mb-3">
                    All content, designs, and software provided by Quickshelf are our property or used with permission. You may not
                    reproduce or redistribute our content without consent.
                </p>

                <h2 className="text-xl font-bold mt-4 mb-2">Limitation of Liability</h2>
                <p className="text-sm text-olive/90 mb-3">
                    To the fullest extent permitted by law, Quickshelf will not be liable for any indirect, incidental, or consequential
                    damages arising from the use of our services.
                </p>

                <h2 className="text-xl font-bold mt-4 mb-2">Termination</h2>
                <p className="text-sm text-olive/90 mb-3">
                    We may suspend or terminate access to our services for violations of these Terms or for other reasons as permitted by
                    law.
                </p>

                <h2 className="text-xl font-bold mt-4 mb-2">Governing Law</h2>
                <p className="text-sm text-olive/90">
                    These Terms are governed by the laws applicable to the company's jurisdiction. Contact us if you have questions about
                    these Terms.
                </p>
            </div>
        </main>
    );
}
