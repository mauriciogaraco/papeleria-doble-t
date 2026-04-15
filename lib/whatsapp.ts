import { Product } from "./data";

const WHATSAPP_NUMBER = "5363277661";

export interface CartItem extends Product {
  quantity: number;
}

export function generateCartMessage(cartItems: CartItem[]): string {
  let message = "Hola, quiero hacer un pedido:\n\n";
  let total = 0;

  cartItems.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    message += `- ${item.name} (x${item.quantity}) - $${itemTotal.toFixed(2)} USD\n`;
  });

  message += `\nTotal: $${total.toFixed(2)} USD\n\n`;
  message += "¿Está disponible?";

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function generateServiceMessage(): string {
  const message = `Hola Doble T! 👋\n\nEstoy interesado(a) en consultar por los Servicios de Diseño.\n\n¿Me podrían dar más información?`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
