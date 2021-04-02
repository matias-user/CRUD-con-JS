const formulario = document.querySelector('#formulario');

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
            <input class="btn btn-secondary eliminar" type="button" id="${id}" value="X"></input> 
        </div>
        `;
        resultado.appendChild( card );

        edicionCita( nombre, apellido, fecha, hora, id);

        eliminarCita();
    });
};

const limpiarHTML = resultado =>{
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    };
};


export const edicionCita = (nombre, apellido, fecha, hora, id ) => {
    
   const btnesEditar = Array.from( document.querySelectorAll('.btnEditar'));

   btnesEditar.forEach( btn => {

        btn.addEventListener('click', e => {
            
            array.forEach( elemento => {

                if(elemento.id == e.target.id){
                    document.querySelector('#inputNombre').value = elemento.nombre;
                    document.querySelector('#inputApellido').value = elemento.apellido;
                    document.querySelector('#inputFecha').value = elemento.fecha;
                    document.querySelector('#inputHora').value = elemento.hora;

                    document.querySelector('#submit').disabled = true;  

                    //Si existe button.guardar y toco el btn le traspasara el id.
                    if( document.querySelector('.guardar') != null){
                        
                        document.querySelector('.guardar').id = e.target.id;
                    }
                }
            } );

           crearButton(id);

           const btnGuardar = document.querySelector('.guardar');

           document.querySelector('.guardar').classList.remove('d-none'); //Si el boton guardar tiene se aprieta por segunda vez le quito d-none.

           btnGuardar.addEventListener('click', e => {
               
                array.forEach( objeto => {

                    if( objeto.id == e.target.id){
                        objeto.nombre = document.querySelector('#inputNombre').value;
                        objeto.apellido = document.querySelector('#inputApellido').value;
                        objeto.hora = document.querySelector('#inputHora').value;
                        objeto.fecha = document.querySelector('#inputFecha').value;

                        mostrarDatos(array, resultado); //Le inyecto el HTML y el parametro resultado es un selector de tipo div.

                        document.querySelector('#submit').disabled = false; 

                        document.querySelector('.guardar').classList.add('d-none');//Hacer desaparecer btn guardar cuando presione en btn Guardar.
                        
                        
                    }
                });

           });
        });
   });
};

const crearButton = id => {

    if( document.querySelector('.guardar') === null ){
        const button = document.createElement('input');
        button.className = 'btn btn-secondary guardar';
        button.type = 'button';
        button.value = 'Guardar';
        button.id = id;
    
        document.querySelector('#formulario').appendChild( button);
    }
};

export const eliminarCita = () => {
 
    const btnEliminar = Array.from( document.querySelectorAll('.eliminar') );
    

    btnEliminar.forEach( btn => {

        btn.addEventListener('click', e => {

            array = array.filter( obj => obj.id != e.target.id);
            
            mostrarDatos( array, resultado);
        });
    });
};
