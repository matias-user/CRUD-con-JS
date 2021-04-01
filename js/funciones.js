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
            <button class="btn btn-secondary btnEditar" type="input" id="${id}">Editar</button> 
        </div>
        `;
        resultado.appendChild( card );

        edicionCita( nombre, apellido, fecha, hora, id);
    });
};

const limpiarHTML = resultado =>{
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    };
};


const edicionCita = (nombre, apellido, fecha, hora, id ) => {
    
    
   const btnesEditar = Array.from( document.querySelectorAll('.btnEditar'));

   btnesEditar.forEach( btn => {

        btn.addEventListener('click', () => {
            
            document.querySelector('#inputNombre').value = nombre;
            document.querySelector('#inputApellido').value = apellido;
            document.querySelector('#inputFecha').value = fecha;
            document.querySelector('#inputHora').value = hora;

            document.querySelector('#submit').disabled = true;  

           crearButton(id);

           const btnGuardar = document.querySelector('.guardar');

           btnGuardar.addEventListener('click', e => {
               
                array.forEach( objeto => {

                    if( objeto.id == e.target.id){
                        objeto.nombre = document.querySelector('#inputNombre').value,
                        objeto.apellido = document.querySelector('#inputApellido').value

                        mostrarDatos(array, resultado);
                    }
                });

           });
        });
   });
};

const crearButton = id => {
    const button = document.createElement('input');
    button.className = 'btn btn-secondary guardar';
    button.type = 'button';
    button.value = 'Guardar';
    button.id = id;

    document.querySelector('#formulario').appendChild( button);
    return button;
};

const guardar = () => {

};