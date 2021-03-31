export const leerDatos = (inputNombre, inputApellido, inputFecha, inputHora ) => {
    
    const inputNom = inputNombre.value;
    const inputApell = inputApellido.value;
    const inputFech = inputFecha.value;
    const inputHor = inputHora.value;

    crearObjeto( inputNom, inputApell, inputFech, inputHor);
};

let objeto = {};//Tengo que declarar el objeto afuera de lo contrario cuando se aprete el submit lo volvera a setear.
const crearObjeto = (nombre, apellido, fecha, hora) => {
    
    objeto = {
        nombre,
        apellido,
        fecha,
        hora,
        id: Date.now()
    };

    insertarEnArray(objeto);
};

export let array = [];//Tengo que declarar el array afuera de lo contrario cuando se aprete el submit lo volvera a setear.

const insertarEnArray = objeto  => {

    array = [...array, objeto];
};

export const mostrarDatos = ( array, resultado ) => {
    
    limpiarHTML(resultado);

    array.forEach( objeto => {
        const { nombre, apellido, fecha, hora, id } = objeto;
        
        const card = document.createElement('div');
        card.classList.add('card', 'd-grid', 'mt-2');
        card.innerHTML += `
        <div class="card-body">
            <h5 class="card-title text-uppercase ">${nombre} ${apellido}</h5>
            <p class="card-text">A las: ${hora}</p>
            <p class="card-text">Del dia: ${fecha} agendado.</p>
            <button class="btn btn-secondary type="submit" id="btnEditar">Editar</button> 
        </div>
        `;
        resultado.appendChild( card );

    });
};

const limpiarHTML = resultado =>{
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    };
};

export const edicionCita = array => {
    array.forEach( objeto => {
        const { nombre, apellido, fecha, hora, id } = objeto;

        const idWord = id.toString();

        const btnsEditar = document.querySelectorAll('#btnEditar');
        const btnsEditarArray = Array.from(btnsEditar);

        btnsEditarArray.forEach( btn => {
            btn.addEventListener('click', () => {
                console.log('Hola');
            })
        });
    });
};