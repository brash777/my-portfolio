# Portafolio de Johan Mosquera

Mi portafolio personal y la vitrina de las apps que estoy construyendo. Es una página de una sola sección larga (landing) con mucho movimiento al hacer scroll, colores primarios y estilo "sticker". El fondo es un **camaleón**: cada sección y cada app tiene su propio color, y en la división entre una y otra los colores se mezclan mientras bajas.

**Stack:** Next.js 16 (App Router) · TypeScript en modo estricto · Tailwind CSS 4 · Vercel. Sin librerías de animación: todo el movimiento es CSS + `IntersectionObserver`.

## Cómo correrlo

Necesitas Node.js 20 o superior.

```bash
npm install      # solo la primera vez
npm run dev      # abre http://localhost:3000
```

Otros comandos:

| Comando | Para qué |
|---|---|
| `npm run lint` | Revisa el código con ESLint |
| `npm run build` | Arma la versión de producción (si falla, no se puede publicar) |
| `npm start` | Corre la versión de producción en el computador |

## Pendientes antes de publicar

- [ ] **CV:** sube el Word a Google Drive y pega la URL en `cvUrl` (`data/site.ts`). Mientras sea `null`, los botones dicen "CV en camino".
- [ ] **Testimonios:** cambia los ejemplos de `data/testimonials.ts` por testimonios reales (con permiso) y pon `isExample: false`.
- [ ] **Cursos:** elige cuáles se quedan en `data/experience.ts`. Cuando termines uno, cambia `status` a `"completed"` y agrega `period` con las fechas reales.
- [ ] **Correo:** si quieres mostrar uno, agrégalo en `emails` (`data/site.ts`).
- [ ] **Estado de relación:** escríbelo en `relationship` (`data/site.ts`). Con `null` no se muestra.
- [ ] **Formulario:** conéctalo con Formspree (ver abajo).
- [ ] **Textos:** todos los textos en `data/` son borradores. Cámbialos con tus palabras.

## Dónde está cada cosa

```
app/
  layout.tsx            fuentes, idioma (es) y metadatos
  page.tsx              orden de las secciones (mover una = mover su línea)
  globals.css           colores, sombras, tamaños de letra y animaciones (tokens)
  projects/[slug]/      página de detalle de cada proyecto
  opengraph-image.tsx   imagen que se ve al compartir el link
  icon.svg              ícono de la pestaña
components/
  layout/               Navbar, menú móvil y Footer
  sections/             una sección por archivo (Hero, About, Projects…)
  ui/                   piezas reutilizables (FlipCard, TechBadge, Reveal…)
data/                   TODOS los textos e información (aquí se edita el contenido)
hooks/                  useScrollSpy (sección activa del menú) y useInView (animaciones)
lib/                    funciones pequeñas de ayuda
types/                  los tipos de TypeScript de todos los datos
public/images/          imágenes optimizadas e íconos
assets/fonts/           letra para la imagen de Open Graph
```

**Regla:** ningún componente tiene texto de contenido escrito a mano; todo sale de `data/`. Para cambiar un texto, se busca en `data/`.

## Cómo editar el contenido

| Quiero cambiar… | Archivo |
|---|---|
| Nombre, ciudad, enlaces, CV, correo, menú | `data/site.ts` |
| Saludo, intro, panel de código, CV resumido | `data/hero.ts` |
| Servicios | `data/services.ts` |
| Acerca de mí | `data/about.ts` y `data/hobbies.ts` |
| Proyectos | `data/projects.ts` |
| Testimonios | `data/testimonials.ts` |
| Línea de tiempo | `data/experience.ts` |
| Contacto y formulario | `data/contact.ts` |
| Skills | `data/skills.ts` (y los íconos en `data/tech.ts`) |
| Colores del fondo de cada sección | `data/palettes.ts` |
| Pie de página | `data/footer.ts` |

## Cómo agregar una app nueva

1. Guarda sus capturas en `public/images/projects/<nombre-de-la-app>/` (ver "Imágenes").
2. En `data/projects.ts`, importa las imágenes arriba y agrega un objeto a la lista `projects` con: `slug`, `name`, `tagline`, `description`, `highlights`, `category` (`"class"`, `"work"` o `"freelance"`), `status` (`"live"`, `"completed"` o `"in-progress"`), `featured`, `stack`, `role`, `year`, `accent`, `cover`, `gallery` y `repoUrl`.
3. Listo: la tarjeta aparece en la cuadrícula y su página se crea sola en `/projects/<slug>`. Con `featured: true` también sale grande arriba.
4. Opcional: dale los colores de su marca al fondo con `palette` (una base oscura y tres brillos). Si no le pones, usa la paleta de su `accent`. Ejemplo (el de Flux IA):

