const {
  sumar,
  restar,
  saludar,
  contarArgs,
  copiaObjetos,
  cambiaValorObjeto,
  desestructuracion1,
  desestructuracion2,
  piedraPapelTijera,
} = require("./nivelatorio");

describe("EJERCICIO 1", () => {
  describe("PASAR FUNCIONES A FUNCIONES DE FLECHA", () => {
    test("debe sumar dos numeros", () => {
      const res = sumar(1, 2);

      expect(res).toBe(3);
    });

    test("debe restar dos numeros", () => {
      const res = restar(2, 1);

      expect(res).toBe(1);
    });

    test("debe retornar void si no se envian todos los parametros", () => {
      const res1 = restar(1);

      expect(res1).toBeUndefined();
    });

    test("debe retornar Hola {nombre}", () => {
      const res = saludar("Nico");

      expect(res).toBe("Hola Nico");
    });
  });

  describe("ARREGLAR FUNCIONES", () => {
    test("debe retornar un numero igual a la cantidad de argumentos que recibe", () => {
      const res = contarArgs(1, 2, 3, 4, 5, 6);
      expect(res).toBe(6);
    });

    test('debe copiar el objeto recibido y retronar un nuevo objeto con la propiedad "completado: true', () => {
      const mock = {
        a: 1,
      };

      const res = copiaObjetos(mock);
      expect(res["completado"]).toBeTruthy();
    });

    test("debe cambiarle el valor a la clave de un objeto, con el valor que se recibe como parametro y retornarlo", () => {
      const mock = {
        a: "x",
      };

      cambiaValorObjeto(mock, "a", "y");

      expect(mock["a"]).toBe("y");
    });
  });
});

describe("EJERCICIO 2", () => {
  test("debe retornar un objeto {id, nombre, numero, entrecalles: {calle1, calle2}}", () => {
    const res = desestructuracion1();

    expect(res).toEqual({
      id: "0000000001",
      nombre: "Juan",
      numero: 31,
      entreCalles: {
        calle1: "Noexiste",
        calle2: "Tampocoexiste",
      },
    });
  });

  test("debe retornar un objeto {nombre1, nombre2, nombre3, nombre4}", () => {
    const [nombre1, nombre2, nombre3, nombre4] = [
      "Clemente",
      "Veronica",
      "Juan",
      "Daniela",
    ];

    const mock = {
      nombre1,
      nombre2,
      nombre3,
      nombre4,
    };

    const res = desestructuracion2();

    expect(res).toEqual(mock);
  });
});

describe("EJERCICIO 3 - PIEDRA PAPEL O TIJERAS", () => {
  const JUGADAS = {
    PIEDRA: "piedra",
    PAPEL: "papel",
    TIJERA: "tijera",
  };

  const REGLAS = {
    [JUGADAS.PIEDRA]: JUGADAS.TIJERA,
    [JUGADAS.PAPEL]: JUGADAS.PIEDRA,
    [JUGADAS.TIJERA]: JUGADAS.PAPEL,
  };

  const GANA_JUGADOR_1 = "Gana el jugador 1";
  const GANA_JUGADOR_2 = "Gana el jugador 2";
  const EMPATE = "Empate";
  const JUGADA_INVALIDA = "Jugada invalida";

  test('Debe retornar "Gana el jugador 1" si el jugador 1 elige "piedra" y el jugador 2 elige "tijera"', () => {
    const res = piedraPapelTijera(JUGADAS.PIEDRA, JUGADAS.TIJERA);

    expect(res).toBe(GANA_JUGADOR_1);
  });

  test('Debe retornar "Gana el jugador 1" si el jugador 1 elige "papel" y el jugador 2 elige "piedra"', () => {
    const res = piedraPapelTijera(JUGADAS.PAPEL, JUGADAS.PIEDRA);

    expect(res).toBe(GANA_JUGADOR_1);
  });

  test('Debe retornar "Gana el jugador 1" si el jugador 1 elige "tijera" y el jugador 2 elige "papel"', () => {
    const res = piedraPapelTijera(JUGADAS.TIJERA, JUGADAS.PAPEL);

    expect(res).toBe(GANA_JUGADOR_1);
  });

  test('Debe retornar "Gana el jugador 2" si el jugador 1 elige "piedra" y el jugador 2 elige "papel"', () => {
    const res = piedraPapelTijera(JUGADAS.PIEDRA, JUGADAS.PAPEL);

    expect(res).toBe(GANA_JUGADOR_2);
  });

  test('Debe retornar "Gana el jugador 2" si el jugador 1 elige "papel" y el jugador 2 elige "tijera"', () => {
    const res = piedraPapelTijera(JUGADAS.PAPEL, JUGADAS.TIJERA);

    expect(res).toBe(GANA_JUGADOR_2);
  });

  test('Debe retornar "Gana el jugador 2" si el jugador 1 elige "tijera" y el jugador 2 elige "piedra"', () => {
    const res = piedraPapelTijera(JUGADAS.TIJERA, JUGADAS.PIEDRA);

    expect(res).toBe(GANA_JUGADOR_2);
  });

  test('Debe retornar "Empate" si el jugador 1 elige y el jugador 2 eligen lo mismo', () => {
    const res = piedraPapelTijera(JUGADAS.PIEDRA, JUGADAS.PIEDRA);

    expect(res).toBe(EMPATE);
  });

  test("Debe retornar 'Jugada invalida' si la jugada es diferente de piedra papel o tijera", () => {
    const res = piedraPapelTijera("invalido", "invalido");

    expect(res).toBe(JUGADA_INVALIDA);
  });
});
