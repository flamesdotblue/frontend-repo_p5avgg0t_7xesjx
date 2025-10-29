import React from 'react';
import { Wrench, Zap, Home, Shield, Star } from 'lucide-react';

const services = [
  {
    title: 'Plumber',
    desc: 'Leak fixes, pipe repair, bathroom fittings, RO installation',
    icon: Wrench,
    rating: 4.8,
    reviews: 1290,
    price: 'From ₹199'
  },
  {
    title: 'Electrician',
    desc: 'Wiring, switches, fans, lights, geyser, inverter setup',
    icon: Zap,
    rating: 4.7,
    reviews: 980,
    price: 'From ₹149'
  },
  {
    title: 'Home Cleaning',
    desc: 'Deep cleaning, kitchen, sofa shampoo, move-in/out',
    icon: Home,
    rating: 4.6,
    reviews: 760,
    price: 'From ₹299'
  },
  {
    title: 'Verified Pros',
    desc: 'Background checked, ID verified, safety-first service',
    icon: Shield,
    rating: 4.9,
    reviews: 2150,
    price: 'Best Rated'
  },
];

const ServicesSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16" id="services">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Popular Services</h2>
        <p className="mt-2 text-gray-600">Affordable pricing, transparent estimates and highly-rated professionals.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <s.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-medium text-gray-900">{s.rating}</span>
                  <span className="text-xs text-gray-500">({s.reviews.toLocaleString()} reviews)</span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-600">{s.desc}</p>
            <div className="mt-4 text-sm font-medium text-emerald-700">{s.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
