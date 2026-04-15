import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { OrderProvider } from "@/components/OrderContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tudominio.com"), // IMPORTANTE cuando tengas dominio

  title: {
    default: "Agendas Personalizadas en La Habana | Papelería Doble T",
    template: "%s | Papelería Doble T",
  },

  description:
    "Compra agendas personalizadas en La Habana, Cuba. Diseños únicos con tu nombre, estilo y formato. Entregas rápidas en toda La Habana.",

  keywords: [
    "agendas personalizadas La Habana",
    "papelería en La Habana",
    "agendas Cuba",
    "libretas personalizadas Cuba",
    "agendas con nombre La Habana",
  ],

  authors: [{ name: "Papelería Doble T" }],

  creator: "Papelería Doble T",

  openGraph: {
    title: "Agendas Personalizadas en La Habana | Papelería Doble T",
    description:
      "Diseña tu agenda personalizada en La Habana. Entregas rápidas y diseños únicos.",
    url: "https://tudominio.com",
    siteName: "Papelería Doble T",
    locale: "es_CU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Agendas Personalizadas en La Habana",
    description: "Agendas personalizadas con tu nombre y estilo en La Habana.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${poppins.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans text-foreground bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Papelería Doble T",
              image: "https://tudominio.com/logo.webp",
              url: "https://tudominio.com",
              telephone: "+5363277661",
              address: {
                "@type": "PostalAddress",
                addressLocality: "La Habana",
                addressCountry: "CU",
              },
              areaServed: "La Habana",
              description:
                "Agendas personalizadas en La Habana con entrega rápida",
              sameAs: ["https://www.instagram.com/doblettpapel"],
            }),
          }}
        />
        <OrderProvider>{children}</OrderProvider>
      </body>
    </html>
  );
}
