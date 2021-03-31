import { inputNombre, inputApellido, inputFecha, inputHora, submit, formulario } from './selectores.js';
import { leerDatos } from './funciones.js';

document.addEventListener('DOMContentLoaded', () => 
    iniciarApp()
);


function iniciarApp(){
    formulario.addEventListener('submit', e => {
        e.preventDefault();
        
        leerDatos(inputNombre, inputApellido,inputFecha, inputHora );
    });
};
