import avatarAlba from "../assets/illustrations/avatar-alba.png";
import avatarVictor from "../assets/illustrations/avatar-victor.png";
import avatarIrene from "../assets/illustrations/avatar-irene.png";
import avatarSamuel from "../assets/illustrations/avatar-samuel.png";

const staffData = {
  1: {
    id: 1,

    nombre: "Alba Margarita Torres Hernández",
    usuario: "nombre@correoelectronico.com",
    puesto: "Directora",
    categoria: "Administrador",
    nfc: "8C 2F 71 B4",
    telefono: "844-123-4567",
    correo: "nombre@correoelectronico.com",
    avatar: avatarAlba,

    fechaNacimiento: "14/05/1985",

    contactosEmergencia: [
      {
        nombre: "Jorge Alberto Hernández Salazar",
        parentesco: "Esposo",
        telefono: "844-123-4567"
      },
      {
        nombre: "Margarita Elena Torres Flores",
        parentesco: "Madre",
        telefono: "844-123-4567"
      },
      {
        nombre: "Arturo Torres Méndez",
        parentesco: "Padre",
        telefono: "844-123-4567"
      }
    ],

    tipoSangre: "O+",
    alergias: "Ninguna",
    condiciones: "Hipertensión controlada",

    observaciones: [
      "Toma medicación para el control de la presión arterial."
    ],

    notas: [
      "En caso de presentar mareo intenso o desmayo, contactar servicios médicos de emergencia.",
      "Contactar primero al esposo."
    ]
  },

  2: {    
    id: 2,

    nombre: "Victor Prieto Martínez",
    usuario: "AA0003",
    puesto: "Maestro",
    categoria: "Usuarios",
    nfc: "3E 94 CA 27",
    telefono: "844-123-4567",
    correo: "nombre@correoelectronico.com",
    avatar: avatarVictor,

    fechaNacimiento: "22/09/1994",

    contactosEmergencia: [
      {
        nombre: "Daniela Sánchez Flores",
        parentesco: "Esposa",
        telefono: "844-123-4567"
      },
      {
        nombre: "Rosa María Martínez López",
        parentesco: "Madre",
        telefono: "844-123-4567"
      },
      {
        nombre: "Víctor Manuel Prieto García",
        parentesco: "Padre",
        telefono: "844-123-4567"
      }
    ],

    tipoSangre: "B+",
    alergias: "Ninguna",
    condiciones: "Ninguna",

    observaciones: [
      "Ninguna"
    ],

    notas: [
      "Contactar primero a la esposa en caso de emergencia."
    ]
  },

  3: {
    id: 3,

  nombre: "Irene Roman García",
  usuario: "AA0001",
  puesto: "Enfermera",
  categoria: "Usuarios",
  nfc: "1d:7c:46:02:12:10:80",
  telefono: "844-123-4567",
  correo: "nombre@correoelectronico.com",
  avatar: avatarIrene,

  fechaNacimiento: "20/10/2000",

  contactosEmergencia: [
    {
      nombre: "Miguel Ángel García Flores",
      parentesco: "Esposo",
      telefono: "844-123-4567"
    },
    {
      nombre: "Laura Isabel Roman Navarro",
      parentesco: "Madre",
      telefono: "844-123-4567"
    },
    {
      nombre: "José Manuel Rodríguez García",
      parentesco: "Padre",
      telefono: "844-123-4567"
    }
  ],

  tipoSangre: "A+",
  alergias: "Ninguna",
  condiciones: "Celiaca",

  observaciones: [
    "Ninguna"
  ],

  notas: [
    "En caso de ingesta de gluten y mostrar signos de malestar, llamar inmediatamente al 911."
  ]
},

  4: {
    id: 4,
    
    nombre: "Samuel Gutierrez González",
    usuario: "AA0004",
    puesto: "Auxiliar de cafetería",
    categoria: "Usuarios",
    nfc: "A1 5D 83 F9",
    telefono: "844-123-4567",
    correo: "nombre@correoelectronico.com",
    avatar: avatarSamuel,

    fechaNacimiento: "07/02/1988",

    contactosEmergencia: [
      {
        nombre: "Patricia González Rivera",
        parentesco: "Esposa",
        telefono: "844-123-4567"
      },
      {
        nombre: "Guadalupe Rivera Salinas",
        parentesco: "Madre",
        telefono: "844-123-4567"
      },
      {
        nombre: "José Luis Gutiérrez Herrera",
        parentesco: "Padre",
        telefono: "844-123-4567"
      }
    ],

    tipoSangre: "A-",
    alergias: "Mariscos",
    condiciones: "Ninguna",

    observaciones: [
      "Evitar el consumo de alimentos que contengan mariscos."
    ],

    notas: [
      "En caso de reacción alérgica, solicitar atención médica inmediata.",
      "Contactar primero a la esposa."
    ]
  }
};

export default staffData;