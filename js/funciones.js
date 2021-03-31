export const leerDatos = (inputNombre, inputApellido, inputFecha, inputHora ) => {
    
    const inputNom = inputNombre.value;
    const inputApell = inputApellido.value;
    const inputFech = inputFecha.value;
    const inputHor = inputHora.value;

    crearObjeto( inputNom, inputApell, inputFech, inputHor);
};

let objeto = {};//Tengo que declarar el objeto afuera de lo contrario cuando se aprete el submit lo volvera a setear.
const crearObjeto = (nom, apell, fech, hor) => {
    
    objeto = {
        nombre: nom,
        apellido: apell,
        fecha: fech,
        hora: hor
    };

    insertarEnArray(objeto);
};

let array = [];//Tengo que declarar el array afuera de lo contrario cuando se aprete el submit lo volvera a setear.
const insertarEnArray = objeto  => {

    array = [...array, objeto];
};
