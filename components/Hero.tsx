import { ArrowRight } from "lucide-react";
import HeroImage from "../assets/Hero.webp";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-background overflow-hidden"
      aria-label="Sección principal de agendas personalizadas en La Habana"
    >
      {/* Background decorativo */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          {/* TEXT CONTENT */}
          <div className="flex-1 text-center md:text-left space-y-6">
            {/* Badge SEO */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm">
              ✨ Agendas personalizadas en La Habana, Cuba
            </div>

            {/* H1 SEO PRINCIPAL */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight text-gray-900">
              Agendas personalizadas en{" "}
              <span className="text-primary">La Habana</span> con diseño único y{" "}
              <span className="text-secondary">estilo profesional</span>
            </h1>

            {/* H2 SEO SECUNDARIO */}
            <h2 className="text-lg md:text-xl font-medium text-gray-700 max-w-2xl mx-auto md:mx-0">
              Diseñamos agendas personalizadas con nombre, estilo y acabado
              premium para estudiantes, negocios y uso personal en Cuba.
            </h2>

            {/* COPY SEO (intención de compra) */}
            <p className="text-gray-600 max-w-2xl mx-auto md:mx-0">
              Crea tu agenda personalizada desde cero. Elige el diseño,
              personaliza tu portada y recibe tu pedido en La Habana con entrega
              rápida.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
              <a
                href="#catalogo"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2"
              >
                Ver catálogo <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#como-funciona"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-gray-800 font-bold text-lg border border-gray-200 hover:bg-gray-50 transition-all flex items-center justify-center"
              >
                ¿Cómo ordenar?
              </a>
            </div>

            {/* MICRO TRUST (SEO + conversión) */}
            <div className="pt-4 text-sm text-gray-500">
              ✔ Entregas en La Habana • ✔ Diseño personalizado • ✔ Calidad
              premium
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex-1 w-full relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform md:rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white">
              <Image
                width={500}
                height={600}
                priority
                src={HeroImage.src}
                alt="Agendas personalizadas en La Habana Cuba diseño premium"
                className="w-full h-auto object-cover"
              />

              {/* overlay SEO visual */}
              <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                ✨ Hecho en La Habana
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
