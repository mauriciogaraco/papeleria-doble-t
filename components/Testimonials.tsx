import React from "react";
import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-24 bg-white"
      aria-label="Opiniones de clientes de agendas personalizadas en La Habana"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Opiniones de clientes sobre nuestras agendas personalizadas en La
            Habana
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubre lo que dicen nuestros clientes en Cuba sobre nuestras
            agendas personalizadas, calidad de impresión y servicio por
            WhatsApp.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              {/* STARS */}
              <div className="flex text-yellow-400 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* TEXT */}
              <p className="text-gray-700 italic mb-6">“{testimonial.text}”</p>

              {/* NAME */}
              <h4 className="font-heading font-bold text-gray-900">
                — {testimonial.name}
              </h4>
            </div>
          ))}
        </div>

        {/* TRUST SIGNAL */}
        <div className="text-center mt-12 text-sm text-gray-500">
          ✔ Clientes en La Habana • ✔ Pedidos personalizados • ✔ Atención por
          WhatsApp
        </div>
      </div>
    </section>
  );
}
