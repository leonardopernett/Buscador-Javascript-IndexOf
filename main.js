const productos = [
    {
        nombre: 'platano',
        valor: 400
    },
    {
        nombre: 'manzana',
        valor: 200
    },
    {
        nombre: 'uva',
        valor: 800
    },
    {
        nombre: 'tomate',
        valor: 100
    }
]

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

const filtrar = () => {
    const texto = formulario.value.toLowerCase();

    resultado.innerHTML = "";

    for (let producto of productos) {
        const nombreProducto = producto.nombre;
        const valorProducto = producto.valor.toString();//se convierte a string para que se pueda realizar la busqueda 

        //busqueda por nombre y valor 
        if ((nombreProducto.indexOf(texto) !== -1) || (valorpro.indexOf(texto) !== -1)) {
            resultado.innerHTML += `<li>nombre: ${producto.nombre}   valor ${producto.valor}</li>`;
        }
    }

    if (resultado.innerHTML == "") {
        resultado.innerHTML += `<li>Producto no encontrado</li>`;

    }

    texto.value="";


}


boton.addEventListener('click', filtrar);
formulario.addEventListener('keyup', filtrar);
filtrar();
