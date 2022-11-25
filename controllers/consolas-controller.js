import { productosServices } from "../servicios/productos-servicios.js";

const nuevaConsola = (name, price, imageUrl) =>{

    const card = document.createElement("div");

    const contenido = `
    <img src="${imageUrl}" />
    <div>
     <h5>${name}</h5>
     <p>${price}</p>
    </div>
    `

    card.innerHTML= contenido;
    card.classList.add("consola");
    return card
}

const consola = document.querySelector("[datos-consolas]");
 const render = async ()=>{
    try{
        const listaConsolas= await productosServices.listaConsolas()
        listaConsolas.forEach(elemento => {
            consola.appendChild(nuevaConsola(elemento.name, elemento.price, elemento.imageUrl))
        });
    }catch(erro){
        console.log(erro)

    }
 }
     render();