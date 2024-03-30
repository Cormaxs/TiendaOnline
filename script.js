const principal = document.querySelector("#principal");






  function crearProduct(precio, nombre, imgSrc, urlProducto){

    //creo el div container
        const producto = document.createElement('div'); 
        producto.classList.add("producto")

         //creo btn Elmiimar
         const btnEliminar = document.createElement("button");
         btnEliminar.classList.add("eliminar");
         btnEliminar.textContent = "x";
         btnEliminar.onclick = function() {
           // Eliminar el producto
           eliminarProducto();
           };
         producto.appendChild(btnEliminar);

  
    // Creo el enlace dentro del div
        const productoLink = document.createElement("a"); //creo elemento
        productoLink.classList.add("productoLink"); //le asigno su clase
        productoLink.href = urlProducto; //pongo la url del producto
        producto.appendChild(productoLink);//lo agrego dentro del div

     // Creo el span del precio dentro del enlace
        const precioProduct = document.createElement("span"); 
        precioProduct.classList.add("precioProduct"); 
        precioProduct.textContent = precio;
        productoLink.appendChild(precioProduct);

    // Creo la imagen dentro del enlace
        const imgProducto = document.createElement("img"); 
        imgProducto.classList.add("imgProducto"); 
        imgProducto.src = imgSrc;//mediante . puedo acceder 
        imgProducto.alt = ""; // Agrega el texto alternativo de la imagen
        productoLink.appendChild(imgProducto);

         // Creo el div de abajo del producto
        const abajoProduct = document.createElement("div"); 
        abajoProduct.classList.add("abajoProduct"); 
        producto.appendChild(abajoProduct);

         // Crea el párrafo del nombre del producto
        const nameProduct = document.createElement("p"); 
        nameProduct.classList.add("nameProduct"); 
        nameProduct.textContent = nombre;
        abajoProduct.appendChild(nameProduct);

        // Crea el botón de añadir al carro
        const btnProduct = document.createElement("button"); 
        btnProduct.classList.add("btnProduct");
        btnProduct.textContent ="añadir al carro"
        abajoProduct.appendChild(btnProduct);

       

        return producto;//devuelve el valor del producto
  }

  
  // Ejemplo de uso

  
  
  function pedirInfo(){
    var precio = "$ 15.000";
    var nombre = "anana";
    var imgSrc = "imgProductos/berenjena.png";
    var urlProducto = "#";
   let crearPdoduct = new crearProduct(precio,nombre,imgSrc,urlProducto);
    principal.appendChild(crearPdoduct);
  }
  

  function eliminarProducto() {
    // Obtener el elemento .eliminar que se ha hecho clic
    const eliminar = document.querySelector(".eliminar");
  
    // Si el elemento .eliminar no se encuentra, salir
    if (!eliminar) {
      return console.log("eliminar no encontrado");
    }
  
    // Obtener el elemento .producto padre
    const producto = eliminar.closest(".producto");
  
    // Si el elemento .producto no se encuentra, salir
    if (!producto) {
      return;
    }
  
    // Eliminar el elemento .producto del DOM
    producto.remove();
  }




  
  