# Bonus Playpark — Plantilla web

Sitio multi-página para la franquicia **Bonus Playpark**, inspirado en la estructura de [Full Suerte](https://fullsuerte.com.ar/).

## Inicio rápido

```bash
npm install
npm run dev
```

Abrí [http://localhost:4321](http://localhost:4321) en el navegador.

## Comandos

| Comando | Acción |
|---------|--------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Preview del build |

## Estructura

```
src/
├── components/     # Header, Footer, formularios, cards
├── data/           # Contenido editable (JSON)
├── layouts/        # BaseLayout
├── pages/          # 7 páginas del sitio
└── styles/         # Tailwind + tokens de marca
public/
└── logo.png        # Logo Bonus Playpark
```

## Personalizar contenido

Todo el contenido reemplazable está en `src/data/`:

| Archivo | Qué editar |
|---------|------------|
| `site.json` | Nombre, contacto, redes, menú, horarios, Formspree |
| `sucursales.json` | Sucursales (agregar una = nuevo objeto en el array) |
| `precios.json` | Tarjetas, tabla de créditos |
| `galeria.json` | Fotos de la galería |
| `sorteos.json` | Sorteos activos |

### Agregar una sucursal

Editá `src/data/sucursales.json` y agregá un objeto:

```json
{
  "id": "nueva-sucursal",
  "nombre": "Sucursal Nueva",
  "direccion": "Calle 123, Ciudad",
  "descripcion": "Descripción breve del local.",
  "horarios": "Lun a Dom 10:00 - 22:00",
  "mapUrl": "https://maps.google.com/?q=...",
  "embedUrl": "https://www.google.com/maps/embed?pb=..."
}
```

La página de Ubicación y el footer se actualizan solos.

### Formularios

Por defecto, los formularios abren **WhatsApp** con los datos completados.

Para usar **Formspree**, configurá en `site.json`:

```json
{
  "formspreeContact": "https://formspree.io/f/xxxxx",
  "formspreeFranchise": "https://formspree.io/f/yyyyy"
}
```

### Logo y colores

- Logo: reemplazá `public/logo.png`
- Colores de marca: `src/styles/global.css` (variables `--color-*`)

## Páginas

- `/` — Home
- `/galeria` — Galería de fotos
- `/ubicacion` — Sucursales y mapas
- `/precios` — Tarifas y paquetes
- `/franquicias` — Oferta de franquicia + formulario
- `/sorteos` — Sorteos activos
- `/contacto` — Formulario de contacto

## Deploy

```bash
npm run build
```

Subí el contenido de `dist/` a Vercel, Netlify o cualquier hosting estático.

## Deploy en GitHub Pages (configurado)

El sitio se publica automáticamente en cada push a `main`:

**URL en vivo:** https://rothezee.github.io/bonus-playpark/

Repositorio: https://github.com/Rothezee/bonus-playpark
