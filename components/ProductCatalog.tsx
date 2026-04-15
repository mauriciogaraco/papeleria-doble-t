/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { products, Product } from "@/lib/data";
import { useOrderContext } from "./OrderContext";
import { X, Plus, ChevronRight, ChevronLeft, Check } from "lucide-react";
import Image from "next/image";
export function ProductCatalog() {
  const { addToOrder } = useOrderContext();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAdded, setIsAdded] = useState(false);

  // Group products by category
  const categories = Array.from(new Set(products.map((p) => p.category)));
  const productsByCategory = categories.map((category) => ({
    category,
    items: products.filter((p) => p.category === category),
  }));

  const handleAdd = (product: Product) => {
    addToOrder(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      setSelectedProduct(null);
    }, 1000); // Give brief feedback then close modal
  };

  const scrollContainer = (id: string, direction: "left" | "right") => {
    const container = document.getElementById(id);
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="catalogo" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Catálogo de Productos
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubre nuestra selección organizada por categorías. Calidad
            premium en cada detalle.
          </p>
        </div>

        <div className="space-y-16">
          {productsByCategory.map(({ category, items }, index) => (
            <div key={index} className="relative">
              <div className="flex justify-between items-end mb-6">
                <h3 className="text-2xl font-bold font-heading text-gray-800 border-b-2 border-primary pb-2 inline-block">
                  {category}
                </h3>
                <div className="gap-2 hidden sm:flex">
                  <button
                    onClick={() => scrollContainer(`scroll-${index}`, "left")}
                    className="p-2 rounded-full bg-white shadow hover:bg-gray-100 text-gray-600 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => scrollContainer(`scroll-${index}`, "right")}
                    className="p-2 rounded-full bg-white shadow hover:bg-gray-100 text-gray-600 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div
                id={`scroll-${index}`}
                className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbars"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {items.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className="min-w-70 max-w-75 flex-none snap-start bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 cursor-pointer"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.alt}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white text-gray-900 font-bold px-4 py-2 rounded-full text-sm">
                          Ver detalles
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold font-heading text-gray-900 mb-1 truncate">
                        {product.name}
                      </h4>
                      <p className="text-primary font-bold text-lg mb-2">
                        ${product.price.toFixed(2)} USD
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 opacity-100 transition-opacity">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          ></div>
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur p-2 rounded-full text-gray-800 hover:bg-white shadow-sm transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.alt}
                width={600}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 w-max">
                {selectedProduct.category}
              </div>
              <h3 className="text-3xl font-heading font-bold text-gray-900 mb-2">
                {selectedProduct.name}
              </h3>
              <p className="text-2xl font-bold text-primary mb-6">
                ${selectedProduct.price.toFixed(2)} USD
              </p>

              <div className="prose prose-sm text-gray-600 mb-8 grow">
                <p>{selectedProduct.description}</p>
                <ul className="mt-4 space-y-2">
                  <li>✓ Alta calidad asegurada</li>
                  <li>✓ Envíos seguros</li>
                  <li>✓ Atención personalizada</li>
                </ul>
              </div>

              <button
                onClick={() => handleAdd(selectedProduct)}
                disabled={isAdded}
                className={`w-full font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all ${
                  isAdded
                    ? "bg-[#25D366] text-white cursor-default"
                    : "bg-primary hover:bg-primary/90 text-white transform hover:scale-[1.02]"
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-6 h-6" />
                    ¡Añadido al pedido!
                  </>
                ) : (
                  <>
                    <Plus className="w-6 h-6" />
                    Añadir al pedido
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
