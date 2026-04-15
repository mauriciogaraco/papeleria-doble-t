"use client";

import React, { useState } from "react";
import { ShoppingBag, X, Plus, Minus, Send, Trash2 } from "lucide-react";
import { useOrderContext } from "./OrderContext";
import { generateCartMessage } from "@/lib/whatsapp";
import Image from "next/image";

export function OrderFloat() {
  const { cart, totalItems, updateQuantity, removeFromOrder, clearOrder } =
    useOrderContext();
  const [isOpen, setIsOpen] = useState(false);

  if (cart.length === 0) return null;

  const handleSendOrder = () => {
    const url = generateCartMessage(cart);
    window.open(url, "_blank");
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-full shadow-2xl flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 animate-in slide-in-from-bottom-8"
      >
        <ShoppingBag className="w-5 h-5" />
        <span>Ver pedido ({totalItems})</span>
      </button>

      {/* Slide-in Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-xl font-heading font-bold text-gray-900 flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-primary" />
                Tu Pedido
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 bg-gray-50 hover:bg-gray-100 text-gray-500 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50 relative group"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <h3 className="font-bold text-gray-900 text-sm leading-tight pr-6">
                      {item.name}
                    </h3>
                    <p className="text-primary font-bold">
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center bg-white rounded-lg border border-gray-200 px-2 py-1 shadow-sm">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-1 text-gray-500 hover:text-black"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-sm font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-1 text-gray-500 hover:text-black"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromOrder(item.id)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100 bg-white">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">
                    Total estimado
                  </p>
                  <button
                    onClick={clearOrder}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Vaciar pedido
                  </button>
                </div>
                <p className="text-3xl font-heading font-bold text-gray-900">
                  ${totalPrice.toFixed(2)}
                </p>
              </div>

              <button
                onClick={handleSendOrder}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
              >
                <Send className="w-5 h-5" />
                Enviar pedido por WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
