# Guía de Despliegue en Vercel - Angela Aventura Tours

## 📋 Pre-requisitos

Antes de desplegar, asegúrate de tener:

- ✅ Cuenta en [Resend](https://resend.com) (gratis)
- ✅ API Key de Resend
- ✅ Cuenta en [Vercel](https://vercel.com) (gratis)
- ✅ Repositorio Git del proyecto

## 🔑 Paso 1: Configurar Resend

### 1.1 Crear cuenta en Resend

1. Ve a https://resend.com
2. Crea una cuenta gratuita
3. Verifica tu email

### 1.2 Obtener API Key

1. En el dashboard de Resend, ve a **API Keys**
2. Crea una nueva API Key
3. Copia la key (empieza con `re_`)
4. **Guárdala en un lugar seguro** (solo se muestra una vez)

### 1.3 Configurar el remitente

Para desarrollo/pruebas, puedes usar:
```
from: 'Angela Aventura <onboarding@resend.dev>'
```

Para producción (recomendado):
1. Verifica tu dominio en Resend
2. Usa tu dominio verificado: `contacto@tudominio.com`

## 🚀 Paso 2: Desplegar en Vercel

### 2.1 Conectar repositorio

1. Ve a https://vercel.com
2. Click en **"Add New Project"**
3. Importa tu repositorio de GitHub/GitLab/Bitbucket
4. Selecciona el repositorio `angelaventuratours`

### 2.2 Configurar el proyecto

Vercel detectará automáticamente que es un proyecto Astro. Verifica:

- **Framework Preset**: Astro
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 2.3 Configurar Variables de Entorno

**IMPORTANTE**: Antes de hacer deploy, configura estas variables:

1. En la página de configuración del proyecto, ve a **"Environment Variables"**
2. Agrega las siguientes variables:

| Variable | Valor | Ejemplo |
|----------|-------|---------|
| `RESEND_API_KEY` | Tu API key de Resend | `re_123abc...` |
| `CONTACT_EMAIL_FROM` | Email del remitente | `Angela Aventura <onboarding@resend.dev>` |

**Formato del CONTACT_EMAIL_FROM**:
```
Nombre <email@dominio.com>
```

Ejemplos:
- `Angela Aventura <onboarding@resend.dev>` (para pruebas)
- `Angela Aventura Tours <contacto@tudominio.com>` (producción)

### 2.4 Desplegar

1. Click en **"Deploy"**
2. Espera a que termine el build (2-3 minutos)
3. ¡Listo! Tu sitio está en línea

## 🧪 Paso 3: Probar el Formulario

### 3.1 Prueba en producción

1. Ve a tu URL de Vercel: `https://tu-proyecto.vercel.app/contactanos`
2. Llena el formulario con datos de prueba
3. Click en **"Enviar Mensaje"**
4. Deberías ver: **"¡Mensaje enviado exitosamente!"**

### 3.2 Verificar recepción de correos

Los correos se enviarán a:
- ✉️ `angelaventurachanchamayo@gmail.com`
- ✉️ El email que el usuario ingresó en el formulario

Revisa ambas bandejas de entrada (incluyendo spam).

## 🔍 Troubleshooting

### Problema: "Configuración incompleta. Faltan variables de entorno"

**Solución**:
1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Verifica que `RESEND_API_KEY` y `CONTACT_EMAIL_FROM` estén configuradas
4. Redeploy el proyecto: Deployments → ... → Redeploy

### Problema: "Error al enviar correo: Invalid API key"

**Solución**:
1. Verifica que tu API key sea correcta
2. Asegúrate de copiar la key completa (empieza con `re_`)
3. Actualiza la variable en Vercel
4. Redeploy

### Problema: "Error al enviar correo: Invalid from address"

**Solución**:
1. Si usas un dominio personalizado, verifica que esté verificado en Resend
2. Para pruebas, usa: `onboarding@resend.dev`
3. El formato debe ser: `Nombre <email@dominio.com>`

### Problema: No llegan los correos

**Solución**:
1. Revisa la carpeta de spam
2. Verifica los logs en Vercel:
   - Ve a tu proyecto → Deployments → Click en el deployment → Functions
   - Busca logs con 📧, ✅ o ❌
3. Verifica en el dashboard de Resend que los correos se enviaron

## 📊 Ver Logs en Vercel

1. Ve a tu proyecto en Vercel
2. Click en **"Deployments"**
3. Click en el deployment activo
4. Ve a **"Functions"**
5. Busca la función del formulario
6. Verás logs como:
   ```
   📧 Iniciando envío de correo...
   📝 Datos recibidos: { name: "...", email: "..." }
   📬 Destinatarios: [...]
   ✅ Correo enviado exitosamente!
   📨 ID del correo: abc123...
   ```

## 🔄 Actualizar el Sitio

Cada vez que hagas cambios:

1. Haz commit y push a tu repositorio
2. Vercel automáticamente detectará los cambios
3. Se desplegará la nueva versión automáticamente

## 📝 Comandos Útiles

### Desplegar manualmente desde la terminal

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Desplegar a producción
vercel --prod
```

### Probar localmente

```bash
# Crear archivo .env en la raíz del proyecto
echo "RESEND_API_KEY=re_tu_api_key" > .env
echo "CONTACT_EMAIL_FROM=Angela Aventura <onboarding@resend.dev>" >> .env

# Iniciar servidor de desarrollo
npm run dev

# Visitar http://localhost:4321/contactanos
```

## ✅ Checklist de Despliegue

- [ ] Cuenta en Resend creada
- [ ] API Key de Resend obtenida
- [ ] Cuenta en Vercel creada
- [ ] Repositorio conectado a Vercel
- [ ] Variables de entorno configuradas en Vercel
- [ ] Primer deploy exitoso
- [ ] Formulario probado en producción
- [ ] Correos recibidos correctamente

## 🆘 Soporte

Si tienes problemas:

1. Revisa los logs en Vercel
2. Verifica el dashboard de Resend
3. Consulta la documentación:
   - [Astro Docs](https://docs.astro.build)
   - [Resend Docs](https://resend.com/docs)
   - [Vercel Docs](https://vercel.com/docs)
