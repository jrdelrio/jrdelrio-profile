---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/proyectos.astro","src/pages/servicios.astro","src/pages/blog.astro"]
---

# Portafolio: rediseño visual v3 (OSS Terminal)

Scope: todo el sitio (/, /proyectos, /servicios, /blog). Modo: Persuade (reclutadores y dueños de negocio por igual).
Job: que un visitante entienda en segundos quién es Raimundo, vea trabajo real con su stack y llegue a cotizar o escribir.
Proof: 9 proyectos reales con capturas, stack, historia España→Santiago→Chilisites, blog de Medium. Sin testimonios, precios ni métricas.
Pinned: DESIGN.md = OSS Terminal (papel hueso #F6F1E7, superficie #FBF6EA, tinta #161614, secundario #6A6860, acento único morado #8957E5; JetBrains Mono display/h1/label, IBM Plex Sans cuerpo; radios 4/6/10; plano, sin degradados). Reemplaza ZenGrid por completo.
Decisiones del usuario: (1) un solo botón morado relleno por sección; el resto en tinta con borde; links y foco usan morado como subrayado/anillo; botón del chat en tinta; (2) metáfora README contenida: stack como bloque de código y características de proyectos/servicios como líneas de diff "+" en verde #116329 (el "diff green" del sistema), sin simular terminal, sin prompt ni cursor ni badges; (3) display a 3.25rem, reducido en móvil; (4) mantener las animaciones existentes (entrada escalonada del hero, pulso del chat, transiciones de color).
DESIGN.md del usuario no se toca; solo se actualiza .impeccable/design.json.
Sin generación de imágenes: build code-led.

## Direction contract

THESIS: el portafolio se lee como el README de un buen proyecto open source: directo, escaneable, con el stack y los cambios a la vista. Rechaza el portafolio dev oscuro con neón y también la terminal disfrazada.
OWN-WORLD: papel hueso #F6F1E7 de página, superficie #FBF6EA para tarjetas y bandas, tinta #161614 para texto y títulos, #6A6860 para metadatos y bordes finos, morado como único acento de interacción (relleno #7B4AD9 para contraste AA con texto claro, #8957E5 en foco y subrayados), verde diff #116329 solo en líneas "+" y el punto de disponibilidad. JetBrains Mono para títulos, etiquetas y tecnologías; IBM Plex Sans para leer. Plano: bordes de 1px, radios 6px en botones e inputs, 10px en tarjetas, 4px en chips; sin sombras ni degradados.
STORY: el visitante entiende que Raimundo diseña y construye webs completas, ve nueve sitios reales con lo que se hizo en cada uno como líneas de diff, lee de dónde viene y escribe o cotiza sin fricción.
FIRST VIEWPORT: navbar plana en papel con borde inferior; nombre en JetBrains Mono bold 3.25rem alineado a la izquierda ("del Río" en #6A6860), rol en Plex, línea de propuesta, un botón morado "Ver proyectos" y uno con borde "Hablemos"; al pie una regla con el stack en mono y la disponibilidad con punto verde.
FORM: documento de una columna con bandas papel/superficie, secciones con títulos en mono como encabezados de README; seed key: user-pinned (no roll).
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
