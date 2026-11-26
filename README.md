
enlace video:https://drive.google.com/file/d/1GSomdR2mDG1f7X5cA6ch-dwR18sUHkoi/view?usp=sharing

# Portafolio de Johan Mosquera

Mi portafolio personal y la vitrina de las apps que estoy construyendo. Es una página de una sola sección larga (landing), con **un solo tono de color**: fondo "noche azul", tarjetas de vidrio y el azul eléctrico como único acento. Cada sección es corta y se explica rápido.

**Stack:** Next.js 16 (App Router) · TypeScript en modo estricto · Tailwind CSS 4 · Vercel. Sin librerías de animación: el movimiento al hacer scroll es CSS + `IntersectionObserver`.

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

## Lo que pide la guía del profe

La guía es [structure-portfolio.vercel.app](https://structure-portfolio.vercel.app). Este es el estado de cada requisito:

| Requisito de la guía | Dónde está | Estado |
|---|---|---|
| Next.js + TypeScript + Tailwind CSS | todo el proyecto | Listo |
| 1. Menú fijo, con logo, anclas, menú hamburguesa y scroll suave | `components/layout/Navbar.tsx` | Listo |
| 2. Hero con nombre, rol, foto, frase, **Descargar CV** y botón a Proyectos | `components/sections/Hero.tsx`, `public/cv.pdf` | Listo |
| 3. Acerca de mí ("Sobre mí"): presentación, foto, tecnologías, ubicación, semestre e intereses | `components/sections/About.tsx`, `data/about.ts` | Listo |
| 4. Proyectos: imagen, descripción, tecnologías, **GitHub** y **demo en vivo** | `components/sections/Projects.tsx`, `data/projects.ts` | Snapia y 7Days tienen video; faltan las demos de Flux IA, FlowStore y Clínica |
| 5. Testimonios (aquí "Referencias"): mínimo 3, con **nombre**, cargo, avatar y texto | `components/sections/Testimonials.tsx`, `data/testimonials.ts` | Listo (cada compañero debe aprobar su texto) |
| 6. Experiencia **académica** y **laboral**, con fechas, de lo más reciente a lo más antiguo | `components/sections/Experience.tsx`, `data/experience.ts` | Listo |
| 7. Contactos: **correo**, LinkedIn, GitHub y formulario con validación y confirmación | `components/sections/Contact.tsx`, `data/contact.ts` | Falta el correo y Formspree |
| Sección adicional antes del pie (Skills con servicios) | `components/sections/Skills.tsx` | Listo |
| 8. Pie con nombre, © año, redes, enlaces, volver arriba y créditos | `components/layout/Footer.tsx` | Listo |
| Se ve bien en celular | todo | Listo (revisado hasta 320 px) |
| Código en GitHub y publicado en Vercel | ver "Cómo publicar en Vercel" | Falta Vercel |

El orden de `app/page.tsx` es el de la guía: Hero, Sobre mí, Proyectos, Referencias (Testimonios), Experiencia, Contactos, Skills (adicional) y pie.

## Pendientes antes de publicar

- [x] **CV:** está en `public/cv.pdf` (armado el 22-nov-2026 solo con datos confirmados: sin teléfono, dirección ni correo). Para cambiarlo, reemplaza ese archivo por tu PDF con el mismo nombre.
- [ ] **Referencias:** las de Camilo Rosero, Santiago Ortega y Samuel Moreno (`data/testimonials.ts`) son un borrador: cada uno debe leer su texto y aprobarlo o cambiarlo antes de entregar.
- [ ] **Demos de los proyectos:** la guía pide un enlace de demo en cada proyecto (`demoUrl` en `data/projects.ts`, y `demoLabel` para el texto del botón). Snapia y 7Days ya enlazan su video; faltan Flux IA, FlowStore y Clínica.
- [ ] **Correo:** la guía lo pide en Contactos. Por ahora no se muestra (decidido el 22-nov-2026); si luego quieres mostrar uno, agrégalo en `emails` (`data/site.ts`).
- [ ] **Estado de relación:** escríbelo en `relationship` (`data/site.ts`). Con `null` no se muestra.
- [ ] **Formulario:** conéctalo con Formspree (ver abajo). Sin eso no sale el mensaje de confirmación al enviar.
- [ ] **Textos:** todos los textos en `data/` son borradores. Cámbialos con tus palabras.

## Dónde está cada cosa

```
app/
  layout.tsx            fuentes, idioma (es) y metadatos
  page.tsx              orden de las secciones (mover una = mover su línea)
  globals.css           colores, sombras, tamaños de letra y animaciones (tokens)
  projects/[slug]/      página de detalle de cada proyecto
  not-found.tsx         página 404 (sale en cualquier dirección que no existe)
  opengraph-image.tsx   imagen que se ve al compartir el link
  icon.svg              ícono de la pestaña
components/
  layout/               Navbar, menú móvil y Footer
  sections/             una sección por archivo (Hero, About, Projects…)
  ui/                   piezas reutilizables (TechBadge, ProjectCover, TimelineItem…)
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
| Nombre, ciudad, semestre, idiomas, enlaces, CV, correo, menú | `data/site.ts` |
| Saludo, intro, panel de código, CV resumido | `data/hero.ts` |
| Servicios ("Qué puedo hacer", en Skills y en el CV resumido) | `data/services.ts` |
| Sobre mí (presentación, datos, idiomas, intereses) | `data/about.ts` |
| Proyectos | `data/projects.ts` |
| Referencias (Testimonios) | `data/testimonials.ts` |
| Línea de tiempo | `data/experience.ts` |
| Contacto y formulario | `data/contact.ts` |
| Skills | `data/skills.ts` (y los íconos en `data/tech.ts`) |
| Pie de página | `data/footer.ts` |
| Página 404 (dirección que no existe) | `data/not-found.ts` |

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

## Cómo cambiar el CV

El botón «Descargar CV» baja `public/cv.pdf` (así lo pide la guía). Para poner otro CV:

1. Exporta tu CV de una página como PDF.
2. Guárdalo en `public/` con el nombre `cv.pdf` (reemplaza el que hay).
3. `git add public/cv.pdf`, commit y `git push`: Vercel lo publica solo.

Al descargarlo se guarda como `CV-Johan-Mosquera.pdf` (`cvFileName` en `data/site.ts`). Si prefieres un enlace de Google Drive, pega la URL en `cvUrl`: el botón la abrirá en otra pestaña en vez de descargar.

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

**La idea visual: "noche azul".** Un solo tono en toda la página, como en los portafolios del curso: fondo azul casi negro, tarjetas de vidrio (transparentes, con un borde fino y un brillo de luz arriba) y un solo color de acento, el azul eléctrico. Lo más llamativo es el nombre grande del inicio; todo lo demás es tranquilo y ordenado. Cada sección tiene un título, una raya azul corta y una frase que la explica rápido (`SectionHeading`).

**Colores y letras (tokens).** En `app/globals.css` está el bloque `@theme` de Tailwind con los únicos colores que existen: fondo `#060A1A`, texto `#EEF2FF`, texto secundario `#A6B1D1`, azul de botones `#2F5BFF` y azul claro `#8AA6FF` para enlaces y detalles. Los colores que trae Tailwind están borrados (`--color-*: initial`), así ninguna sección puede inventarse un color. Contraste: texto 17:1, secundario 9.2:1, azul claro 8.4:1 y texto blanco sobre el botón azul 5.2:1 (la regla pide 4.5:1). La letra es **Mona Sans** (de GitHub) en toda la página; los títulos la usan ancha (`font-stretch: 112%`) y gruesa. Se carga con `next/font`, que la descarga al hacer el build y no depende de Google al abrir la página.

**El vidrio.** La utilidad `glass` de `app/globals.css` hace las tarjetas: un fondo azul muy transparente (deja ver el fondo de la página), borde de 1 px y una sombra suave. `glass-blur` es el vidrio esmerilado (difumina lo de atrás con `backdrop-filter`) y solo va en el menú fijo y en la insignia de la foto, porque difuminar es costoso para el celular.

**El fondo.** Es uno solo para toda la página: un pseudo-elemento fijo (`body::before`) con dos brillos azules (degradados radiales) y una cuadrícula muy tenue, como un plano. Los íconos de tecnologías son SVG negros; la utilidad `icon-light` los vuelve claros con `filter` para que queden en el mismo tono.

**Una página, muchas secciones.** `app/page.tsx` pone el menú, las 7 secciones en orden y el footer. Cada sección tiene un `id` (`hero`, `about`…) al que apuntan los enlaces del menú.

**El menú siempre visible.** `Navbar` está fijo arriba. El hook `useScrollSpy` usa `IntersectionObserver`: el navegador avisa qué sección cruza la mitad de la pantalla y ese enlace se pone blanco con una raya azul debajo (`aria-current`). En celular, `MobileMenu` usa el elemento `<dialog>` del navegador, que ya cierra con Esc y deja el foco del teclado dentro del menú.

**El movimiento al hacer scroll.** Cada bloque que lleva `data-reveal="up"`, `"left"`, `"right"` o `"fade"` entra cuando aparece en pantalla y sale cuando se va; al volver, entra otra vez. `components/ui/ScrollReveal.tsx` (va una sola vez en `app/layout.tsx`) usa un solo `IntersectionObserver`: el navegador avisa qué bloque entra o sale del área visible y el componente le pone `data-state="in"` u `"out"`. El movimiento lo hace CSS en `app/globals.css`: entra en 0.7 s frenando suave al final y sale en 0.45 s, moviéndose 32 px (los mismos valores del portafolio que se tomó de referencia). En listas, cada tarjeta espera un poco más que la anterior (`--reveal-delay`). El inicio no espera al scroll: entra al cargar la página (`animate-rise-in` y `animate-slide-in-right`). Solo se animan `transform` y `opacity`, que no obligan al navegador a recalcular la página. Con **"reducir movimiento"** activado o sin JavaScript, todo se muestra quieto y completo.

**Proyectos y páginas de detalle.** Los datos están en `data/projects.ts`. En la página principal cada proyecto es una tarjeta con el ícono de la app en la cara (`ProjectLogo`), en dos columnas desfasadas; en celular es una sola columna en el mismo orden (las columnas usan `display: contents` y cada tarjeta su `order`). Flux IA, FlowStore (OFFGRID) y Snapia usan su ícono real; 7Days y Clínica no tenían logo, así que se dibujó uno en SVG para el portafolio (`public/images/projects/<slug>/icon.svg`). 7Days es un proyecto en equipo de Santiago Ortega: la tarjeta dice cuál fue mi parte (la documentación), igual que su historial en GitHub. Las láminas del cómic de 7Days no se usan porque su licencia está por confirmar. `app/projects/[slug]/page.tsx` usa `generateStaticParams` para crear una página estática por proyecto al hacer el build.

**El año automático.** `CurrentYear` calcula `new Date().getFullYear()` en el navegador de quien visita (con `useSyncExternalStore`), así nunca queda viejo aunque la página se haya generado antes.

**Calidad.** Lighthouse (23-nov-2026, en local, con las animaciones de scroll): 100 en rendimiento, accesibilidad, buenas prácticas y SEO, en computador y en celular. Se revisó con teclado (foco visible en todo, con 3:1 o más contra el fondo), lector de pantalla (títulos en orden, textos alternativos) y a 320 px de ancho sin scroll horizontal. Ninguna parte usa barras de progreso ni porcentajes.

## Créditos y licencias

- Íconos de tecnologías: [Simple Icons](https://simpleicons.org) (CC0) y [Devicon](https://devicon.dev) (MIT) para Java, LinkedIn y VS Code. Las marcas pertenecen a sus dueños.
- Fuentes: Mona Sans en la página y Hubot Sans en la imagen para compartir (SIL Open Font License).
- Íconos genéricos (servidor, pantalla, maletín, calendario…): dibujados para este proyecto en `components/ui/Icon.tsx`.
- Fotos y capturas: propias.
