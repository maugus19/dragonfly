const mensajes = [
  // Mañana (6am - 11am)
  { mensaje: "Buenos días, preciosa 🌞 que tu sonrisa ilumine este día.", hora: "mañana" },
  { mensaje: "Hoy es un lienzo en blanco para ti, píntalo con tu brillo ✨.", hora: "mañana" },
  { mensaje: "Despierta con la certeza de que eres única y especial 💛.", hora: "mañana" },
  { mensaje: "Ten un feliz día (válido solo para ti). 💐", hora: "mañana" },

  // Mediodía (12pm - 3pm)
  { mensaje: "Pequeña pausa, hermosa: recuerda hidratarte y sonreír 💕.", hora: "mediodía" },
  { mensaje: "Tu energía y dulzura hacen que el día sea más bonito 🌸.", hora: "mediodía" },
  { mensaje: "Eres inspiración incluso en los momentos más simples ✨.", hora: "mediodía" },

  // Tarde (4pm - 7pm)
  { mensaje: "Ya lograste tanto hoy, linda, estoy orgulloso de ti 🌹.", hora: "tarde" },
  { mensaje: "Que tu tarde esté llena de calma y cosas bonitas 💜.", hora: "tarde" },
  { mensaje: "Eres como un rayo de sol al atardecer: única e inolvidable 🌇.", hora: "tarde" },

  // Noche (8pm - 11pm)
  { mensaje: "Descansa, preciosa, mañana el mundo te espera con los brazos abiertos 🌙.", hora: "noche" },
  { mensaje: "Duerme tranquila, linda, hoy fuiste más que suficiente 💫.", hora: "noche" },
  { mensaje: "Que tus sueños sean tan lindos como tú ⭐.", hora: "noche" },
];

// función para obtener el momento del día
function obtenerMomentoDelDia() {
  const horaActual = new Date().getHours();

  if (horaActual >= 6 && horaActual < 12) return "mañana";
  if (horaActual >= 12 && horaActual < 16) return "mediodía";
  if (horaActual >= 16 && horaActual < 20) return "tarde";
  return "noche"; // 20:00 - 05:59
}

// función para elegir un mensaje aleatorio según la hora
export function getRandomMessage() {
  const momento = obtenerMomentoDelDia();
  const filtrados = mensajes.filter(m => m.hora === momento);

  if (filtrados.length === 0) return "Hola linda 💖"; // fallback
  const randomIndex = Math.floor(Math.random() * filtrados.length);
  return filtrados[randomIndex].mensaje;
}
