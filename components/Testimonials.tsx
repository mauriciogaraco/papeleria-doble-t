import React from "react";
import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 text-lg">
            Únete a cientos de personas que han mejorado su organización con
            Doble T.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">
                {`"${testimonial.text}"`}
              </p>
              <h4 className="font-heading font-bold text-gray-900">
                — {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
