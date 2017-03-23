//funcion agregar lista
  function agregarlista()
  {
  
    var nuevoLi=document.getElementById("nueva_lista").value;
    var li=document.createElement("li");
    li.innerHTML= nuevoLi;
    document.getElementById("listaOrdenada").appendChild(li);
    document.getElementById('nueva_lista').value="";
  }


  function eliminarLista()
  {
    var list = document.getElementById("listaOrdenada");
    var elementos = document.getElementsByTagName("li").length;
    console.log(elementos);
    list.removeChild(list.childNodes[elementos]);

  }
