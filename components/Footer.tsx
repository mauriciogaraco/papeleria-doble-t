import React from "react";
import { MessageCircle } from "lucide-react";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

export function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-accent text-white pt-16 pb-8"
      aria-label="Contacto de Papelería Doble T en La Habana Cuba"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* BRAND */}
          <div>
            <h3 className="font-heading font-bold text-2xl text-primary mb-4">
              Doble T Papelería en La Habana
            </h3>

            <p className="text-gray-400 max-w-sm">
              Somos una <strong>papelería en La Habana, Cuba</strong>{" "}
              especializada en agendas personalizadas, libretas y productos de
              impresión a medida con entrega rápida.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">
              Enlaces rápidos
            </h4>

            <ul className="space-y-2">
              <li>
                <a
                  href="#como-funciona"
                  className="text-gray-400 hover:text-white"
                >
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#catalogo" className="text-gray-400 hover:text-white">
                  Catálogo de agendas personalizadas
                </a>
              </li>
              <li>
                <a
                  href="#testimonios"
                  className="text-gray-400 hover:text-white"
                >
                  Opiniones de clientes
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">
              Contacto en La Habana
            </h4>

            <div className="text-gray-400 text-sm mb-4 space-y-2">
              <p>
                La Sola #357 apto 2 entre Santa Catalina y San Mariano.
                <br />
                Víbora, Diez de Octubre, La Habana, Cuba.
              </p>

              <a
                href="https://maps.google.com/?q=La+Sola+357+Vibora+La+Habana+Cuba"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-secondary hover:text-white"
              >
                Ver ubicación en Google Maps
              </a>
            </div>

            {/* SOCIAL */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/doblettpapel"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <InstagramLogoIcon className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/5363277661"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM SEO LINE */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Papelería Doble T en La Habana, Cuba.
            Todos los derechos reservados.
          </p>

          <p className="mt-2 md:mt-0">
            Agendas personalizadas • Libretas • Diseño gráfico en Cuba
          </p>
        </div>
      </div>
    </footer>
  );
}
