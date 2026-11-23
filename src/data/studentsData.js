import avatarJose from "../assets/illustrations/avatar-jose.png";
import avatarLuis from "../assets/illustrations/avatar-luis.png";
import avatarAna from "../assets/illustrations/avatar-ana.png";
import avatarConan from "../assets/illustrations/avatar-conan.png";
import avatarArturo from "../assets/illustrations/avatar-arturo.png";

const studentsData = {
  1: {
  nombre: "José Manuel Ramírez de la Rosa",
  matricula: "432493",
  nfc: "1d:de:46:02:12:10:80",
  estado: "Dentro de la escuela",
  avatar: avatarJose,

  fechaNacimiento: "11/06/2021",
  grupo: "A-01",

  tutores: [
    {
      nombre: "Verónica de la Rosa Salinas",
      parentesco: "Madre"
    },
    {
      nombre: "José Ramírez Torres",
      parentesco: "Padre"
    }
  ],

  contactosEmergencia: [
    {
      telefono: "844-123-4567",
      parentesco: "Madre"
    },
    {
      telefono: "844-123-4567",
      parentesco: "Padre"
    },
    {
      telefono: "844-123-4567",
      parentesco: "Abuela paterna"
    }
  ],

  autorizados: [
    {
      nombre: "Verónica de la Rosa Salinas",
      parentesco: "Madre"
    },
    {
      nombre: "José Ramírez Torres",
      parentesco: "Padre"
    },
    {
      nombre: "María Torres Ortega",
      parentesco: "Abuela paterna"
    }
  ],

  asistencias: [
    {
      fecha: "10/11/2026",
      entrada: "8:01 AM",
      salida: "1:22 PM"
    },
    {
      fecha: "09/11/2026",
      entrada: "8:06 AM",
      salida: "1:16 PM"
    }
  ],

  tipoSangre: "AB+",
  alergias: "Ninguna",
  condiciones: "Ninguna",

  observaciones: [
    "Sin observaciones médicas"
  ],

  notas: [
    "Sin notas prioritarias"
  ]
},

  2: {
  nombre: "Luis Ángel Fuentes Escobar",
  matricula: "897765",
  nfc: "5a:65:08:e5:26:41:89",
  estado: "Dentro de la escuela",
  avatar: avatarLuis,

  fechaNacimiento: "28/11/2020",
  grupo: "B-01",

  tutores: [
    {
      nombre: "Mónica Escobar Garza",
      parentesco: "Madre"
    },
    {
      nombre: "Luis Fuentes Herrera",
      parentesco: "Padre"
    }
  ],

  contactosEmergencia: [
    {
      telefono: "844-123-4567",
      parentesco: "Madre"
    },
    {
      telefono: "844-123-4567",
      parentesco: "Padre"
    },
    {
      telefono: "844-123-4567",
      parentesco: "Abuela materna"
    }
  ],

  autorizados: [
    {
      nombre: "Mónica Escobar Garza",
      parentesco: "Madre"
    },
    {
      nombre: "Luis Fuentes Herrera",
      parentesco: "Padre"
    },
    {
      nombre: "Silvia Garza Ramos",
      parentesco: "Abuela materna"
    }
  ],

  asistencias: [
    {
      fecha: "10/11/2026",
      entrada: "8:03 AM",
      salida: "1:19 PM"
    },
    {
      fecha: "09/11/2026",
      entrada: "7:59 AM",
      salida: "1:14 PM"
    }
  ],

  tipoSangre: "O-",
  alergias: "Ninguna",
  condiciones: "Rinitis alérgica",

  observaciones: [
    "Puede presentar estornudos, congestión nasal o lagrimeo durante cambios de clima o exposición al polvo."
  ],

  notas: [
    "En caso de síntomas intensos de estornudos, congestión nasal o lagrimeo durante cambios de clima o exposición al polvo; contactar a sus tutores.",
    "Contactar primero a la madre en caso de emergencia."
  ]
},

  3: {
  nombre: "Ana Sofía Montes Paredes",
  matricula: "897765",
  nfc: "6A EB 10 5",
  estado: "Dentro de la escuela",
  avatar: avatarAna,

  fechaNacimiento: "20/10/2021",
  grupo: "A-03",

  tutores: [
    {
      nombre: "Marisol Montes Muñoz",
      parentesco: "Madre"
    },
    {
      nombre: "Armando Paredes Guitiérrez",
      parentesco: "Padre"
    }
  ],

  contactosEmergencia: [
    {
      telefono: "844-123-4567",
      parentesco: "Madre"
    },
    {
      telefono: "844-123-4567",
      parentesco: "Padre"
    },
    {
      telefono: "844-123-4567",
      parentesco: "Abuela materna"
    }
  ],

  autorizados: [
    {
      nombre: "Marisol Montes Muñoz",
      parentesco: "Madre"
    },
    {
      nombre: "Armando Paredes Guitiérrez",
      parentesco: "Padre"
    },
    {
      nombre: "Carmen Muñoz Zepeda",
      parentesco: "Abuela materna"
    }
  ],

  asistencias: [
    {
      fecha: "10/11/2026",
      entrada: "8:01 AM",
      salida: "1:20 PM"
    },
    {
      fecha: "09/11/2026",
      entrada: "8:04 AM",
      salida: "1:15 PM"
    }
  ],

  tipoSangre: "O+",
  alergias: "Ninguna",
  condiciones: "Asma",

  observaciones: [
    "Evitar actividades físicas intensas en días de altas temperaturas.",
    "Porta inhalador en mochila."
  ],

  notas: [
    "En caso de emergencias relacionadas con su asma, porta un inhalador en su mochila.",
    "Tratar de ponerse en contacto primero con la abuela materna."
  ]
},

  4: {
  nombre: "Conan Brita Morales Zepeda",
  matricula: "883235",
  nfc: "5a:05:96:e4:26:41:89",
  estado: "Dentro de la escuela",
  avatar: avatarConan,

  fechaNacimiento: "02/08/2021",
  grupo: "A-03",

  tutores: [
    {
      nombre: "Marco Ruiz Morales",
      parentesco: "Padre"
    },
    {
      nombre: "Socorro Muñoz Zepeda",
      parentesco: "Madre"
    }
  ],

  contactosEmergencia: [
    {
      telefono: "844-123-4567",
      parentesco: "Padre"
    },
    {
      telefono: "844-123-4567",
      parentesco: "Madre"
    },
  ],

  autorizados: [
    {
      nombre: "Marco Ruiz Morales",
      parentesco: "Padre"
    },
    {
      nombre: "Socorro Muñoz Zepeda",
      parentesco: "Madre"
    },
    {
      nombre: "Patricia Muñoz Zepeda",
      parentesco: "Tía materna"
    }
  ],

  asistencias: [
    {
      fecha: "10/11/2026",
      entrada: "8:05 AM",
      salida: "1:20 PM"
    },
    {
      fecha: "09/11/2026",
      entrada: "8:00 AM",
      salida: "1:17 PM"
    }
  ],

  tipoSangre: "B-",
  alergias: "Penicilina",
  condiciones: "Ninguna",

  observaciones: [
    "Sin observaciones médicas"
  ],

  notas: [
    "En caso de emergencia contacte primero al padre del infante."
  ]
},

  5: {
  nombre: "Arturo Mateo Escobedo Gutiérrez",
  matricula: "657834",
  nfc: "5a:95:12:e4:26:41:89",
  estado: "Dentro de la escuela",
  avatar: avatarArturo,

  fechaNacimiento: "15/03/2021",
  grupo: "A-02",

  tutores: [
    {
      nombre: "Claudia Gutiérrez Reyes",
      parentesco: "Madre"
    },
    {
      nombre: "Raúl Escobedo Martínez",
      parentesco: "Padre"
    }
  ],

  contactosEmergencia: [
    {
      telefono: "844-123-4567",
      parentesco: "Madre"
    },
    {
      telefono: "844-123-4567",
      parentesco: "Padre"
    },
    {
      telefono: "844-123-4567",
      parentesco: "Abuelo paterno"
    }
  ],

  autorizados: [
    {
      nombre: "Claudia Gutiérrez Reyes",
      parentesco: "Madre"
    },
    {
      nombre: "Raúl Escobedo Martínez",
      parentesco: "Padre"
    },
    {
      nombre: "Ricardo Escobedo López",
      parentesco: "Abuelo paterno"
    }
  ],

  asistencias: [
    {
      fecha: "10/11/2026",
      entrada: "7:58 AM",
      salida: "1:18 PM"
    },
    {
      fecha: "09/11/2026",
      entrada: "8:02 AM",
      salida: "1:15 PM"
    }
  ],

  tipoSangre: "A+",
  alergias: "Ninguna",
  condiciones: "Ninguna",

  observaciones: [
    "Sin observaciones médicas"
  ],

  notas: [
    "Sin notas prioritarias"
  ]
}
};

export default studentsData;