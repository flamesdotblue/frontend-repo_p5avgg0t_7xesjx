import React from 'react';
import { Phone, MessageCircle, Shield } from 'lucide-react';

const HeroSection = () => {
  const WHATSAPP_NUMBER = '+91 98765 43210';
  const WHATSAPP_MESSAGE = 'Hi! I want to book a home service. My location is <your area> and I need <service type>.';
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(whatsappLink)}`;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-800 text-sm font-medium">
              <Shield className="h-4 w-4" /> Verified, Trusted Professionals
            </span>
            <h1 className="mt-4 font-semibold leading-tight text-4xl md:text-6xl text-gray-900">
              Home Services on WhatsApp — Fast, Reliable, Affordable
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Book plumbers, electricians, cleaners, appliance repair and more in seconds. Chat with us on WhatsApp and we’ll dispatch a nearby pro.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-white shadow hover:bg-emerald-700"
              >
                <MessageCircle className="h-5 w-5" /> Book on WhatsApp
              </a>
              <a
                href={`tel:${WHATSAPP_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-900 hover:bg-gray-50"
              >
                <Phone className="h-5 w-5" /> {WHATSAPP_NUMBER}
              </a>
            </div>
            <p className="mt-2 text-sm text-gray-500">Scan QR to chat instantly</p>
          </div>

          <div className="flex items-center justify-center">
            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <img
                src={qrUrl}
                alt="WhatsApp Booking QR"
                className="h-[220px] w-[220px]"
              />
              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">Point your camera to start a WhatsApp chat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
