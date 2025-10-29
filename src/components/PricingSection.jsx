import React from 'react';
import { UserPlus, Wallet, Shield } from 'lucide-react';

const PricingSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16" id="pricing">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Customer pricing */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900">Affordable Pricing for Customers</h3>
          <p className="mt-2 text-gray-600">Transparent rates, pay only after service. No hidden fees.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border p-4">
              <div className="text-sm font-medium text-gray-900">Plumber Visit</div>
              <div className="mt-1 text-emerald-700 font-semibold">₹199 - ₹399</div>
              <p className="mt-1 text-sm text-gray-600">Diagnosis and minor fixes. Parts billed at cost.</p>
            </div>
            <div className="rounded-xl border p-4">
              <div className="text-sm font-medium text-gray-900">Electrician Visit</div>
              <div className="mt-1 text-emerald-700 font-semibold">₹149 - ₹349</div>
              <p className="mt-1 text-sm text-gray-600">Switches, fans, lights, basic wiring checks.</p>
            </div>
            <div className="rounded-xl border p-4">
              <div className="text-sm font-medium text-gray-900">Home Cleaning</div>
              <div className="mt-1 text-emerald-700 font-semibold">₹299 - ₹1499</div>
              <p className="mt-1 text-sm text-gray-600">Kitchen, bathroom, sofa, or deep cleaning packages.</p>
            </div>
            <div className="rounded-xl border p-4">
              <div className="text-sm font-medium text-gray-900">Appliance Repair</div>
              <div className="mt-1 text-emerald-700 font-semibold">₹249 - ₹699</div>
              <p className="mt-1 text-sm text-gray-600">AC, fridge, washing machine, RO & more.</p>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">Note: Prices vary by city and issue complexity. Final estimate shared on WhatsApp before confirmation.</div>
        </div>

        {/* Partner subscription */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-800 text-sm font-medium">
            <Shield className="h-4 w-4" /> For Service Providers
          </div>
          <h3 className="mt-3 text-2xl font-semibold text-gray-900">Register as a Partner</h3>
          <p className="mt-1 text-gray-600">Join thousands of professionals and grow your business.</p>

          <div className="mt-4 rounded-xl border p-4">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-xl">
              <Wallet className="h-5 w-5" /> Subscription: ₹499 / month
            </div>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Verified leads in your area</li>
              <li>No commission on jobs — keep 100% of your earnings</li>
              <li>In-app rating and profile to build trust</li>
              <li>Free training and safety toolkit</li>
            </ul>

            <a
              href="https://wa.me/919876543210?text=I%20want%20to%20register%20as%20a%20service%20provider"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-white shadow hover:bg-emerald-700"
            >
              <UserPlus className="h-5 w-5" /> Register on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
