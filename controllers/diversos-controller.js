import { productosServices } from "../servicios/productos-servicios.js";

const nuevoDiverso = (name, price, imageUrl) =>{

    const card = document.createElement("div");

    const contenido = `
    <img src="${imageUrl}" />
    <div>
     <h5>${name}</h5>
     <p>${price}</p>
    </div>
    `

    card.innerHTML= contenido;
    card.classList.add("diverso");
    return card
}

const consola = document.querySelector("[datos-diversos]");
 const render = async ()=>{
    try{
        const listaDiversos= await productosServices.listaDiversos()
        listaDiversos.forEach(elemento => {
            consola.appendChild(nuevoDiverso(elemento.name, elemento.price, elemento.imageUrl))
        });
    }catch(erro){
        console.log(erro)

    }
 }
     render();