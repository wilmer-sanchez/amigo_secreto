// Esta app permite sortear e indicar de manera aleatoria un Nombre, desde un listado de nombres agregados previamente por el usuario

/*Variables*/
let listadoAmigos =[];

/* Funcion Agregar nombre a listado */
function agregarAmigo(){
  let addNombre = document.getElementById('amigo').value;
  if (addNombre === ""){
    alert ('El campo "Escribe un nombre" no puede estar vacio, por favor escribe el nombre de uno de tus amigos y da Click en Añadir');
  }else{
    listadoAmigos.push(addNombre);
    limpiarCaja();
    mostarNombre('listaAmigos', addNombre)
  }
}

/*Funcion para limpiar caja de texto */
function limpiarCaja() {
  document.getElementById('amigo').value='';
}

/*Funcion para mostrar el texto en pantalla */
function mostarNombre(elemento,texto){
  let elementoHTML = document.getElementById(elemento);
  let nuevoelemento = document.createElement("li");
  nuevoelemento.appendChild(document.createTextNode(texto));
  elementoHTML.appendChild(nuevoelemento);
}

/* Funcion para sortear el amigo secreto entre todos los nombres agregados */
function sortearAmigo(){
  let numeroGenerado = Math.floor(Math.random() * listadoAmigos.length);
  let nombreAmigo = (listadoAmigos[numeroGenerado])
  let textoamigo = ('Tu amigo secreto es: ' + nombreAmigo)
  mostarNombre('resultado', textoamigo)
  let elementoEliminar = document.getElementById('listaAmigos');
  elementoEliminar.remove();
}