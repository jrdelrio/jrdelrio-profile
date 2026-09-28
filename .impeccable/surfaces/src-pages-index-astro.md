---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/proyectos.astro","src/pages/servicios.astro","src/pages/blog.astro"]
---

# Portafolio: rediseño visual v2 (ZenGrid)

Scope: todo el sitio (/, /proyectos, /servicios, /blog). Modo: Persuade (reclutadores y dueños de negocio por igual).
Job: que un visitante entienda en segundos quién es Raimundo, vea trabajo real con su stack y llegue a cotizar o escribir.
Proof: 9 proyectos reales con capturas, stack, historia España→Santiago→Chilisites, blog de Medium. Sin testimonios, precios ni métricas.
Pinned por el usuario: DESIGN.md = ZenGrid (Stone/Sage/Warm White; Raleway + DM Sans + Fira Code; plano, sin sombras, radios 4px, imágenes sin adorno). Reemplaza por completo el sistema esmeralda/dorado anterior.
Decisiones del usuario sobre ZenGrid: (1) texto y títulos en #57534E, secundario #78716C, Sage solo para bordes y detalles (Sage como texto falla contraste); (2) nombre más grande solo en el hero (Raleway light hasta ~72px), resto de la escala tal cual; (3) DESIGN.md del usuario no se toca al terminar; solo se actualiza .impeccable/design.json.
Sin generación de imágenes: build code-led.

## Direction contract

THESIS: un portafolio silencioso donde una grilla exacta y la tipografía ligera hacen todo el trabajo y el trabajo real (proyectos y stack) ocupa el centro. Rechaza el arreglo por defecto de portafolio dev (oscuro, acento neón, monoespaciada decorativa, tarjetas con ícono) y también el lujo editorial anterior.
OWN-WORLD: Warm White #FAF9F6 de fondo, blanco #FFFFFF para tarjetas, hundido #F5F4F1 para bandas e inputs; Stone #57534E para texto y títulos, #78716C para secundario y botón primario, Sage #A8A29E solo bordes. Sin color de acento; verde/ámbar/rojo solo para estados funcionales. Raleway light en titulares, DM Sans en el resto, Fira Code solo para nombres de tecnologías. Todo plano: bordes de 1px y cambios de fondo, cero sombras, radios de 4px (6px en el modal del chat), imágenes con esquinas rectas y sin borde.
STORY: el visitante entiende que Raimundo diseña y construye webs completas, ve nueve sitios reales con lo que se hizo en cada uno, lee de dónde viene y escribe o cotiza sin fricción.
FIRST VIEWPORT: navbar plana con borde inferior de 1px. Sobre la grilla de 12 columnas, nombre "Raimundo del Río" en Raleway light grande, alineado a la izquierda (segunda palabra en #78716C), debajo el rol en DM Sans, una línea de propuesta, botón primario Stone grande "Ver proyectos" y secundario con borde "Hablemos", y al pie una línea con el stack en Fira Code y el estado de disponibilidad con punto verde.
FORM: página de una sola columna sobre grilla de 12 columnas con ritmo warm / hundido; espaciado vertical 96-120px entre secciones; seed key: user-pinned (no roll).
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Reglas de ZenGrid que rigen
Grid manda; sin sombras ni brillos; H1/H2 en peso 300; espaciado vertical generoso; peso 400-500 en cuerpo; imágenes sin bordes ni radios ni overlays; nunca centrar bloques grandes de texto; metadatos en el tono más recedido; colores semánticos solo para estados.
