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
    }, 1000);
  };

  const scrollContainer = (id: string, direction: "left" | "right") => {
    const container = document.getElementById(id);
    if (!container) return;

    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section
      id="catalogo"
      className="py-24 bg-gray-50"
      aria-label="Catálogo de productos personalizados en La Habana"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Catálogo de agendas personalizadas en La Habana
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explora agendas, libretas y papelería personalizada con diseños
            únicos en Cuba.
          </p>
        </header>

        {/* CATEGORIES */}
        <div className="space-y-16">
          {productsByCategory.map(({ category, items }, index) => (
            <div key={category} className="relative">
              <div className="flex justify-between items-end mb-6">
                <h3 className="text-2xl font-bold font-heading text-gray-800 border-b-2 border-primary pb-2">
                  {category}
                </h3>

                <div className="hidden sm:flex gap-2">
                  <button
                    onClick={() => scrollContainer(`scroll-${index}`, "left")}
                    className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => scrollContainer(`scroll-${index}`, "right")}
                    className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div
                id={`scroll-${index}`}
                className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory"
              >
                {items.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className="min-w-[260px] flex-none snap-start bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition cursor-pointer border border-gray-100"
                  >
                    <div className="relative w-full h-64">
                      <Image
                        src={product.image}
                        alt={product.alt}
                        fill
                        sizes="(max-width: 768px) 80vw, 300px"
                        className="object-cover"
                      />

                      <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition flex items-center justify-center">
                        <span className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                          Ver detalles
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h4 className="text-lg font-bold text-gray-900 truncate">
                        {product.name}
                      </h4>

                      <p className="text-primary font-bold text-lg mt-1">
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

      {/* MODAL FIXED */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setSelectedProduct(null)}
          />

          {/* MODAL */}
          <div className="relative bg-white w-full sm:max-w-4xl max-h-[95vh] sm:max-h-[90vh] rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            {/* CLOSE */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full shadow"
            >
              <X className="w-5 h-5" />
            </button>

            {/* IMAGE */}
            <div className="relative w-full md:w-1/2 h-72 sm:min-h-[420px]">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* CONTENT */}
            <div
              className="
                w-full md:w-1/2
                p-6 sm:p-10
                flex flex-col
                overflow-y-auto

                /* 🔥 FIX IMPORTANTE PARA BOTÓN FLOTANTE */
                pb-28 sm:pb-10
                gap-2
              "
            >
              <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mb-3">
                {selectedProduct.category}
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {selectedProduct.name}
              </h3>

              <p className="text-2xl font-bold text-primary mt-2 mb-4">
                ${selectedProduct.price.toFixed(2)} USD
              </p>

              <p className="text-gray-600 text-sm sm:text-base">
                {selectedProduct.description}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>✓ Alta calidad asegurada</li>
                <li>✓ Personalización completa</li>
                <li>✓ Entrega en La Habana</li>
              </ul>

              {/* CTA */}
              <button
                onClick={() => handleAdd(selectedProduct)}
                disabled={isAdded}
                className={`mt-6 w-full font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition ${
                  isAdded
                    ? "bg-green-500 text-white"
                    : "bg-primary hover:bg-primary/90 text-white"
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-5 h-5" />
                    Añadido al pedido
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5" />
                    Añadir al pedido
                  </>
                )}
              </button>

              {/* 🔥 ESPACIO EXTRA REAL PARA SAFE AREA + FLOATING BUTTON */}
              <div className="h-10 sm:h-0" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
