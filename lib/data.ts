 import ServiceCard from "../assets/Catálogo/Card.webp";
 import ServiceCard2 from "../assets/Catálogo/Card2.webp";
 import NoteBook from "../assets/Catálogo/NoteBook.webp";
 import NoteBook2 from "../assets/Catálogo/NoteBook1.webp";
  import NoteP from "../assets/Catálogo/NoteB-P.webp";
    import MiniB from "../assets/Catálogo/MiniBloc.webp";
 import NoteP2 from "../assets/Catálogo/NoteB-P2.webp";
  import Agenda from "../assets/Catálogo/Agenda1.webp";
   import Agenda2 from "../assets/Catálogo/Agenda2.webp";
    import Agenda3 from "../assets/Catálogo/Agenda3.5.webp";
 import Agenda4 from "../assets/Catálogo/Agenda4.webp";
   import Agenda5 from "../assets/Catálogo/Agenda5.webp";
    import Agenda6 from "../assets/Catálogo/Agenda6.webp";
 import Agenda7 from "../assets/Catálogo/Agenda7.webp";


 export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  alt: string; // 👈 NUEVO
  description: string;
  category: string;
}


export const products: Product[] = [
  // Agendas
  {
    id: "p1",
    name: "BIG COMBO",
    price: 30.00,
      alt: "Combo de agendas personalizadas en La Habana con mini bloc y tapa dura",
    image: Agenda.src,
    description: "Combo personalizable de Agenda PLUS, Agenda Premium y Mini Bloc de notas. Todos tienen tapa dura e incluyen marcador de regalo.",
    category: "Agendas",
  },
  {
    id: "p2",
    name: "Mi Bebé. Agenda",
    price: 10.00,
      alt: "Agenda personalizada para bebé en La Habana con seguimiento de crecimiento",
    image: Agenda2.src,
    description: "Agenda de 170 hojas, tapa y fondo dura, cubierta con papel fotográfico autoadhesivo y película anti-humedad. Hojas de 75 gramos. Citas médicas, seguimiento de etapas de crecimiento, primeros 12 meses. Medidas: 21x14cm. Artículo PERSONALIZABLE",
    category: "Agendas",
  },
  
   {
    id: "p3",
    name: "Agenda Premium",
    price: 10.00,
    alt: "Agenda personalizada premium en La Habana con diseño profesional",
    image: Agenda3.src,
    description: "Agenda de 170 hojas, tapa y fondo dura, cubierta con papel fotográfico autoadhesivo y película anti-humedad. Hojas de 75 gramos. Medidas: 21x14cm. Artículo PERSONALIZABLE. Existen 15 modelos de páginas: 1. Planificador para 12 meses. 2. Planner fitness. 3. Diario Personal. 4. Planner Diario. 5. Planner de contenido digital / redes sociales. 6. Diario de Lectura. 7. Diario de gratitud y manifestación. 8. Agenda académica / ejecutiva. 9. Recetario. 10. Bullet Journal. 11. Historia de mi Embarazo. 12. Mi bebé (citas médicas, historial dental, etc.). 13. Gestión de citas / turnos. 14. Ventas Diarias. 15. Diario Devocional / Religión",
    category: "Agendas",
  },
    {
    id: "p4",
    name: "Agenda PLUS SIZE",
    price: 17.00,
        alt: "Agenda grande personalizada en La Habana tamaño plus con tapa dura",
    image: Agenda4.src,
    description: "Agenda de 170 hojas, tapa y fondo dura, cubierta con papel fotográfico autoadhesivo y película anti-humedad. Hojas de 75 gramos. Medidas: 27x19cm. Artículo PERSONALIZABLE",
    category: "Agendas",
  },
    {
    id: "p5",
    name: "Historial médico Bebé",
    price: 7.50,
    image: Agenda5.src,
      alt: "Agenda de historial médico para bebé personalizada en La Habana",
    description: "Agenda de tapa y fondo dura de 60 hojas. Medidas: 21x14cm. Artículo PERSONALIZABLE",
    category: "Agendas",
  },
     {
    id: "p6",
    name: "Historial Veterinario",
    price: 7.50,
    image: Agenda6.src,
        alt: "Agenda veterinaria personalizada en La Habana para control de mascotas",
    description: "Agenda de tapa y fondo dura de 60 hojas. Medidas: 21x14cm. Artículo PERSONALIZABLE",
    category: "Agendas",
  },
     {
    id: "p7",
    name: "Libro de firmas",
    price: 6.00,
    image: Agenda7.src,
     alt: "Libro de firmas personalizado en La Habana para bodas y eventos",
    description: "Agenda de tapa y fondo dura de 60 hojas. Ideal para quinceañeras, bodas y otros eventos. Medidas: 21x14cm. Artículo PERSONALIZABLE",
    category: "Agendas",
  },
  // Mini blocs
  {
    id: "mb1",
    name: "Mini bloc de notas",
    price: 3.00,
    image: MiniB.src,
     alt: "Mini bloc de notas personalizado en La Habana con tapa dura",
    description: "Mini bloc de tapa dura. Medidas: 14.5x10.5 cm. 140 hojas en BLANCO. Portada y fondo personalizables",
    category: "Mini blocs",
  },
 
  // Libretas escolares personalizadas
  {
    id: "lep1",
    name: "Libreta engargolada chica 90 hojas Portada Plasticada",
    price: 3.50,
    image: NoteP.src,
     alt: "Libreta personalizada pequeña en La Habana con portada plasticada",
    description: "Libretas engargoladas con Wire 2:1 o 3:1 de 90 hojas. Portada y fondo protegidas contra la humedad. Rayadas, cuadriculadas, punteadas y lisas. Medidas: 21x15cm. PORTADA PERSONALIZABLE",
    category: "Libretas escolares personalizadas",
  },
  {
    id: "lep2",
    name: "Libreta engargolada grande 90 hojas Portada Plasticada",
    price: 5.00,
    image: NoteP2.src,
    alt: "Libreta personalizada grande en La Habana con portada resistente",
    description: "Libretas engargoladas con Wire 2:1 o 3:1 de 90 hojas. Portada y fondo protegidas contra la humedad. Rayadas, cuadriculadas, punteadas y lisas. Medidas: 27x21cm. PORTADA PERSONALIZABLE",
    category: "Libretas escolares personalizadas",
  },
  // Libretas escolares no personalizadas
  {
    id: "len1",
    name: "Libretas presilladas",
    price: 0.80,
    image:NoteBook.src ,
      alt: "Libreta escolar económica en La Habana de 50 hojas rayadas",
    description: "Libretas presilladas de 50 hojas rayadas. Medidas: 21x15cm. Temática variada según las que se encuentren en el taller al momento de su compra. Artículo NO PERSONALIZABLE",
    category: "Libretas escolares no personalizadas",
  },
  {
    id: "len2",
    name: "Libreta grande 50 hojas",
    price: 2.00,
    image: NoteBook2.src,
      alt: "Libreta grande en La Habana de 50 hojas con portada resistente",
    description: "Libretas engargoladas con Wire 2:1 o 3:1 de 50 hojas. Portada y fondo protegidas contra la humedad. Rayadas. Medidas: 27x21cm. ARTÍCULO NO PERSONALIZABLE",
    category: "Libretas escolares no personalizadas",
  },
  // Promocionales
  {
    id: "pr1",
    name: "Pack 50 tarjetas (una cara)",
    price: 2.50,
    image: ServiceCard2.src,
     alt: "Tarjetas de presentación impresas en La Habana pack de 50 unidades",
    description: "Tarjetas impresas sobre cartulina bristol 200 gramos. Cantidad mínima 50 unidades. Dimensiones: 9x5cm",
    category: "Promocionales",
  },
  {
    id: "pr2",
    name: "Pack 50 tarjetas (dos caras)",
    price: 4.00,
    image: ServiceCard.src,
    alt: "Tarjetas de presentación doble cara impresas en La Habana",
    description: "Tarjetas impresas sobre cartulina bristol 200 gramos. Cantidad mínima 50 unidades. Dimensiones: 9x5cm",
    category: "Promocionales",
  },
];

export const testimonials = [
  {
    id: "t1",
    name: "Maria G.",
    text: "La calidad del papel es increíble! Mi agenda personalizada hace que organizar mi ajetreada semana sea mucho más fácil.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Elena R.",
    text: "Ordenar por WhatsApp fue súper rápido y seguro. El diseño de la portada superó mis expectativas.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Sofia L.",
    text: "Me encanta el diseño minimalista de los mini blocs. Son ideales para el día a día.",
    rating: 5,
  },
];
