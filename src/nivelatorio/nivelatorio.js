//! IMPORTANTE! NO SE DEBEN CAMBIAR LOS NOMBRES DE LAS FUNCIONES
/* 

  EJERCICIO 1 - FUNCIONES

  TODO: PASAR FUNCIONES A FUNCIONES DE FLECHA

  *Puede mejorar el codigo, siempre y cuando siga los lineamientos

  *Los tests estaran en en "passed" al iniciar el ejercicio, deberan mantenerse asi luego de que cumplan con el ejercicio

*/

// debe sumar dos numeros
function sumar(a, b) {
  return a + b;
}

// debe restar dos numeros
// debe comprobar que los parametros sean anviados, de lo contrario debe retotnar inmediatamente
function restar(a, b) {
  if (!a || !b) {
    return;
  }

  return a - b;
}

// debe retornar "Hola {nombre}" donde nombre corresponde al argumento enviado.
function saludar(nombre) {
  return "Hola " + nombre;
}

/* 
  TODO: ARREGLAR FUNCIONES Y PASARLAS A FUNCIONES FLECHA

  *los tests de este grupo estaran "failed", al cumplir el ejercicio deben estar "passed"

*/

// La siguiente funcion debe aceptar un numero ilimitado de argumentos
// dede retornar un entero igual a la cantidad de argumentos que recibe
// Ejemplo: una funcion que reciba cuatro argumentos debe retornar 4 -> fn(a,b,c,d) => 4

function contarArgs() {
  return args;
}

// La siguiente funcion debe retornar un objeto igual al que recibe, pero con una propiedad extra
// la propiedad extra debe ser clave: completado, valor: true
/* 
  Es decir que si enviamos un objeto:
  const obj = {
    nombre: 'Nico'
  }
  Debe retornar
  {
    nombre 'Nico',
    completado: true   
  }

*/

function copiaObjetos(objeto) {}

// La siguiente funcion debe cambiar la propiedad de un objeto, para esto debera:
// recibir como argumento: un objeto - el nombre de la clave que se quiere modificar - el valor que se quiere asignar a la clave

/* 
  Ejemplo:

  const auto = {
    color: 'verde'
  }

  fn(auto, 'color', 'rojo');

  En este caso, llamar a esta funcion tomaria el objeto auto, y cambiaria la propiedad color, asignandole el valor rojo.

  *AYUDA:
  *Es posible acceder a propiedades de un objeto mediante una notacion diferente a objeto.clave  
  *Para resolver este ejercicio sera necesario acceder a la propiedad de un objeto mediante un string.
  *Dicho string debe ser igual a la clave del objeto que nos interese acceder.
  *Para ello debemos hacer la llamada de la siguiente manera: objeto['clave']
  *Siguiendo el ejemplo del objeto auto: auto['color']
  *Pudiendo luego asignar directamente el nuevo valor, como si de un setter se tratase: auto['color'] = 'rojo'
*/

function cambiaValorObjeto(objeto, clave, valor) {}

// TODO: EJERCICIO 2 - DESESTRUCTURACION
// TODO: RESOLVER LOS SIGUIENTES EJERCICIOS CON DESESTRUCTURACION

//! NO CAMBIAR LOS VALORES DEL OBJETO PERSONA

// Para resolver el siguiente ejercicio puede utilizar el metodo que desee, siempre y cuando utilice desestructuracion

// *Al finalizar el ejercicio el test debera estar en 'passed'

function desestructuracion1() {
  const persona = {
    id: "0000000001",
    nombre: "Juan",
    apellido: "Varela",
    email: "juanva@email.com",
    direccion: {
      calle: "Av. Falsa",
      otros: {
        numero: 31,
        entreCalles: ["Noexiste", "Tampocoexiste"],
      },
    },
  };

  return {
    id,
    nombre,
    numero,
    entreCalles: {
      calle1,
      calle2,
    },
  };
}

// Resolver con desestructuracion por posicion
//! NO CAMBIAR LOS VALORES DEL ARRAY DE NOMBRES

function desestructuracion2() {
  const nombres = ["Clemente", "Veronica", "Juan", "Daniela"];

  return {
    nombre1,
    nombre2,
    nombre3,
    nombre4,
  };
}

/* 
  TODO: EJERCICIO 3 - PIEDRA PAPEL TIJERA
*/

// TODO: TENER EN CUENTA LAS SIGUIENTES DEFINICIONES
// La siguiente funcion debe recibir dos argumentos, que seran las jugadas de dos jugadores
// Debe retornar un string que indique el ganador
// Si el ganador es el jugador 1 debe retornar 'Gana el jugador 1'
// Si el ganador es el jugador 2 debe retornar 'Gana el jugador 2'
// Si hay empate debe retornar 'Empate'
// Si alguna de las jugadas es invalida debe retornar 'Jugada invalida'
// Las jugadas validas son: 'piedra', 'papel', 'tijera'

// *AYUDA: Para resolver este ejercicio puede crear funciones y objetos adicionales.
// *Por ejemplo constantes con las jugadas, funciones de evaluacion, o lo que considere necesario

function piedraPapelTijera(jugada1, jugada2) {
  return "Gana el jugador 1";
}

// NO MODIFICAR
module.exports = {
  sumar,
  restar,
  saludar,
  contarArgs,
  copiaObjetos,
  cambiaValorObjeto,
  desestructuracion1,
  desestructuracion2,
  piedraPapelTijera,
};
