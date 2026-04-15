import React from "react";
import { MousePointerClick, MessageCircle, Truck } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <MousePointerClick className="w-8 h-8 text-white" />,
      title: "1. Elige tu producto",
      description:
        "Explora nuestro catálogo de agendas personalizadas en La Habana y selecciona el modelo que más te guste.",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      title: "2. Personaliza por WhatsApp",
      description:
        "Escríbenos por WhatsApp para personalizar tu agenda: nombres, colores, diseños y detalles únicos hechos en Cuba.",
    },
    {
      icon: <Truck className="w-8 h-8 text-white" />,
      title: "3. Confirma tu pedido",
      description:
        "Realiza un pago inicial del 50% y asegura tu agenda personalizada. Entregas rápidas en La Habana.",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="py-24 bg-white"
      aria-label="Proceso de compra de agendas personalizadas en La Habana"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER SEO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Cómo comprar agendas personalizadas en La Habana
          </h2>

          <p className="text-gray-600 text-lg">
            El proceso para encargar tu agenda personalizada en Cuba es rápido y
            sencillo. Todo se gestiona directamente por WhatsApp.
          </p>
        </div>

        {/* STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center mb-6 transform group-hover:-translate-y-2 transition-transform shadow-lg shadow-secondary/30">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* MICRO SEO / TRUST LINE */}
        <div className="text-center mt-12 text-sm text-gray-500">
          ✔ Agendas personalizadas en La Habana • ✔ Atención por WhatsApp • ✔
          Diseño a medida
        </div>
      </div>
    </section>
  );
}
