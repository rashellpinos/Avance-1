// componentes/tarjeta-producto.js
// Práctica de laboratorio · Construye <tarjeta-producto> (Actividad 8 de las diapositivas)
// Completa cada PASO. Los números son los mismos de la diapositiva y de la tarea en Moodle.

// ───────── PASO 2 · Plantilla con Shadow DOM y slots ─────────
// Una sola plantilla, declarada fuera de la clase.
const plantilla = document.createElement("template");
plantilla.innerHTML = `
  <style>
    :host {
      display: block;
      background: #FFFFFF;
      color: #2C3E50;
      border: 2px solid var(--color-marca, #2C3E50);
      border-radius: 12px;
      padding: 16px;
      box-sizing: border-box;
      box-shadow: 0 4px 10px rgba(44, 62, 80, 0.08);
      transition: transform 0.2s ease, background-color 0.2s ease;
    }

    :host(:hover) {
      background-color: rgba(61, 139, 79, 0.1);
      transform: translateY(-2px);
    }

    /* RETO EXTRA · Cambia el borde cuando la tarjeta tiene el atributo "destacado" */
    :host([destacado]) {
      border: 3px solid #E67E22;
      box-shadow: 0 6px 14px rgba(230, 126, 34, 0.2);
    }

    ::slotted([slot="foto"]) {
      width: 100%;
      height: 180px;
      object-fit: cover;
      border-radius: 8px;
      display: block;
    }

    ::slotted([slot="nombre"]) {
      color: var(--color-marca, #2C3E50);
      margin: 12px 0 8px;
      font-size: 1.15rem;
    }

    ::slotted(p) {
      color: #2C3E50;
      margin: 0 0 12px;
      font-size: 0.95rem;
      line-height: 1.4;
    }

    .precio {
      margin: 12px 0 0;
      font-size: 1.25rem;
      font-weight: 700;
      color: #E67E22;
    }
  </style>

  <slot name="foto"></slot>
  <slot name="nombre"></slot>
  <slot>Sin descripción</slot>
  <p class="precio">$<span id="precio">0.00</span></p>
`;

export class TarjetaProducto extends HTMLElement {

  // PASO 3 · Indica qué atributos observa el componente.
  static get observedAttributes() {
    return ["precio"];
  }

  constructor() {
    super();
    // PASO 2 · Crea el Shadow DOM en modo "open".
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // PASO 2 · Agrega al Shadow DOM una COPIA de la plantilla con cloneNode(true).
    this.shadowRoot.append(plantilla.content.cloneNode(true));
    // PASO 3 · Muestra el precio inicial.
    const spanPrecio = this.shadowRoot.querySelector("#precio");
    if (spanPrecio) {
      spanPrecio.textContent = Number(this.getAttribute("precio") || 0).toFixed(2);
    }
  }

  attributeChangedCallback(nombre, anterior, valor) {
    // PASO 3 · Cuando cambie "precio", actualiza lo que se ve en pantalla.
    if (nombre === "precio" && anterior !== valor) {
      const spanPrecio = this.shadowRoot.querySelector("#precio");
      if (spanPrecio) {
        spanPrecio.textContent = Number(valor || 0).toFixed(2);
      }
    }
  }

  // PASO 3 · La propiedad lee y escribe el atributo, así quedan sincronizados.
  get precio() {
    return Number(this.getAttribute("precio"));
  }

  set precio(valor) {
    this.setAttribute("precio", valor);
  }
}

// ───────── PASO 1 · Registra el componente ─────────
// Escribe aquí customElements.define(...) con una etiqueta que tenga guion.

customElements.define("tarjeta-producto", TarjetaProducto);