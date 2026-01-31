# Landing Page - David | Músico & Instructor de Bienestar

Landing page profesional diseñada para un músico e instructor de Pilates y Yoga.

## Características

- **Diseño Moderno y Profesional**: Interfaz limpia y atractiva
- **Responsive**: Se adapta perfectamente a móviles, tablets y desktop
- **Animaciones Suaves**: Transiciones y efectos visuales elegantes
- **3 Secciones de Servicios**: Música, Pilates y Yoga
- **Formulario de Contacto**: Funcional y validado
- **Integración con WhatsApp**: Botón directo de contacto
- **Testimonios**: Sección de pruebas sociales
- **Navegación Suave**: Scroll animado entre secciones
- **Estadísticas Animadas**: Contadores con números incrementales

## Estructura del Proyecto

```
landing-david/
│
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidad JavaScript
└── README.md           # Este archivo
```

## Personalización

### 1. Información Personal

Edita los siguientes datos en `index.html`:

- **Nombre**: Busca "David" y reemplázalo con el nombre real
- **Email**: `contacto@david.com` (línea 360)
- **Teléfono**: `+1 234 567 890` (línea 364)
- **Ubicación**: `Ciudad, País` (línea 372)
- **WhatsApp**: `https://wa.me/1234567890` (línea 323)

### 2. Agregar Tu Foto

1. Reemplaza el `div` con clase `placeholder-image` (línea 177) por:

```html
<img src="ruta/a/tu/foto.jpg" alt="David - Músico e Instructor">
```

2. O agrega una imagen de fondo al hero section (línea 99):

```css
background: url('ruta/a/tu/imagen.jpg') center/cover no-repeat;
```

### 3. Redes Sociales

Edita los enlaces en la sección de contacto (línea 395):

```html
<a href="https://instagram.com/tu-usuario" class="social-icon"><i class="fab fa-instagram"></i></a>
<a href="https://facebook.com/tu-pagina" class="social-icon"><i class="fab fa-facebook-f"></i></a>
<a href="https://youtube.com/tu-canal" class="social-icon"><i class="fab fa-youtube"></i></a>
<a href="https://spotify.com/tu-perfil" class="social-icon"><i class="fab fa-spotify"></i></a>
```

### 4. Colores y Estilos

Para cambiar los colores, edita las variables CSS en `styles.css` (líneas 2-14):

```css
:root {
    --primary-color: #2c3e50;      /* Color primario */
    --secondary-color: #e67e22;    /* Color secundario */
    --accent-color: #27ae60;       /* Color de acento */
    /* ... más variables ... */
}
```

### 5. Testimonios

Edita los testimonios en `index.html` desde la línea 274. Puedes agregar más copiando la estructura de `.testimonial-card`.

### 6. Certificaciones

Modifica las certificaciones en la sección "Sobre Mí" (línea 233):

```html
<div class="cert-item">
    <i class="fas fa-certificate"></i>
    <span>Tu Certificación</span>
</div>
```

## Configuración del Formulario

El formulario actualmente solo muestra un mensaje de éxito. Para recibir los mensajes, tienes estas opciones:

### Opción 1: Formspree (Más Simple)

1. Ve a [formspree.io](https://formspree.io) y crea una cuenta
2. Crea un nuevo formulario
3. Reemplaza la etiqueta `<form>` en `index.html` (línea 342) con:

```html
<form action="https://formspree.io/f/tu-id-aqui" method="POST">
```

### Opción 2: Email Directo

Reemplaza el form action:

```html
<form action="mailto:contacto@david.com" method="post" enctype="text/plain">
```

### Opción 3: Backend Personalizado

Implementa un endpoint en tu servidor y modifica el evento `submit` en `script.js` (línea 184).

## Cómo Usar

### Abrir la Landing Page

Simplemente abre el archivo `index.html` en tu navegador:

```bash
# En macOS
open index.html

# En Windows
start index.html

# En Linux
xdg-open index.html
```

### Servidor Local (Opcional)

Para un mejor desarrollo, usa un servidor local:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (luego de instalar serve: npm i -g serve)
serve .

# Con PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

## Características Técnicas

- **HTML5 Semántico**: Estructura optimizada para SEO
- **CSS Moderno**: Variables CSS, Grid, Flexbox
- **Vanilla JavaScript**: Sin dependencias externas (excepto iconos y fuentes)
- **Optimización**: Carga rápida, código limpio
- **Accesibilidad**: Etiquetas ARIA, navegación por teclado

## Recursos Externos

- **Font Awesome**: Iconos vectoriales
- **Google Fonts**: Tipografías Playfair Display e Inter
- **Unsplash**: Imágenes de ejemplo (puedes reemplazarlas)

## SEO Básico

Edita las meta etiquetas en `index.html` (líneas 5-7):

```html
<meta name="description" content="Tu descripción aquí">
<meta name="keywords" content="músico, pilates, yoga, instructor, bienestar">
<title>Tu Título Personalizado</title>
```

## Hosting Recomendado

Esta landing page es estática y puede ser alojada gratuitamente en:

- **GitHub Pages**: Gratis, fácil de configurar
- **Netlify**: Deploy continuo, dominio gratuito
- **Vercel**: Optimizado para velocidad
- **Cloudflare Pages**: CDN global incluido

## Soporte

Para cambios o personalización avanzada, considera:
- Agregar Google Analytics para tracking
- Integrar calendario de reservas (Calendly)
- Agregar mapa de ubicación (Google Maps)
- Implementar pasarela de pago (Stripe/MercadoPago)

---

**Creado con ❤️ para impulsar tu carrera profesional**
