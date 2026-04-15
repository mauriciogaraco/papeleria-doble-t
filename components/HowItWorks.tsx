import React from "react";
import { MousePointerClick, MessageCircle, Truck } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <MousePointerClick className="w-8 h-8 text-white" />,
      title: "1. Elige tu producto",
      description: "Explora nuestro catálogo y selecciona los modelos de agendas, libretas o accesorios que más te gusten.",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      title: "2. Personaliza tu pedido",
      description: "Contáctanos por WhatsApp para definir colores, nombres, portadas u otros detalles que harán único tu pedido.",
    },
    {
      icon: <Truck className="w-8 h-8 text-white" />,
      title: "3. Abona el 50% para confirmar",
      description: "Asegura tu pedido con el pago inicial. El costo restante lo abonas cómodamente al recibir o retirar tu paquete.",
    },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            ¿Cómo ordenar?
          </h2>
          <p className="text-gray-600 text-lg">
            Hacer tu pedido es súper fácil. Todo nuestro proceso de compra se finaliza
            de manera personalizada a través de WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center mb-6 transform group-hover:-translate-y-2 transition-transform shadow-lg shadow-secondary/30">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
