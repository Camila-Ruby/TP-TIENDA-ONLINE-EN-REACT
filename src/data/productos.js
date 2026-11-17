
import archipielago from '../assets/archipielago.jpg'
import bajarEsLoPeor from '../assets/bajar-es-lo-peor.jpg'
import comoDesaparecer from '../assets/como-desaparecer-completamente.jpg'
import cosasPerdimosFuego from '../assets/las-cosas-que-perdimos-en-el-fuego.jpg'
import peligrosFumar from '../assets/los-peligros-de-fumar-en-la-cama.jpg'
import nuestraParteNoche from '../assets/nuestra-parte-de-noche.jpg'
import lugarSoleado from '../assets/un-lugar-soleado-para-gente-sombria.jpg'
import esteEsElMar from '../assets/este-es-el-mar.jpg'
import cujo from '../assets/cujo.jpg'
import cementerioDeAnimales from '../assets/cementerio-de-animales.jpg'
import carrie from '../assets/carrie.jpg'
import carreteraMaldita from '../assets/carretera-maldita.jpg'
import laLargaMarcha from '../assets/la-larga-marcha.jpg'
import it from '../assets/it.jpg'

const productos = [
  {
    id: 1,
    nombre: "Archipiélago",
    autor: "Mariana Enríquez",
    categoria: "Ensayo",
    precio: 25000,
    imagen: archipielago,
    descripcion: "Ensayos sobre literatura, lecturas personales y las obsesiones que marcan la formación de una lectora.",
    stock: 10
  },
  {
    id: 2,
    nombre: "Bajar es lo peor",
    autor: "Mariana Enríquez",
    categoria: "Novela",
    precio: 35000,
    imagen: bajarEsLoPeor,
    descripcion: "Tres jóvenes se enfrentan al amor, las drogas y la autodestrucción en el Buenos Aires nocturno de los años noventa.",
    stock: 10
  },
  {
    id: 3,
    nombre: "Cómo desaparecer completamente",
    autor: "Mariana Enríquez",
    categoria: "Novela",
    precio: 25000,
    imagen: comoDesaparecer,
    descripcion: "Matías, un adolescente marginado, busca escapar de una vida familiar difícil y de un entorno asfixiante.",
    stock: 10
  },
  {
    id: 4,
    nombre: "Las cosas que perdimos en el fuego",
    autor: "Mariana Enríquez",
    categoria: "Cuentos de terror",
    precio: 15000,
    imagen: cosasPerdimosFuego,
    descripcion: "Relatos donde lo cotidiano se vuelve perturbador y aparecen la violencia, los fantasmas y lo sobrenatural.",
    stock: 10
  },
  {
    id: 5,
    nombre: "Los peligros de fumar en la cama",
    autor: "Mariana Enríquez",
    categoria: "Cuentos de terror",
    precio: 15000,
    imagen: peligrosFumar,
    descripcion: "Cuentos inquietantes sobre presencias fantasmales, obsesiones y sucesos extraños en escenarios cotidianos.",
    stock: 10
  },
  {
    id: 6,
    nombre: "Nuestra parte de noche",
    autor: "Mariana Enríquez",
    categoria: "Novela de terror",
    precio: 25000,
    imagen: nuestraParteNoche,
    descripcion: "Un padre y su hijo recorren Argentina mientras los persigue una sociedad secreta vinculada con fuerzas oscuras.",
    stock: 10
  },
  {
    id: 7,
    nombre: "Un lugar soleado para gente sombría",
    autor: "Mariana Enríquez",
    categoria: "Cuentos de terror",
    precio: 15000,
    imagen: lugarSoleado,
    descripcion: "Doce relatos de horror donde lo monstruoso irrumpe en la vida cotidiana de ciudades y pueblos.",
    stock: 10
  },
  {
    id: 8,
    nombre: "Éste es el mar",
    autor: "Mariana Enríquez",
    categoria: "Novela corta",
    precio: 20000,
    imagen: esteEsElMar,
    descripcion: "Una historia que mezcla música, fanatismo y elementos sobrenaturales alrededor del mundo del rock.",
    stock: 10
  },
  {
    id: 9,
    nombre: "Cujo",
    autor: "Stephen King",
    categoria: "Terror",
    precio: 35000,
    imagen: cujo,
    descripcion: "Una historia de terror psicológico en la que un perro aparentemente inofensivo se convierte en una amenaza aterradora.",
    stock: 10
  },
  {
    id: 10,
    nombre: "Cementerio de animales",
    autor: "Stephen King",
    categoria: "Terror",
    precio: 40000,
    imagen: cementerioDeAnimales,
    descripcion: "Una familia descubre un antiguo cementerio donde los animales enterrados pueden regresar a la vida, aunque no siempre de la misma manera.",
    stock: 10
  },
  {
    id: 11,
    nombre: "Carrie",
    autor: "Stephen King",
    categoria: "Terror",
    precio: 30000,
    imagen: carrie,
    descripcion: "Una adolescente víctima del acoso escolar descubre que posee poderes telequinéticos capaces de desencadenar una tragedia.",
    stock: 0
  },
  {
    id: 12,
    nombre: "Carretera maldita",
    autor: "Stephen King",
    categoria: "Suspenso",
    precio: 25000,
    imagen: carreteraMaldita,
    descripcion: "Un hombre se enfrenta a una situación cada vez más desesperante cuando una carretera amenaza con destruir su hogar y su tranquilidad.",
    stock: 10
  },
  {
    id: 13,
    nombre: "La larga marcha",
    autor: "Stephen King",
    categoria: "Distopía",
    precio: 25000,
    imagen: laLargaMarcha,
    descripcion: "En una sociedad totalitaria, cien jóvenes participan en una marcha mortal donde detenerse significa morir.",
    stock: 10
  },
  {
    id: 14,
    nombre: "It",
    autor: "Stephen King",
    categoria: "Terror",
    precio: 50000,
    imagen: it,
    descripcion: "Un grupo de amigos se enfrenta a una entidad sobrenatural que adopta distintas formas y aterroriza al pueblo de Derry.",
    stock: 0
  }

]

export default productos
