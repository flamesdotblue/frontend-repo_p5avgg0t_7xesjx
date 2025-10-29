import React from 'react';
import { MessageCircle, CheckCircle, Clock } from 'lucide-react';

const steps = [
  {
    title: 'Message us on WhatsApp',
    desc: 'Say what you need and share your location/landmark.',
    icon: MessageCircle,
    tip: 'Tip: Send a photo/video for faster diagnosis.'
  },
  {
    title: 'Get instant quote & ETA',
    desc: 'We confirm pricing and share arrival time of a nearby pro.',
    icon: Clock,
    tip: 'You’ll see name, rating and phone number before they arrive.'
  },
  {
    title: 'Service and payment',
    desc: 'Professional completes the job. Pay securely in cash/UPI.',
    icon: CheckCircle,
    tip: 'Rate your experience to help others choose the best.'
  },
];

const HowItWorks = () => {
  const example = `Hi! I need an electrician to fix a fan. Location: Indiranagar, Bangalore.`;

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16" id="how-it-works">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">How to book on WhatsApp</h2>
          <p className="mt-2 text-gray-600">Booking takes under a minute. No app downloads required.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border bg-white p-6 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
              <p className="mt-3 text-xs text-emerald-700">{s.tip}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-900">Example message you can copy:</p>
          <pre className="mt-2 whitespace-pre-wrap rounded-lg bg-gray-900 p-4 text-sm text-emerald-100">{example}</pre>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