```ts
palette: {
  base: "#0A0614",
  glows: ["rgb(109 43 239 / 0.55)", "rgb(178 59 255 / 0.35)", "rgb(42 26 168 / 0.45)"],
},
```

El texto encima es blanco, así que la base debe ser oscura y los brillos con transparencia. Revisa el contraste en [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/) (mínimo 4.5:1 contra blanco).

Si usa una tecnología nueva, agrega su ícono SVG en `public/images/icons/` y regístrala en `data/tech.ts`.

## Imágenes

- **Nombres:** en inglés, minúsculas y con guiones: `project-flux-ia-cover.webp`, `project-flux-ia-01.webp`.
- **Formato:** WebP.
- **Peso máximo:** foto del hero 150 KB (800 px de ancho), capturas de apps 120 KB (1200 px), avatar 40 KB.
- **Cómo comprimir:** entra a [squoosh.app](https://squoosh.app), arrastra la imagen, elige **WebP** a la derecha, baja el ancho en "Resize" y la calidad hasta que pese menos del límite. También sirve [tinypng.com](https://tinypng.com).
- **Texto alternativo:** cada imagen lleva un `alt` en español que describe lo que se ve (está junto a la imagen en `data/`).
- Los originales viven fuera del repo, en `Portafoleo/source-imagenes/`, para no subir archivos pesados.

## Cómo subir el CV a Google Drive

1. Haz tu CV de una página en Word.
2. Súbelo a Google Drive.
3. Clic derecho → **Compartir** → en "Acceso general" elige **"Cualquier persona con el enlace"** → rol **Lector**.
4. **Copiar enlace** y pégalo en `cvUrl` en `data/site.ts`:

```ts
cvUrl: "https://drive.google.com/file/d/…/view?usp=sharing",
```

## Cómo conectar el formulario de contacto (Formspree)

El formulario ya valida los datos, pero todavía no envía nada: si alguien lo usa, le avisa que escriba por LinkedIn (no finge que se envió).

1. Crea una cuenta gratis en [formspree.io](https://formspree.io) y un formulario nuevo.
2. Copia su URL (algo como `https://formspree.io/f/abcdwxyz`).
3. Pégala en `formEndpoint` en `data/contact.ts`.

No hay claves secretas en el navegador: Formspree recibe el mensaje y te lo manda al correo. **Ojo con el spam:** el formulario tiene un campo trampa oculto para bots, y Formspree también filtra spam; si llega mucho, activa su reCAPTCHA.

## Cómo publicar en Vercel

1. Entra a [vercel.com](https://vercel.com) con tu cuenta de GitHub.
2. **Add New → Project** → importa el repo `brash777/my-portfolio`.
3. No cambies nada de la configuración → **Deploy**.
4. Cada `git push` a `main` vuelve a publicar solo. La URL pública queda tipo `https://my-portfolio-….vercel.app` (con HTTPS).

## Guía corta: cómo está hecho (para explicarlo)

**La idea visual: "la tapa del portátil".** Los developers llenan la tapa de su portátil de stickers. Aquí todo lo que se puede tocar es un sticker: borde blanco, contorno negro y sombra dura (las utilidades `sticker` y `sticker-sm` en `app/globals.css`). Los textos van sin caja.

**Colores y letras (tokens).** En `app/globals.css` está el bloque `@theme` de Tailwind con los únicos colores que existen: azul `#1A43D9`, rojo `#D7261E`, amarillo `#FFD100`, violeta `#6A2EE8` (el de Flux IA), negro y blanco. Los colores que trae Tailwind están borrados (`--color-*: initial`), así ninguna sección puede inventarse un color. Los únicos otros colores son los del fondo camaleón, en `data/palettes.ts`. Todos los textos tienen contraste de 4.5:1 o más. Las letras son **Hubot Sans** (títulos, en versión angosta) y **Mona Sans** (textos), las dos de GitHub; **JetBrains Mono** solo va en el panel de código. Se cargan con `next/font`, que las descarga al hacer el build y no depende de Google al abrir la página.

**Una página, muchas secciones.** `app/page.tsx` pone el menú, las 7 secciones en orden y el footer. Cada sección tiene un `id` (`hero`, `about`…) al que apuntan los enlaces del menú.

**El fondo camaleón.** Cada sección, cada app destacada y el footer pintan su propio fondo con `ChameleonBackground`: una base oscura y tres brillos de color, como el fondo "aurora" de Flux IA. Así cada parte se ve como una página de otro color. La mezcla está en la división: el fondo de cada zona empieza un poco más arriba que ella (`--blend`) y aparece de a poco con `mask-image` (de transparente a sólido) encima del final de la zona anterior. Mientras bajas, un color se va convirtiendo en el otro. No usa JavaScript: es solo CSS, y el fondo va con `z-index: -1` para quedar detrás del texto. En Proyectos las tarjetas de las apps son *sticky* y un elemento sticky arrastra lo que tiene adentro, así que sus fondos van en una capa aparte alineada fila por fila con las tarjetas (`subgrid`). En la página de detalle de una app, la página toma los colores de esa app. Como el texto encima siempre es blanco, cada paleta se probó para dar 4.5:1 o más incluso donde se juntan los tres brillos, y la mezcla de dos paletas nunca queda más clara que la más clara de las dos.

**El menú siempre visible.** `Navbar` está fijo arriba. El hook `useScrollSpy` usa `IntersectionObserver`: el navegador avisa qué sección cruza la mitad de la pantalla y ese enlace se pone negro (`aria-current`). En celular, `MobileMenu` usa el elemento `<dialog>` del navegador, que ya cierra con Esc y deja el foco del teclado dentro del menú.

**La tarjeta que se voltea (`FlipCard`).** Son dos caras en la misma celda de una grilla; la de atrás está girada 180°, y al voltear se gira todo con `rotateY(180deg)` (CSS 3D, `backface-visibility: hidden`). Funciona con el mouse (al pasar), con el dedo y con el teclado (la esquina doblada es un botón). Mientras se ve la foto, el reverso queda `inert`, así el teclado nunca cae en algo que no se ve.

**El movimiento.** No hay librerías de animación:
- `Reveal` + `useInView`: cuando un elemento entra en pantalla se le pone `data-visible` y CSS hace la transición (subir o "pegarse" con rebote).
- La línea de tiempo se dibuja y los stickers del hero hacen parallax con **animaciones ligadas al scroll** de CSS (`animation-timeline: view()` y `scroll()`); si el navegador no las soporta, se ven quietos y completos.
- `TiltCard` inclina tarjetas siguiendo el mouse.
- Los brillos del fondo flotan despacio (solo `transform`) y se quedan quietos con "reducir movimiento".
- Solo se animan `transform` y `opacity` (no hacen recalcular el diseño de la página), y con **"reducir movimiento"** activado en el sistema todo se muestra quieto.

**Proyectos y páginas de detalle.** Los datos están en `data/projects.ts`. La cuadrícula filtra por tipo con un estado de React. `app/projects/[slug]/page.tsx` usa `generateStaticParams` para crear una página estática por proyecto al hacer el build.

**El año automático.** `CurrentYear` calcula `new Date().getFullYear()` en el navegador de quien visita (con `useSyncExternalStore`), así nunca queda viejo aunque la página se haya generado antes.

**Calidad.** Lighthouse (14-nov-2026, en local): computador 100/100/100/100; celular 91 de rendimiento y 100 en accesibilidad, buenas prácticas y SEO. Se revisó con teclado (foco visible en todo, con 3:1 o más contra el fondo), lector de pantalla (títulos en orden, textos alternativos) y a 320 px de ancho sin scroll horizontal. Ninguna parte usa barras de progreso ni porcentajes.

## Créditos y licencias

- Íconos de tecnologías: [Simple Icons](https://simpleicons.org) (CC0) y [Devicon](https://devicon.dev) (MIT) para Java, LinkedIn y VS Code. Las marcas pertenecen a sus dueños.
- Fuentes: Hubot Sans, Mona Sans y JetBrains Mono (SIL Open Font License).
- Íconos genéricos (control, lápiz, balón, guante…): dibujados para este proyecto en `components/ui/Icon.tsx`.
- Fotos y capturas: propias.
