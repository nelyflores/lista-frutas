//funcion agregar lista
function agregarlista()
{
  //declaro una variable que tomara el valor de la caja de texto
  var nuevoLi=document.getElementById("nueva_lista").value;
  if(nuevoLi.length>0)
  {
    //crea un elemento HTML especificado por su tagname en este caso "li" sera un elemento de la lista
    var li=document.createElement("li");
    //se le asigna un id
    li.id=nuevoLi;
    // se agrega el elemento a la lista ordenada 
    li.innerHTML= nuevoLi;
   document.getElementById("listaOrdenada").appendChild(li);
  }

}
