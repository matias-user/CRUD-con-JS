import { inputNombre, inputApellido, inputFecha, inputHora, submit, formulario, resultado } from './selectores.js';
import { leerDatos, mostrarDatos, array } from './funciones.js';

document.addEventListener('DOMContentLoaded', () => 
    iniciarApp(),

);


function iniciarApp(){
    formulario.addEventListener('submit', e => {
        e.preventDefault();
        
        
        leerDatos(inputNombre, inputApellido,inputFecha, inputHora );

        mostrarDatos( array, resultado );

        e.target.reset();


    });
};
