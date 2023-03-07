const root = document.getElementById("root");

function contador() {
  let contador = 0;

  const incrementarContador = () => {
    contador++;
    console.log(contador);
  };

  const decrementarContador = () => {
    contador--;
    console.log(contador);
  };

  const valor = document.createElement("h1");
  valor.textContent = contador;
  root.appendChild(valor);

  const btnIncrementar = document.createElement("button");
  btnIncrementar.textContent = "Sumar";
  btnIncrementar.onclick = incrementarContador;
  root.appendChild(btnIncrementar);

  const btnDecrementar = document.createElement("button");
  btnDecrementar.textContent = "Decrementar";
  btnDecrementar.onclick = decrementarContador;
  root.appendChild(btnDecrementar);
}

contador();
