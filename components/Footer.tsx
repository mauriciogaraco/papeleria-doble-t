import React from "react";
import { Mail } from "lucide-react";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

export function Footer() {
  return (
    <footer id="contacto" className="bg-accent text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-heading font-bold text-2xl text-primary mb-4">
              Doble T
            </h3>
            <p className="text-gray-400 max-w-sm">
              Tu espacio para encontrar la organización perfecta. Materiales de
              alta calidad y personalización a medida.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">
              Enlaces rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#como-funciona"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a
                  href="#catalogo"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Catálogo
                </a>
              </li>
              <li>
                <a
                  href="#testimonios"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contacto</h4>
            <div className="text-gray-400 text-sm mb-4 space-y-2">
              <p>
                La Sola #357 apto 2 entre Santa Catalina y San Mariano.<br/>
                Víbora, Municipio Diez de Octubre, La Habana, Cuba.
              </p>
              <a 
                href="https://maps.google.com/?q=La+Sola+357+Vibora+La+Habana+Cuba" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block text-secondary hover:text-white transition-colors"
              >
                Ver en Google Maps
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/doblettpapel"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
              >
                <InstagramLogoIcon className="w-5 h-5" />
              </a>

              <a
                href="mailto:hola@doblet.com"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Doble T. Todos los derechos reservados.
          </p>
          <p className="mt-2 md:mt-0">
            Diseñado con ❤️ para amantes de la papelería.
          </p>
        </div>
      </div>
    </footer>
  );
}
