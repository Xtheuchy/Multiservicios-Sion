# MULTISERVICIOS SION

Landing comercial responsive, prototipo demostrativo no oficial para una tienda de Sicuani. React + Vite + TypeScript + Tailwind CSS + Lucide React. Funciona enteramente en el navegador, sin backend ni claves.

## Ejecutar

Se recomienda Node.js 22.18 o superior (Vite requiere una versión moderna de Node).

```sh
npm install
npm run dev
```

En Windows, si PowerShell bloquea `npm.ps1`, usa `npm.cmd` en lugar de `npm`.

```sh
npm run build
npm run preview
npm test
npm run lint
```

`build` comprueba TypeScript y genera `dist/`. Las pruebas verifican subtotales, restauración del carrito y mensajes de WhatsApp. No necesitan dependencias de pruebas adicionales.

## Editar productos y contacto

- Todos los productos están en `src/data/products.ts`: modifica nombre, categoría, descripción, precio numérico, ruta de imagen, etiqueta y `isNew`.
- Los identificadores deben ser únicos y estables: son la referencia que guarda el carrito.
- Las imágenes SVG están en `public/images/`. Sustitúyelas por imágenes autorizadas de los productos reales y actualiza la ruta en los datos. `generate-assets.mjs` permite regenerar las ilustraciones originales del prototipo.
- El logo original se conserva en `public/logo.jpeg`.
- Contacto, WhatsApp, TikTok y ubicación se centralizan en `src/data/site.ts`.
- Los precios son simulados, las imágenes son ilustrativas y no representan inventario confirmado. Antes de publicar como sitio comercial real, confirmar contenido y autorización del propietario.

## Carrito y WhatsApp

El hook `src/hooks/useCart.ts` gestiona cantidades (máximo 99 por producto) y persistencia con la clave `sion-cart-v1` de localStorage. Los datos almacenados se validan al recuperar. Si el almacenamiento no está disponible, la selección funciona durante la visita y muestra un aviso en el carrito.

`src/utils/cart.ts` centraliza moneda, subtotales y mensajes. El botón de solicitud abre `https://wa.me/51928029815?text=` con un mensaje codificado que incluye productos, cantidades y subtotal referencial. La selección no se borra al consultar y no se considera una compra confirmada.

## Desplegar gratuitamente en Vercel

1. Sube el proyecto a un repositorio Git e impórtalo en Vercel.
2. Selecciona el preset **Vite**.
3. Instalación: `npm install`. Compilación: `npm run build`. Directorio de salida: `dist`.
4. Publica. No se necesitan variables de entorno, base de datos ni servicios de pago.

Es un sitio estático de una sola página con enlaces internos; no requiere reglas de servidor para rutas adicionales. Las fuentes del sistema y las ilustraciones locales permiten mostrar la página sin servicios externos; solo los enlaces de contacto abren WhatsApp, Maps y TikTok.
