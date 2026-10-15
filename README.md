# Práctica de laboratorio · `<tarjeta-producto>`

Programación Integrativa de Componentes Web · Unidad 1: Web Components

| Dato | Completa |
|---|---|
| Emprendimiento | SierrAroma / SnackBar |
| Estudiantes (Apellido Nombre) | Pinos Cordero Rashell |
| NRC | 36643 |
| Fecha | 15 de octubre de 2026 |
| Enlace del repositorio | https://github.com/rashellpinos/Avance-1.git |

## Propuesta del emprendimiento

- Nombre del emprendimiento: SierrAroma / SnackBar
- Problema que resuelve: Ofrece opciones de snacks y bebidas energizantes 100% naturales, orgánicas y saludables de origen andino frente al exceso de productos ultraprocesados en la ciudad.
- Cliente al que se dirige: Estudiantes, profesionales y consumidores en Quito que buscan bebidas y snacks saludables, nutritivos y de origen local.

## Cómo abrir el proyecto

1. Abre la carpeta en Visual Studio Code.
2. Clic derecho sobre `index.html` → **Open with Live Server**. Los módulos no cargan con `file://`.
3. Abre las herramientas del navegador (F12) y deja visible la pestaña **Consola**.

## Registro de los pasos

### Paso 1 · index.html y el módulo

- Etiqueta que registramos: `<tarjeta-producto>`
- ¿Por qué el nombre debe llevar guion?: Porque el estándar de Web Components (Custom Elements) exige al menos un guion (`-`) para que el navegador distinga nuestras etiquetas personalizadas de las etiquetas HTML nativas presentes o futuras.
- Ruta del módulo y cómo lo importa la página: Ruta `./componentes/tarjeta-producto.js`, importada en el `<head>` mediante `<script type="module" src="./componentes/tarjeta-producto.js"></script>`.

### Paso 2 · Plantilla, Shadow DOM y slots

- Slots con nombre que tiene la plantilla: `foto` (`<slot name="foto">`) y `nombre` (`<slot name="nombre">`).
- Texto de respaldo del slot sin nombre: `Sin descripción`
- ¿Qué pasaría si no usáramos `cloneNode(true)`?: Si insertáramos `plantilla.content` directamente sin clonarlo, sus nodos se moverían a la primera tarjeta dejando la plantilla vacía para las siguientes instancias. Y si usáramos `cloneNode(false)`, solo se clonaría el nodo raíz sin ninguno de sus elementos hijos (estilos, slots ni precio).

### Paso 3 · Atributo precio y estilos

- Método que reacciona cuando cambia `precio`: `attributeChangedCallback(nombre, anterior, valor)` (habiendo declarado `"precio"` en `static get observedAttributes()`).
- Color de marca (`--color-marca`) y dónde lo definimos: `#3D8B4F` (Verde Fresco), definido en `estilos.css` dentro del selector `tarjeta-producto`.
- Valor de respaldo que usa el componente si la página no define la variable: `#2C3E50` (Gris Antracita), usando `var(--color-marca, #2C3E50)`.

### Paso 4 · Tres productos del emprendimiento

| # | Producto | Precio |
|---|---|---|
| 1 | Infusión fría de Guayusa Orgánica con Limón | $2.00 |
| 2 | Tostado Andino Crujiente con Sal Marina y Hierbas | $1.75 |
| 3 | Galletas Artesanales de Quinua con Chocolate 70% | $2.50 |

### Paso 5 · Repositorio del equipo

| Integrante | Qué hizo en este laboratorio |
|---|---|
| Rashell Pinos Cordero| Construcción del componente `<tarjeta-producto>`, estilos con paleta oficial y tarjeta de bebida. |
| Rashell Pinos Cordero | Definición de heurísticas de usabilidad y tarjeta de snack salado. |
| Rashell Pinos Cordero | Definición de paleta de colores y tarjeta de snack dulce. |

## Verificación

Marca con una `x` lo que ya comprobaste en el navegador.

- [x] La etiqueta tiene guion.
- [x] La página solo cambia lo que el componente expone con `var()`.
- [x] `setAttribute` cambia el precio en pantalla.
- [x] La consola no muestra errores.

Prueba que usamos en la consola:

```js
document.querySelector("tarjeta-producto").setAttribute("precio", "25");
```

Resultado que vimos: El precio de la primera tarjeta en pantalla se actualizó inmediatamente a $25.00 gracias a attributeChangedCallback, sin recargar la página y sin errores en la consola.

## Reto extra (opcional)

- [x] Atributo `destacado` que cambia el borde con `:host([destacado])`.

## Uso de inteligencia artificial

- Herramienta usada (o «ninguna»): Gemini
- Para qué la consultamos: Para la sincronización del atributo precio.
- Qué cambiamos o comprobamos nosotros: La estructura del Web Component, uso de Shadow DOM, <template> y también integré la paleta de colores oficial y productos reales de SierrAroma / SnackBar, reemplacé las imágenes del catálogo y verifiqué el cambio reactivo del precio en la consola con Live Server.
