"use client";

import React from "react";
import { Paintbrush, MessageCircle } from "lucide-react";
import { generateServiceMessage } from "@/lib/whatsapp";
import ImageServices from "../assets/Services.webp";
import Image from "next/image";

export function ServicesSection() {
  const handleServiceInquiry = () => {
    const url = generateServiceMessage();
    window.open(url, "_blank");
  };

  return (
    <section id="servicios" className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-primary/10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto md:mx-0">
              <Paintbrush className="w-8 h-8 text-primary" />
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Servicios de Diseño
            </h2>

            <p className="text-gray-600 text-lg max-w-xl mx-auto md:mx-0">
              ¿No encuentras exactamente lo que buscas? Nuestro equipo de diseño
              está listo para crear la papelería de tus sueños. Desde logotipos
              para emprendimientos hasta libretas 100% personalizadas para
              eventos especiales.
            </p>

            <div className="pt-4 flex justify-center md:justify-start">
              <button
                onClick={handleServiceInquiry}
                className="bg-accent hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Consultar por WhatsApp
              </button>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={ImageServices.src}
                alt="Servicios de diseño personalizado en la Habana, Cuba"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
