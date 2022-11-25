import { productosServices } from "../servicios/productos-servicios.js";

const nuevoProducto = (name, price, imageUrl) =>{

    const card = document.createElement("div");

    const contenido = `
    <img src="${imageUrl}" />
    <div>
     <h5>${name}</h5>
     <p>${price}</p>
    </div>
    `

    card.innerHTML= contenido;
    card.classList.add("producto");
    return card
}

const producto = document.querySelector("[datos-productos]");
 const render = async ()=>{
    try{
        const listaProductos= await productosServices.listaProductos()
        listaProductos.forEach(elemento => {
            producto.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl))
        });
    }catch(erro){
        console.log(erro)

    }
 }
     render();