import type { ContactContent } from "@/types";

// Textos de Contacto (borrador, revisados con la skill ux-copy en la fase de calidad)
export const contactContent: ContactContent = {
  title: "Contacto",
  lead: "¿Tienes un proyecto, una práctica o una pregunta? Escríbeme y te respondo.",
  linksTitle: "Encuéntrame en",
  form: {
    title: "Escríbeme",
    nameLabel: "Tu nombre",
    emailLabel: "Tu correo",
    messageLabel: "Tu mensaje",
    submit: "Enviar mensaje",
    sending: "Enviando…",
    errors: {
      nameRequired: "Escribe tu nombre.",
      emailRequired: "Escribe tu correo para poder responderte.",
      emailInvalid: "Revisa el correo: debe verse como nombre@correo.com.",
      messageShort: "Escribe un mensaje de al menos 10 caracteres.",
    },
    success: "¡Mensaje enviado! Te respondo pronto.",
    sendError: "No se pudo enviar el mensaje. Inténtalo otra vez o escríbeme por LinkedIn.",
    notConnected: "Este formulario todavía no envía mensajes. Mientras tanto, escríbeme por LinkedIn.",
  },
  // TODO: crear un formulario gratis en https://formspree.io y pegar aquí su URL
  // (por ejemplo "https://formspree.io/f/abcdwxyz"). Con null, el formulario avisa que no está conectado.
  formEndpoint: null,
};
