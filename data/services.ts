import type { Service } from "@/types";

// Servicios que ofrezco: "Qué puedo hacer" en Skills y "Especialidades" en el pie (borrador)
export const services: Service[] = [
  {
    title: "Apps web completas",
    description: "Pantallas, servidor y base de datos trabajando juntos, de principio a fin.",
    icon: "monitor",
  },
  {
    title: "APIs con Java y Spring Boot",
    description: "Servicios REST con login seguro (JWT) conectados a PostgreSQL.",
    icon: "server",
  },
  {
    title: "Integración de IA",
    description: "Conectar asistentes de IA a una app, como el que tiene Flux IA.",
    icon: "sparkle",
  },
  {
    title: "Landing pages",
    description: "Páginas rápidas, que se ven bien en celular y en computador.",
    icon: "code",
  },
];
