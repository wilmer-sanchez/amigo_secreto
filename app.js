// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*Variables*/
console.log('inicaimos  ')
let listadoAmigos =[];
console.log('listado  '+ listadoAmigos)
/* Funcion Agregar nombre a listado */

function agregarAmigo(){
  let addNumber = document.getElementById('amigo').value;
  listadoAmigos.push(addNumber);
  console.log("boton");
  console.log(listadoAmigos);
  limpiarCaja();
  mostarNombre('listaAmigos',addNumber)
}

console.log('numeors  '+ listadoAmigos)
function limpiarCaja() {
  document.getElementById('amigo').value='';
  console.log ('caja limpoiada')
  console.log ('uuuuuuuu'+listadoAmigos);
  
}

function mostarNombre(elemento,texto){
  let elementoHTML = document.getElementById(elemento);
  let nuevoelemento = document.createElement("li");
  nuevoelemento.appendChild(document.createTextNode(texto));
  elementoHTML.appendChild(nuevoelemento);
  console.log(elementoHTML)
}

function sortearAmigo(){
  let numeroGenerado = Math.floor(Math.random() * listadoAmigos.length);
  console.log("este es el numero que generamos  " + numeroGenerado)
  let nombreAmigo = (listadoAmigos[numeroGenerado])
  let textoamigo = ('Tu amigo secreto es: ' + nombreAmigo)
  mostarNombre('resultado', textoamigo)
  let elementoEliminar = document.getElementById('listaAmigos');
  console.log(elementoEliminar);
  elementoEliminar.remove();
}