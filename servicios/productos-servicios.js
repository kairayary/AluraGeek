const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());

const listaConsolas = () => fetch("http://localhost:3000/consola").then(respuesta => respuesta.json());

const listaDiversos = () => fetch("http://localhost:3000/diverso").then(respuesta => respuesta.json());

export const productosServices ={
    listaProductos,
    listaConsolas,
    listaDiversos
}

