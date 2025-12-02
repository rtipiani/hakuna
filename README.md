# Angela Aventura Tours

Sitio web oficial de Angela Aventura Tours - Agencia de turismo especializada en paquetes turísticos a Oxapampa, Chanchamayo y la Selva Central del Perú.

## 🚀 Tecnologías

- **Astro 5** - Framework web moderno
- **React 19** - Componentes interactivos
- **Tailwind CSS 4** - Estilos modernos
- **TypeScript** - Tipado estático
- **Resend** - Servicio de envío de correos

## 📋 Requisitos Previos

- Node.js 18 o superior
- npm o pnpm
- Cuenta en [Resend](https://resend.com) para el envío de correos

## ⚙️ Configuración

1. **Clonar el repositorio**
   ```sh
   git clone <repository-url>
   cd angelaventuratours
   ```

2. **Instalar dependencias**
   ```sh
   npm install
   ```

3. **Configurar variables de entorno**
   
   Crea un archivo `.env` en la raíz del proyecto basándote en `.env.example`:
   ```env
   RESEND_API_KEY=tu_api_key_de_resend
   CONTACT_EMAIL_FROM=contacto@tudominio.com
   ```

   > **Nota:** El campo `CONTACT_EMAIL_FROM` debe ser un dominio verificado en Resend.

## 📧 Formulario de Contacto

El formulario de contacto está configurado para enviar correos automáticamente a:
- **rtipiani@gmail.com** (administrador)
- **Correo del usuario** que llenó el formulario (copia de confirmación)

## 🧞 Comandos

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia servidor de desarrollo en `localhost:4321`|
| `npm run build`           | Construye el sitio para producción en `./dist/`  |
| `npm run preview`         | Previsualiza la build localmente                 |
| `npm run lint`            | Ejecuta el linter                                |
| `npm run format`          | Formatea el código con Prettier                  |
| `npm run astro check`     | Verifica errores de TypeScript                   |

## 🚢 Despliegue en Vercel

Este proyecto está optimizado para desplegarse en Vercel:

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno en el dashboard de Vercel:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL_FROM`
3. Despliega automáticamente con cada push a la rama principal

## 📁 Estructura del Proyecto

```text
/
├── public/              # Archivos estáticos
├── src/
│   ├── actions/        # Server actions (API)
│   ├── assets/         # Imágenes y recursos
│   ├── components/     # Componentes React y Astro
│   ├── layouts/        # Layouts de páginas
│   └── pages/          # Páginas del sitio
├── .env.example        # Ejemplo de variables de entorno
└── package.json
```

## 🎨 Características

- ✅ Diseño responsive y moderno
- ✅ Formulario de contacto funcional con Resend
- ✅ Navegación con menú desplegable
- ✅ Optimización de imágenes con Astro
- ✅ SEO optimizado
- ✅ TypeScript para mayor seguridad

## 📞 Contacto

Para más información, visita [angelaventuratours.com](https://angelaventuratours.com) o contacta a rtipiani@gmail.com
