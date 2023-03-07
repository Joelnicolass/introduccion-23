// *let var const

/* let nombre = "Nico";

if (true) {
  let nombre = "Pedro";
  console.log(nombre);
}

console.log(nombre); */

// *object - json

/* 
    El objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor.
    Un valor de propiedad puede ser una función, que se denomina método del objeto.

    JSON (JavaScript Object Notation) es un formato de texto ligero para el intercambio de datos.
    JSON es independiente del lenguaje, utiliza convenciones que son comunes entre los diferentes lenguajes de programacion.
*/

/* 
    JSON
    {
        "clave": "valor"
    }
*/

/* const obj = {
  clave: "valor",
  funcion: () => {
    console.log("Hola Mundo");
  },
};

const str = JSON.stringify(obj);
const obj2 = JSON.parse(str);

console.log(obj);
console.log(obj2); */

// *template strings - backticks

/* 
    las comillas simples y dobles no permiten introducir variables en strings
    las comillas simples y dobles no permiten saltos de linea

    los backticks permiten introducir variables en strings
    los backticks permiten saltos de linea

*/
/* const persona = {
  nombre: "Nico",
};

const template = `https://www.google.com/search?q=${persona.nombre}`;

console.log(template); */

// destructuring - por posicion - por nombre

/*
 *La desestructuración es una expresión de JavaScript que permite desempacar valores de arrays o propiedades de objetos en distintas variables.
 */

// en el caso de los arrays, la desestructuración se realiza por posición, es decir que el primer elemento del array se asigna a la primera variable, el segundo elemento del array se asigna a la segunda variable, y así sucesivamente.

// en el caso de los objetos, la desestructuración se realiza por nombre, es decir que el valor de la propiedad con el nombre de la variable se asigna a la variable.

/* const persona = {
  nombre: "Nico",
  direccion: {
    calle: "Calle falsa",
    numero: 123,
  },
}; */

/* const calle = persona.direccion.calle;
const nombre = persona.nombre; */

/* const { nombre } = persona;
const { calle, numero } = persona.direccion;

console.log(nombre);
console.log(calle, numero);

const fn = () => {
  return {
    nombre: "Nico",
    direccion: {
      calle: "Calle falsa",
      numero: 123,
    },
  };
};

const {
  direccion,
  nombre
} = fn(); */

/* const nombres = ["Nico", "Pedro", "Carla"];

const [n1, n2, n3] = nombres;

console.log(n1, n2, n3); */
/* 
const useState = (initialValue) => {
  const setState = (newState) => {};

  const state = initialValue;

  return [state, setState];
};

const [nombre, cambiarNombre] = useState({}); */

// spread operator

// el operador de propagación permite expandir un array o un objeto en un lugar donde se esperan cero o más argumentos (para el caso de los arrays) o pares de clave-valor (para el caso de los objetos).

// se utiliza principalmente para clonar objetos

/* const autoRojo = {
  marca: "Ford",
  color: "Rojo",
  estado: {
    motor: "OK",
    puertas: "OK",
  },
};

const autoAzul = {
  ...autoRojo,
  color: "Azul",
};

console.table(autoRojo);
console.table(autoAzul); */

/* const state = {
  nombre: "Nico",
  apellido: "Lopez",
}

const newState = {
  ...state,
  nombre: "Pedro",
  direccion: {
    ...state.direccion,
    calle: "Calle falsa",
  }
}
 */

/* const nuevoAuto = structuredClone(autoRojo)
nuevoAuto.color = "Azul" */

// rest operator

/* 
    el operador rest es utilizado para representar un número indefinido de argumentos como un array.

*/

/* const suma = (...args) => {
  console.log(args);
};

suma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); */

// arrow functions

/* 
    La funcion flecha es una expresión de función más corta que la expresión de función convencional y no tiene su propio this, arguments, super o new.target

*/

// variable o constante | nombre de la funcion | parametros | retorno
const saludar = (nombre) => `Hola ${nombre}`;

// parameters - default parameters - named parameters

/* 
    Los parámetros de una función son las variables que se declaran en la definición de la función.
    Es posible asignar un valor por defecto a un parámetro de una función, para ello
    se utiliza el operador de asignación (=)

*/
/* const fna = (a, b, c = 0) => {
  console.log(a, b, c);
}; */

/* 
    En caso de ser necesario, sea porque la funcion recibe muchos parametros o porque los parametros son opcionales, es posible pasar un objeto como parametro de la funcion y acceder a sus propiedades dentro de la funcion.

*/
/* const fnb = ({ a, b, c = 0 }) => {
  console.log(a, b, c);
}; */

//---------------------------------------------------------

// DOM

// shadow DOM

// virtual DOM
