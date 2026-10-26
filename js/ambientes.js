export const ambientes = [
  {
    id: "sala-cocina",
    titulo: "Sala y cocina",
    descripcion: "Al entrar, la sala queda al frente y la cocina a la derecha. El pasillo de las habitaciones sigue a la derecha.",
    imagen: "imagenes/sala-cocina.jpg",
    miniatura: "imagenes/miniaturas/sala-cocina.jpg",
  },
  // {
  //   id: "habitacion1",
  //   titulo: "Habitación 1",
  //   descripcion: "Primera habitación pequeña del pasillo, a la izquierda.",
  //   imagen: "imagenes/habitacion1.jpg",
  //   miniatura: "imagenes/miniaturas/habitacion1.jpg",
  // },
  {
    id: "cocina",
    titulo: "Cocina",
    descripcion: "Cocina con estufa, mesón y ventana al costado.",
    imagen: "imagenes/cocina.jpg",
    miniatura: "imagenes/miniaturas/cocina.jpg",
  },
  {
    id: "habitacion-principal",
    titulo: "Habitación principal",
    descripcion: "Habitación del fondo del pasillo.",
    imagen: "imagenes/habitacion-principal.jpg",
    miniatura: "imagenes/miniaturas/habitacion-principal.jpg",
  },
];

export const nodosTour = [
  {
    id: "sala-cocina",
    name: "Sala y cocina",
    caption: "Sala y cocina",
    panorama: "imagenes/sala-cocina.jpg",
    thumbnail: "imagenes/miniaturas/sala-cocina.jpg",
    links: [
      //{ nodeId: "habitacion1", position: { yaw: "-177.7deg", pitch: "-21.6deg" }, linkOffset: { depth: 1.55 }, arrowStyle: { className: "va-flecha va-flecha-izq" } },
      { nodeId: "cocina", position: { yaw: "-45deg", pitch: "2.1deg" }, linkOffset: { depth: 3.5 }, arrowStyle: { className: "va-flecha va-flecha-izq" } },
      { nodeId: "habitacion-principal", position: { yaw: "2.2deg", pitch: "-4deg" }, linkOffset: { depth: 8.5 } },
    ],
  },
  // {
  //   id: "habitacion1",
  //   name: "Habitación 1",
  //   caption: "Habitación 1",
  //   panorama: "imagenes/habitacion1.jpg",
  //   thumbnail: "imagenes/miniaturas/habitacion1.jpg",
  //   links: [{ nodeId: "sala-cocina", position: { yaw: "143.4deg", pitch: "-33.4deg" } }],
  // },
  {
    id: "cocina",
    name: "Cocina",
    caption: "Cocina",
    panorama: "imagenes/cocina.jpg",
    thumbnail: "imagenes/miniaturas/cocina.jpg",
    links: [{ nodeId: "sala-cocina", position: { yaw: "145.4deg", pitch: "-32.6deg" } }],
  },
  {
    id: "habitacion-principal",
    name: "Habitación principal",
    caption: "Habitación principal",
    panorama: "imagenes/habitacion-principal.jpg",
    thumbnail: "imagenes/miniaturas/habitacion-principal.jpg",
    links: [{ nodeId: "sala-cocina", position: { yaw: "122.4deg", pitch: "-32.1deg" } }],
  },
];

/** 0 = máximo alejamiento (zoom mínimo del visor). */
export const ZOOM_MINIMO = 0;

export const opcionesVisor = {
  defaultZoomLvl: ZOOM_MINIMO,
};

/** Las GoPro Max guardan FOV 0 en el XMP y Photo Sphere Viewer arranca en zoom máximo. */
export function mantenerZoomMinimo(visor) {
  visor.addEventListener("panorama-loaded", () => {
    queueMicrotask(() => visor.zoom(ZOOM_MINIMO));
  });
}

export const textosVisor = {
  zoom: "Zoom",
  zoomOut: "Alejar",
  zoomIn: "Acercar",
  moveUp: "Arriba",
  moveDown: "Abajo",
  moveLeft: "Izquierda",
  moveRight: "Derecha",
  description: "Descripción",
  fullscreen: "Pantalla completa",
  loading: "Cargando…",
  menu: "Menú",
  close: "Cerrar",
  twoFingers: "Usa dos dedos para moverte",
  ctrlZoom: "Usa Ctrl y la rueda para hacer zoom",
  loadError: "No se pudo cargar la imagen 360",
  webglError: "Tu navegador no soporta WebGL",
  gyroscope: "Giroscopio",
  gallery: "Ambientes",
};
