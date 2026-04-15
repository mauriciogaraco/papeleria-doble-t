import { ArrowRight } from "lucide-react";
import HeroImage from "../assets/Hero.webp";
import Image from "next/image";
export function Hero() {
  return (
    <section id="inicio" className="relative bg-background overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">
              ✨ Agendas totalmente personalizadas
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 leading-tight">
              Organiza tu vida con <span className="text-primary">estilo</span>{" "}
              y <span className="text-secondary">propósito</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto md:mx-0">
              Crea la agenda perfecta que se adapte a tu rutina. Diseños
              exclusivos, papel premium y envíos a todo el país.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <a
                href="#catalogo"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2"
              >
                Ver modelos <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#como-funciona"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-gray-700 font-bold text-lg border border-gray-200 hover:bg-gray-50 transition-all flex items-center justify-center"
              >
                ¿Cómo ordenar?
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 w-full relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white">
              <Image
                width={500}
                height={600}
                src={HeroImage.src}
                alt="Agendas Doble T"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
